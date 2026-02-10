import { ESLintUtils, TSESTree } from '@typescript-eslint/utils';

export const RULE_NAME = 'environment-key-naming-convention';

export const isEnvProperty = (property: TSESTree.Node): boolean => {
  return property.type === 'Identifier' && property.name === 'env';
}

export const isProcessObject = (object: TSESTree.Node): boolean => {
  if (object.type !== 'MemberExpression') {
    return false;
  }

  const property = object.property;
  return isEnvProperty(property);
}

export const isProcessEnv = (node: TSESTree.Node): boolean => {
  if (node.type !== 'MemberExpression') {
    return false;
  }

  return isProcessObject(node.object);
}

export const checkVariableFormat = (node: TSESTree.Identifier, context) => {
  const variableName = node.name;
  const isValidFormat = /^[A-Z0-9_]+$/.test(variableName);

  if (!isValidFormat) {
    context.report({
      node,
      messageId: 'forbiddenEventHandler',
      data: { variableName }
    });
  }
}

export const isProcessEnvWithIdentifier = (node) => {
  if (!isProcessEnv(node)) {
    return false;
  }

  return node.property.type === 'Identifier';
}

export const isIdentifier = (node): node is TSESTree.Identifier => {
  return node.type === 'Identifier';
}

export const checkProperty = (node, context) => {
  if (!isIdentifier(node)) {
    return;
  }
  checkVariableFormat(node, context);
}

export const rule = ESLintUtils.RuleCreator(() => __filename)({
  name: RULE_NAME,
  meta: {
    type: 'problem',
    docs: {
      description: 'Requires to use uppercase character and underscore in enviroment variables',
      recommended: 'recommended',
    },
    schema: [],
    messages: {
      forbiddenEventHandler: 'Environment variable "{{variableName}}" accessed through process.env should be written in all uppercase letters and may include underscores.'
    }
  },
  defaultOptions: [],
  create(context) {
    return {
      MemberExpression(node) {
        if (!isProcessEnvWithIdentifier(node)) {
          return;
        }
        checkProperty(node.property, context);
      }
    };
  }
});
