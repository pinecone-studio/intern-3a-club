import { rule as envRule, RULE_NAME as envRuleName } from './rules/environment-key-naming-convention/environment-key-naming-convention';
import { rule as JSXNoInlineFunction, RULE_NAME as JSXNoInlineFunctionName } from './rules/jsx-no-inline-function/jsx-no-inline-function';
import { rule as JSXNoInlineTypes, RULE_NAME as JSXNoInlineTypesName } from './rules/jsx-no-inline-types/jsx-no-inline-types';
import { rule as noDynamicRoutes, RULE_NAME as noDynamicRoutesName } from './rules/no-dynamic-routes/no-dynamic-routes';

/**
 * Import your custom workspace rules at the top of this file.
 *
 * For example:
 *
 * import { RULE_NAME as myCustomRuleName, rule as myCustomRule } from './rules/my-custom-rule';
 *
 * In order to quickly get started with writing rules you can use the
 * following generator command and provide your desired rule name:
 *
 * ```sh
 * npx nx g @nx/eslint:workspace-rule {{ NEW_RULE_NAME }}
 * ```
 */

module.exports = {
  /**
   * Apply the imported custom rules here.
   *
   * For example (using the example import above):
   *
   * rules: {
   *  [myCustomRuleName]: myCustomRule
   * }
   */
  rules: { [JSXNoInlineFunctionName]: JSXNoInlineFunction, [envRuleName]: envRule, [JSXNoInlineTypesName]: JSXNoInlineTypes, [noDynamicRoutesName]: noDynamicRoutes },
};
