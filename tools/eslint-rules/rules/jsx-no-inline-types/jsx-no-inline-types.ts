import { ESLintUtils, TSESTree } from '@typescript-eslint/utils';

export const RULE_NAME = 'jsx-no-inline-types';

export const checkParam = (param: TSESTree.Parameter, context) => {
  if (isObjectPattern(param)) {
    context.report({
      node: param,
      messageId: 'noInlineProps',
    });
  }
};

export const isValidExpression = (node: TSESTree.VariableDeclarator) => {
  return node.id.type === 'Identifier' && node.init?.type === 'ArrowFunctionExpression';
};

export const isObjectPattern = (param: TSESTree.Parameter) => {
  if (param.type !== 'ObjectPattern') return false;

  const annotation = param.typeAnnotation;

  return handleIsObjectPatternComplexity(annotation);
};

const handleIsObjectPatternComplexity = (annotation: TSESTree.TSTypeAnnotation) => {
  if (isValidObjectPattern(annotation)) {
    const typeLiteral = annotation.typeAnnotation as { members: { length: number } };
    return typeLiteral.members.length > 2;
  }
  return false;
};

const isValidObjectPattern = (annotation: TSESTree.TSTypeAnnotation) => {
  const isTrueAnnotation = () => {
    return annotation && annotation.type === 'TSTypeAnnotation';
  };
  return isTrueAnnotation() && annotation.typeAnnotation.type === 'TSTypeLiteral';
};

export const validateFirstParam = (node: TSESTree.VariableDeclarator, context) => {
  const init = node.init as TSESTree.ArrowFunctionExpression;
  const [firstParam] = init.params;
  if (firstParam) checkParam(firstParam, context);
};

export const rule = ESLintUtils.RuleCreator(() => __filename)({
  name: RULE_NAME,
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow inline type React function components with more than two props.',
    },
    messages: {
      noInlineProps: 'Inline types should define no more than two properties. For types with multiple properties, please define a named type or interface to improve readability and maintainability.',
    },
    schema: [],
  },
  defaultOptions: [],

  create(context) {
    return {
      VariableDeclarator(node) {
        if (isValidExpression(node)) {
          validateFirstParam(node, context);
        }
      },

      FunctionDeclaration(node) {
        const [firstParam] = node.params;
        if (firstParam) checkParam(firstParam, context);
      },
    };
  },
});
