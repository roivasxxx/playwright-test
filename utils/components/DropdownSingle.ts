import { Page } from "@playwright/test";
import { selector } from "../selectors";

/**
 * Dropdown component
 * @example new DropdownSingle(RESEARCHER_FORM.SELECT_LANGUAGE,RESEARCHER_FORM.SELECT_USER_ROLE_OPTION);
 */
export class DropdownSingle<T extends string> {
  dropdownAnchorSelector: string;
  optionSelectorPrefix: string;
  page: Page;

  /**
   * Constructor
   * @param anchorSelector - The selector for the dropdown anchor
   * @param optionSelectorPrefix - The prefix for the option selectors
   */
  constructor(
    page: Page,
    anchorSelector: string,
    optionSelectorPrefix: string
  ) {
    this.page = page;
    this.optionSelectorPrefix = optionSelectorPrefix;
    this.dropdownAnchorSelector = anchorSelector;
  }

  /**
   * Toggles the dropdown
   */
  toggle() {
    return this.page.getByTestId(this.dropdownAnchorSelector).click();
  }

  /**
   * Selects an option
   * @param option - The option to select, uses the optionSelectorPrefix as a prefix for the selector
   */
  selectOption(option: T) {
    return this.page
      .locator(
        selector("li " + selector(`${this.optionSelectorPrefix}-${option}`))
      )
      .click();
    // cy.get("li" + selector(`${this.optionSelectorPrefix}-${option}`))
    //   .should("exist")
    //   .click({ force: true });
  }

  /**
   * Gets the currently displayed options
   */
  getDisplayedOptions() {
    return this.page.locator(selector(this.optionSelectorPrefix));
    // return cy.get(selector(this.optionSelectorPrefix, "^="));
  }
}
