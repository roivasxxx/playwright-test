/**
 * Constructs a 'data-cy' selector for the provided value and operator.
 * @param cySelector - The value to use in the selector
 * @param operator - The operator to use in the selector, defaults to '='
 */
const selector = (
  cySelector: string,
  operator: "=" | "^=" | "$=" | "*=" | "~=" | "|=" = "="
) => `[data-cy${operator}"${cySelector}"]`;

/**
 * Constructs an attribute selector for the provided attribute, value and operator.
 * @param attribute - The attribute to use in the selector
 * @param value - The value to use in the selector
 * @param operator - The operator to use in the selector, defaults to '='
 */
const attributeValue = (
  attribute: string,
  value: string,
  operator: "=" | "^=" | "$=" | "*=" | "~=" | "|=" = "="
) => `[${attribute}${operator}"${value}"]`;

export { selector, attributeValue };
