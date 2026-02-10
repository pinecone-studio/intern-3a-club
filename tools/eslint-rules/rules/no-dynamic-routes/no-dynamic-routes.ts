import { ESLintUtils } from '@typescript-eslint/utils';
import * as path from 'path';

export const RULE_NAME = 'no-dynamic-routes';
const regexCache = new Map<string, RegExp>();

function globToRegex(glob: string): RegExp {
  if (regexCache.has(glob)) return regexCache.get(glob)!;
  
  let pattern = glob
    .replace(/[.+^${}()|[\]\\]/g, '\\$&')
    .replace(/\*\*/g, '___DOUBLE_STAR___')
    .replace(/\*/g, '[^/]*')
    .replace(/___DOUBLE_STAR___/g, '.*');
  
  pattern = '^' + pattern + '$';
  
  const regex = new RegExp(pattern);
  regexCache.set(glob, regex);
  return regex;
}

type MessageIds = 'noDynamicRoutes' | 'legacyDynamicRoute' | 'dynamicApiRoute' | 'nestedDynamicRoute';

interface RuleConfig {
  allowedServices: string[];
  exemptPatterns: string[];
}

interface ContextOptions {
  allowedServices?: string[];
  exemptPatterns?: string[];
}

interface Context {
  options: ContextOptions[];
  getFilename(): string;
  report: (_args: unknown) => void;
}

const DEFAULT_EXEMPT_PATTERNS = [
  '**/cypress/**',
  '**/*.test.*',
  '**/*.spec.*',
  '**/node_modules/**'
];

function getConfigOptions(context: Context): ContextOptions {
  return context.options.length > 0 ? context.options[0] : {};
}

function getRuleConfig(context: Context): RuleConfig {
  const config = getConfigOptions(context);
  return {
    allowedServices: config.allowedServices || [],
    exemptPatterns: config.exemptPatterns || DEFAULT_EXEMPT_PATTERNS
  };
}

function isFileExempt(filename: string, exemptPatterns: string[]): boolean {
  const relativePath = path.relative(process.cwd(), filename).replace(/\\/g, '/');
  return exemptPatterns.some((pattern: string) => globToRegex(pattern).test(relativePath));
}

function hasDynamicRouteSegments(filename: string): boolean {
  return /\[.*?\]/.test(path.basename(filename));
}

function extractServiceName(filename: string): string {
  const pathParts = filename.split('/');
  const appsIndex = pathParts.findIndex(part => part === 'apps');
  
  if (appsIndex >= 0 && pathParts.length > appsIndex + 1) {
    const serviceSegments = pathParts.slice(appsIndex + 1);
    return serviceSegments.slice(0, Math.min(3, serviceSegments.length)).join('-');
  }
  
  return '';
}

function getRouteInfo(filepath: string) {
  const segments = filepath.match(/\[.*?\]/g) || [];
  return {
    isApiRoute: filepath.includes('/api/'),
    isPageRoute: filepath.includes('/page.') || filepath.includes('/route.'),
    hasMultipleSegments: segments.length > 1,
    segments
  };
}

const MESSAGE_GENERATORS = {
  legacy: (serviceName: string) => ({ messageId: 'legacyDynamicRoute' as MessageIds, additionalInfo: ` (Service: ${serviceName} - Legacy route scheduled for refactoring)` }),
  api: (segments: string[]) => ({ messageId: 'dynamicApiRoute' as MessageIds, additionalInfo: ` API routes should use query parameters instead of [${segments.join('], [')}].` }),
  nested: (segments: string[]) => ({ messageId: 'nestedDynamicRoute' as MessageIds, additionalInfo: ` Found ${segments.length} dynamic segments: ${segments.join(', ')}` }),
  default: () => ({ messageId: 'noDynamicRoutes' as MessageIds, additionalInfo: '' })
};

function determineMessageAndInfo(isServiceAllowed: boolean, serviceName: string, routeInfo: ReturnType<typeof getRouteInfo>) {
  const generators = [
    { condition: isServiceAllowed, generator: () => MESSAGE_GENERATORS.legacy(serviceName) },
    { condition: routeInfo.isApiRoute, generator: () => MESSAGE_GENERATORS.api(routeInfo.segments) },
    { condition: routeInfo.hasMultipleSegments, generator: () => MESSAGE_GENERATORS.nested(routeInfo.segments) }
  ];
  const match = generators.find(g => g.condition);
  return match ? match.generator() : MESSAGE_GENERATORS.default();
}

export function getBasename(filename: string) {
  return path.basename(filename) || 'unknown';
}

export function getSegments(segments: string[]) {
  return segments.length > 0 ? segments.join(', ') : 'none';
}

export { getRouteInfo };

function reportViolation(context: Context, node: unknown, filename: string, serviceName: string, isServiceAllowed: boolean, routeInfo: ReturnType<typeof getRouteInfo>) {
  const { messageId, additionalInfo } = determineMessageAndInfo(isServiceAllowed, serviceName, routeInfo);
  context.report({ node, messageId, data: { filename: getBasename(filename), serviceName: serviceName || 'unknown', segments: getSegments(routeInfo.segments), additionalInfo } });
}

export const rule = ESLintUtils.RuleCreator(() => __filename)({
  name: RULE_NAME,
  meta: {
    type: 'problem',
    docs: {
      description: 'Prevent creation of new dynamic routes with [brackets] in filenames',
    },
    fixable: null,
    schema: [{
      type: 'object',
      properties: {
        allowedServices: { type: 'array', items: { type: 'string' }, description: 'Services where dynamic routes are temporarily allowed during migration' },
        exemptPatterns: { type: 'array', items: { type: 'string' }, description: 'File patterns to exempt from the rule (e.g., test files)' }
      },
      additionalProperties: false
    }],
    messages: {
      noDynamicRoutes: 'Dynamic routes with [brackets] are not allowed. Use query parameters instead. See migration guide: Issue #19012{{additionalInfo}}',
      legacyDynamicRoute: 'This is a legacy dynamic route that needs refactoring. See Issue #19012 for migration checklist. (Service: {{serviceName}} - Legacy route scheduled for refactoring){{additionalInfo}}',
      dynamicApiRoute: 'Dynamic API routes with [brackets] should be converted to static routes with query parameters. API routes should use query parameters instead of {{segments}}.{{additionalInfo}}',
      nestedDynamicRoute: 'Nested dynamic routes like [category]/[id] should be flattened to use query parameters.{{additionalInfo}}'
    }
  },
  defaultOptions: [{}],
  create(context) {
    const { allowedServices, exemptPatterns } = getRuleConfig(context);
    const filename = context.getFilename();
    if (isFileExempt(filename, exemptPatterns)) return {};
    if (!hasDynamicRouteSegments(filename)) return {};
    const serviceName = extractServiceName(filename);
    const isServiceAllowed = allowedServices.includes(serviceName);
    const routeInfo = getRouteInfo(filename);
    return { Program: (node) => reportViolation(context, node, filename, serviceName, isServiceAllowed, routeInfo) };
  }
});