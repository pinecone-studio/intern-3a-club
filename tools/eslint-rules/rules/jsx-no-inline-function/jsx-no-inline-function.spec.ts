/* eslint-disable max-lines */
/* eslint-disable no-secrets/no-secrets */
import { ESLintUtils, TSESLint, TSESTree } from '@typescript-eslint/utils';
import { RuleContext } from '@typescript-eslint/utils/ts-eslint';
import * as myRule from './jsx-no-inline-function';

type Expression = TSESTree.ArrowFunctionExpression | TSESTree.FunctionExpression;

const ruleTester = new TSESLint.RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
});

describe('extractExpressionFromJSXAttribute', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('1. Should return the expression from JSXExpressionContainer', () => {
    const mockNode = {
      type: 'JSXAttribute',
      name: {
        type: 'JSXIdentifier',
        name: 'exampleAttribute',
      },
      value: {
        type: 'JSXExpressionContainer',
        expression: {
          type: 'Literal',
          value: 'exampleValue',
        },
      },
    };

    const result = myRule.extractExpressionFromJSXAttribute(mockNode as TSESTree.JSXAttribute);

    expect(result).toEqual({
      type: 'Literal',
      value: 'exampleValue',
    });
  });

  it('2. Should return null when the attribute value is not JSXExpressionContainer', () => {
    const mockNode = {
      type: 'JSXAttribute',
      name: {
        type: 'JSXIdentifier',
        name: 'exampleAttribute',
      },
      value: {
        type: 'Literal',
        value: 'exampleValue',
      },
    };

    const result = myRule.extractExpressionFromJSXAttribute(mockNode as TSESTree.JSXAttribute);
    expect(result).toBeUndefined();
  });
});


describe('isFunctionExpression', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('3. Should return true for ArrowFunctionExpression', () => {
    const mockNode = {
      type: 'ArrowFunctionExpression',
    };

    const result = myRule.isFunctionExpression(mockNode as Expression);
    expect(result).toBe(true);
  });

  it('4. Should return true for FunctionExpression', () => {
    const mockNode = {
      type: 'FunctionExpression',
    };

    const result = myRule.isFunctionExpression(mockNode as Expression);
    expect(result).toBe(true);
  });
});


describe('isExpressionAFunction', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('5. Should call the returned function when isFunctionExpression returns true', () => {
    const isFunctionExpressionMock = jest.spyOn(myRule, 'isFunctionExpression')
    isFunctionExpressionMock.mockReturnValue(true);

    const mockNode = {
      type: 'FunctionExpression',
    };

    const result = myRule.isExpressionAFunction(mockNode as Expression);
    expect(result).toBe(true);
  });
});

describe('isValidExpression', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('6. Should call the returned function when isValidExpression returns true', () => {
    const mockNode = {
      type: 'ArrowFunctionExpression',
    };
    const result = myRule.isValidExpression(mockNode as Expression);

    expect(result).toBe(true);
  });
});

describe('reportIfInvalidExpression', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('7. Should report if isValidExpression returns true', () => {
    const contextMock = {
      report: jest.fn(),
    };

    const valueNode = {
      type: 'ArrowFunctionExpression',
    };

    const node = {
      type: 'JSXAttribute',
      name: {
        type: 'JSXIdentifier',
        name: 'exampleAttribute',
      },
      value: valueNode,
    };

    myRule.reportIfInvalidExpression(valueNode as Expression, contextMock, node as TSESTree.JSXAttribute);

    expect(contextMock.report).toHaveBeenCalledWith({
      node: valueNode,
      messageId: 'forbiddenEventHandler',
      data: {
        eventName: 'exampleAttribute',
      },
    });
  });
});

describe('create', () => {
  it('8. Should report errors for invalid expressions', () => {
    ESLintUtils.RuleCreator(() => __filename)({
      name: 'RULE_NAME',
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
              const valueNode = myRule.extractExpressionFromJSXAttribute(node);
              myRule.reportIfInvalidExpression(valueNode, context, node);
            }
          }
        };
      }
    });
  })
})
type MyRuleContext = Readonly<RuleContext<"forbiddenEventHandler", unknown[]>>;

describe('create', () => {
  ruleTester.run(myRule.RULE_NAME, myRule.rule, {
    valid: [
      `onClick={handleClick}`,
      `onChange={handleChange}`,
    ],
    invalid: [],
  });
  const mockContext = {
    id: 'mockId',
    options: [],
    parserPath: 'mockParserPath',
    parserOptions: {},
  } as MyRuleContext;
  it('9. Should not report if value does not exist', () => {
    const reportIfInvalidExpressionMock = jest.spyOn(myRule, 'reportIfInvalidExpression')

    const node = { value: null } as TSESTree.JSXAttribute
    myRule.rule.create(mockContext).JSXAttribute(node);

    expect(reportIfInvalidExpressionMock).not.toHaveBeenCalled();
  });
  it('10. Should report if value exists', () => {
    const reportIfInvalidExpressionMock = jest.spyOn(myRule, 'reportIfInvalidExpression')
    reportIfInvalidExpressionMock.mockImplementation()
    const node = { value: 'someValue' } as unknown as TSESTree.JSXAttribute;
    myRule.rule.create(mockContext).JSXAttribute(node);

    expect(reportIfInvalidExpressionMock).toBeCalled();
  });
});