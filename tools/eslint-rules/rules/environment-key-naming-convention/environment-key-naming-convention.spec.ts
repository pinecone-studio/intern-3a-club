import { TSESLint, TSESTree } from '@typescript-eslint/utils';
import { RULE_NAME, checkProperty, isIdentifier, isProcessEnv, rule } from './environment-key-naming-convention';

const ruleTester = new TSESLint.RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
});

ruleTester.run(RULE_NAME, rule, {
  valid: [`const MONGO_URI = process.env.MONGO_URI`],
  invalid: [
    {
      code: 'const mongouri = process.env.mongoUri;',
      errors: [{ messageId: 'forbiddenEventHandler' }]
    }
  ],
});

describe('isProcessEnv', () => {
  it('returns false if node is not MemberExpression', () => {
    const node = {
      type: 'Identifier'
    };
    expect(isProcessEnv(node as TSESTree.Node)).toBe(false);
  });

  it('returns false if object is not process.env pattern', () => {
    const node = {
      type: 'MemberExpression',
      object: {
        type: 'Identifier',
        name: 'process'
      },
      property: {
        type: 'Identifier',
        name: 'foo'
      }
    };
    expect(isProcessEnv(node as TSESTree.Node)).toBe(false);
  });
});

describe('checkProperty', () => {
  it('returns false if node is not an Identifier', () => {
    const node = {
      type: 'Identifier',
      value: 42
    };
    expect(isIdentifier(node as TSESTree.Node)).toBe(true);
  });
  it('returns false if node is not an Identifier', () => {
    const node = {
      type: 'mock',
      value: 42
    };
    expect(isIdentifier(node as TSESTree.Node)).toBe(false);
  });
});

describe('checkProperty', () => {
  it('reports an error if node is not an Identifier', () => {
    const node = {
      type: 'Literal',
      value: 42
    };
    const contextMock = {
      report: jest.fn()
    };
    checkProperty(node as unknown as TSESTree.Identifier, contextMock);
    expect(contextMock.report).not.toHaveBeenCalled();
  });
});
