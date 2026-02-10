/* eslint-disable */
import { TSESLint } from '@typescript-eslint/utils';
import * as myRule from './jsx-no-inline-types';

const ruleTester = new TSESLint.RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
});

describe('checkParam', () => {
  it('1. should call context.report for ObjectPattern with TSTypeLiteral', () => {
    const reportMock = jest.fn();
    const context = { report: reportMock } as any;

    const param = {
      type: 'ObjectPattern',
      typeAnnotation: {
        type: 'TSTypeAnnotation',
        typeAnnotation: {
          type: 'TSTypeLiteral',
          members: {
            length: 3,
          },
        },
      },
    };

    (myRule as any).checkParam(param, context);

    expect(reportMock).toHaveBeenCalledWith({
      node: param,
      messageId: 'noInlineProps',
    });
  });

  it('2. should not call context.report if param is not an ObjectPattern', () => {
    const reportMock = jest.fn();
    const context = { report: reportMock } as any;

    const param = { type: 'Identifier' };

    (myRule as any).checkParam(param, context);

    expect(reportMock).not.toHaveBeenCalled();
  });
});

describe('isValidExpression', () => {
  it('1. should return true for ArrowFunctionExpression with Identifier id', () => {
    const node = {
      id: { type: 'Identifier' },
      init: { type: 'ArrowFunctionExpression' },
    };
    const result = (myRule as any).isValidExpression(node);
    expect(result).toBe(true);
  });

  it('2. should return false for FunctionExpression (not arrow)', () => {
    const node = {
      id: { type: 'Identifier' },
      init: { type: 'FunctionExpression' },
    };
    const result = (myRule as any).isValidExpression(node);
    expect(result).toBe(false);
  });

  it('3. should return false if init is undefined (covers init?.type)', () => {
    const node = {
      id: { type: 'Identifier' },
      init: undefined,
    };
    const result = (myRule as any).isValidExpression(node);
    expect(result).toBe(false);
  });
});

describe('isObjectPattern', () => {
  it('1. should return true for ObjectPattern with TSTypeLiteral', () => {
    const param = {
      type: 'ObjectPattern',
      typeAnnotation: {
        type: 'TSTypeAnnotation',
        typeAnnotation: {
          type: 'TSTypeLiteral',
          members: {
            length: 3,
          },
        },
      },
    };
    const result = (myRule as any).isObjectPattern(param);
    expect(result).toBe(true);
  });

  it('2. should return false for Identifier type', () => {
    const param = { type: 'Identifier' };
    const result = (myRule as any).isObjectPattern(param);
    expect(result).toBe(false);
  });
});

describe('validateFirstParam', () => {
  it('1. should call checkParam if first param exists', () => {
    const node = {
      init: {
        params: [{ type: 'ObjectPattern' }],
      },
    };
    const context = {} as any;

    (myRule as any).validateFirstParam(node, context);
  });

  it('2. should not call checkParam if no params', () => {
    const node = {
      init: {
        params: [],
      },
    };
    const context = {} as any;

    (myRule as any).validateFirstParam(node, context);
  });
});

describe('rule.create', () => {
  const context = {
    report: jest.fn(),
  } as unknown as TSESLint.RuleContext<'noInlineProps', []>;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('1. should call validateFirstParam for valid VariableDeclarator', () => {
    const validateFirstParamMock = jest.spyOn(myRule as any, 'validateFirstParam');
    const node = {
      id: { type: 'Identifier' },
      init: { type: 'ArrowFunctionExpression', params: [] },
    };

    myRule.rule.create(context).VariableDeclarator(node as any);

    expect(validateFirstParamMock).toHaveBeenCalledWith(node, context);
  });

  it('2. should call checkParam for FunctionDeclaration with first param', () => {
    const checkParamMock = jest.spyOn(myRule as any, 'checkParam');
    const node = {
      params: [{ type: 'ObjectPattern' }],
    };

    myRule.rule.create(context).FunctionDeclaration(node as any);

    expect(checkParamMock).toHaveBeenCalledWith(node.params[0], context);
  });

  it('3. should not call checkParam for FunctionDeclaration with no params', () => {
    const checkParamMock = jest.spyOn(myRule as any, 'checkParam');
    const node = { params: [] };

    myRule.rule.create(context).FunctionDeclaration(node as any);

    expect(checkParamMock).not.toHaveBeenCalled();
  });
});

describe('ruleTester integration', () => {
  ruleTester.run(myRule.RULE_NAME, myRule.rule, {
    valid: [
      {
        code: `type Props = { foo: string }; const Component = (props: Props) => <div>{props.foo}</div>;`,
        parserOptions: {
          ecmaVersion: 2020,
          sourceType: 'module',
          ecmaFeatures: { jsx: true },
        },
      },
      {
        code: `interface Props { bar: number } function Component(props: Props) { return <div>{props.bar}</div>; }`,
        parserOptions: {
          ecmaVersion: 2020,
          sourceType: 'module',
          ecmaFeatures: { jsx: true },
        },
      },
      {
        code: `const Component = (props) => <div>{props.foo}</div>;`, // no type at all
        parserOptions: {
          ecmaVersion: 2020,
          sourceType: 'module',
          ecmaFeatures: { jsx: true },
        },
      },
      {
        code: `const Component;`, // triggers node.init === undefined
        parserOptions: {
          ecmaVersion: 2020,
          sourceType: 'module',
        },
      },
      {
        code: `const Component = ({ foo,fruit }: { foo: string;fruit:string }) => <div>{foo}</div>;`,
        parserOptions: {
          ecmaVersion: 2020,
          sourceType: 'module',
          ecmaFeatures: { jsx: true },
        },
      },
    ],
    invalid: [
      {
        code: `function Component({ bar,label,text }: { bar: number;label:string;text:string }) { return <div>{bar}</div>; }`,
        errors: [{ messageId: 'noInlineProps' }],
        parserOptions: {
          ecmaVersion: 2020,
          sourceType: 'module',
          ecmaFeatures: { jsx: true },
        },
      },
    ],
  });
});
