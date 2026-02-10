import { TSESLint } from '@typescript-eslint/utils';
import { RULE_NAME, rule, getSegments, getBasename, getRouteInfo } from './no-dynamic-routes';

const ruleTester = new TSESLint.RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
});

ruleTester.run(RULE_NAME, rule, {
  valid: [
    {
      name: 'static route should pass',
      code: 'export default function Page() { return <div>Hello</div>; }',
      filename: '/apps/academic/pinebaatars/services/student-admin-service/src/pages/students.tsx',
    },
    {
      name: 'test file with dynamic route should be exempted',
      code: 'export default function Page() { return <div>Hello</div>; }',
      filename: '/apps/academic/pinebaatars/services/student-admin-service/src/pages/[id].test.tsx',
    },
    {
      name: 'cypress file should be exempted',
      code: 'describe("test", () => { it("should work", () => {}); });',
      filename: '/cypress/integration/dynamic-id/test.ts',
    },
  ],
  invalid: [
    {
      name: 'dynamic route should fail',
      code: 'export default function Page() { return <div>Hello</div>; }',
      filename: '/apps/academic/pinebaatars/services/student-admin-service/src/pages/[id].tsx',
      errors: [{ messageId: 'noDynamicRoutes' }],
    },
    {
      name: 'dynamic API route should fail with specific message',
      code: 'export default function handler() { return {}; }',
      filename: '/apps/academic/pinebaatars/services/student-admin-service/src/pages/api/users/[id].ts',
      errors: [{ messageId: 'dynamicApiRoute' }],
    },
    {
      name: 'nested dynamic route should fail with specific message',
      code: 'export default function Page() { return <div>Hello</div>; }',
      filename: '/apps/academic/pinebaatars/services/student-admin-service/src/pages/[category]/[id].tsx',
      errors: [{ messageId: 'nestedDynamicRoute' }],
    },
    {
      name: 'legacy dynamic route should show different message',
      code: 'export default function Page() { return <div>Hello</div>; }',
      filename: '/apps/academic/pinebaatars/web/src/pages/[id].tsx',
      options: [{ allowedServices: ['academic-pinebaatars-web'] }],
      errors: [{ messageId: 'legacyDynamicRoute' }],
    },
  ],
});

// Additional comprehensive tests for 100% coverage
describe('no-dynamic-routes comprehensive coverage', () => {
  const extraRuleTester = new TSESLint.RuleTester({
    parser: require.resolve('@typescript-eslint/parser'),
  });

  describe('Edge cases and path variations', () => {
    extraRuleTester.run('edge-cases', rule, {
      valid: [
        {
          name: 'custom exempt pattern should work',
          code: 'export default function Page() { return <div>Test</div>; }',
          filename: '/apps/project/service/src/custom/[id].tsx',
          options: [{ exemptPatterns: ['**/custom/**'] }],
        },
      ],
      invalid: [
        {
          name: 'file without apps in path should still fail if has dynamic segments',
          code: 'export default function Page() { return <div>Test</div>; }',
          filename: '/some/other/path/[id].tsx',
          errors: [{ messageId: 'noDynamicRoutes' }],
        },
        {
          name: 'api route with single segment',
          code: 'export default function handler() { return {}; }',
          filename: '/apps/project/service/src/api/users/[id].ts',
          errors: [{ messageId: 'dynamicApiRoute' }],
        },
      ],
    });
  });

  describe('Filename variations', () => {
    extraRuleTester.run('filenames', rule, {
      valid: [
        {
          name: 'no brackets in filename should pass',
          code: 'export default function Page() { return <div>Test</div>; }',
          filename: '/apps/test/service/pages/user-id.tsx',
        },
      ],
      invalid: [
        {
          name: 'multiple bracket patterns in filename',
          code: 'export default function Page() { return <div>Test</div>; }',
          filename: '/apps/test/service/pages/[cat]-[id].tsx',
          errors: [{ messageId: 'nestedDynamicRoute' }],
        },
      ],
    });
  });

  describe('Direct function testing for 100% coverage', () => {
    // Test the functions directly to ensure all branches are covered
    
    it('should test getSegments with empty array', () => {
      expect(getSegments([])).toBe('none');
    });

    it('should test getBasename with empty path', () => {
      expect(getBasename('')).toBe('unknown');
    });

    it('should test getRouteInfo with no matches', () => {
      const result = getRouteInfo('/apps/test/service/no-brackets.tsx');
      expect(result.segments).toEqual([]);
    });

    it('should test getSegments with multiple segments', () => {
      expect(getSegments(['[id]', '[category]'])).toBe('[id], [category]');
    });

    it('should test getBasename with valid filename', () => {
      expect(getBasename('/apps/test/[id].tsx')).toBe('[id].tsx');
    });
  });

  describe('Missing branch coverage tests', () => {
    extraRuleTester.run('coverage-branches', rule, {
      valid: [
        {
          name: 'file without apps directory should pass if no dynamic segments',
          code: 'export default function Page() { return <div>Test</div>; }',
          filename: '/other/path/static-file.tsx',
        },
      ],
      invalid: [
        {
          name: 'service with empty name fallback',
          code: 'export default function Page() { return <div>Test</div>; }',
          filename: '/[id].tsx',
          errors: [{ messageId: 'noDynamicRoutes' }],
        },
        {
          name: 'path without apps directory but with dynamic segments',
          code: 'export default function Page() { return <div>Test</div>; }',
          filename: '/other/[id].tsx',
          errors: [{ messageId: 'noDynamicRoutes' }],
        },
      ],
    });
  });
});