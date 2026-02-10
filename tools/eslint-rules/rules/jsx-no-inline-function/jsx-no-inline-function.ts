import { ESLintUtils, TSESTree } from '@typescript-eslint/utils';

export const RULE_NAME = 'jsx-no-inline-function';

type Expression = TSESTree.ArrowFunctionExpression | TSESTree.FunctionExpression;

export const extractExpressionFromJSXAttribute = (node: TSESTree.JSXAttribute) => {
  if (node.value.type === 'JSXExpressionContainer') {
    let valueNode: Expression | null = null;
    valueNode = node.value.expression as Expression;
    return valueNode
  }
}

export const isFunctionExpression = (valueNode: Expression): boolean => {
  return valueNode.type === 'ArrowFunctionExpression' || valueNode.type === 'FunctionExpression';
}

export const isExpressionAFunction = (valueNode: Expression): boolean => {
  return isFunctionExpression(valueNode);
}

export const isValidExpression = (valueNode: Expression): boolean => {
  return Boolean(valueNode) && isExpressionAFunction(valueNode);
}

export const reportIfInvalidExpression = (valueNode: Expression, context, node: TSESTree.JSXAttribute): void => {
  if (isValidExpression(valueNode)) {
    context.report({
      node: valueNode,
      messageId: "forbiddenEventHandler",
      data: {
        eventName: node.name.name,
      },
    });
  }
}

export const rule = ESLintUtils.RuleCreator(() => __filename)({
  name: RULE_NAME,
  meta: {
    type: 'problem',
    docs: {
      description: 'Requires the use of named functions for specific event handlers in JSX.',
      recommended: 'recommended',
    },
    schema: [
      {
        type: 'array',
        items: {
          type: 'string',
        },
        uniqueItems: true,
      },
    ],
    messages: {
      forbiddenEventHandler: 'Avoid directly defining a function in JSX. Instead, use a named function for the {{eventName}} event.',
    },
  },
  defaultOptions: [],

  create(context) {
    return {
      JSXAttribute(node) {
        if (node.value) {
          const valueNode = extractExpressionFromJSXAttribute(node);
          reportIfInvalidExpression(valueNode, context, node);
        }
      }
    };
  }
});
