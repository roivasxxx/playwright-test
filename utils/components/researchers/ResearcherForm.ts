import { RESEARCHER_FORM, selector } from "../../selectors";
import { DropdownSingle } from "../DropdownSingle";
import { CancelForm } from "../CancelForm";
import { TextInput } from "../TextInput";
import { Researcher } from "../../../types/types";
import { Page } from "@playwright/test";

export class ResearcherForm {
  languageDropdown: DropdownSingle<Researcher["language"]>;
  roleDropdown: DropdownSingle<Researcher["role"]>;
  cancelForm: CancelForm;
  emailInput: TextInput;
  passwordInput: TextInput;
  passwordConfirmInput: TextInput;
  firstNameInput: TextInput;
  lastNameInput: TextInput;
  page: Page;
  constructor(page: Page) {
    this.page = page;
    // setup language dropdown
    this.languageDropdown = new DropdownSingle(
      page,
      RESEARCHER_FORM.SELECT_LANGUAGE,
      RESEARCHER_FORM.SELECT_LANGUAGE_OPTION
    );
    // setup role dropdown
    this.roleDropdown = new DropdownSingle(
      page,
      RESEARCHER_FORM.SELECT_USER_ROLE,
      RESEARCHER_FORM.SELECT_USER_ROLE_OPTION
    );
    // setup inputs
    this.cancelForm = new CancelForm();
    this.emailInput = new TextInput(page, RESEARCHER_FORM.EMAIL_INPUT);
    this.passwordInput = new TextInput(page, RESEARCHER_FORM.PASSWORD_INPUT);
    this.passwordConfirmInput = new TextInput(
      page,
      RESEARCHER_FORM.REPEAT_PASSWORD_INPUT
    );
    this.firstNameInput = new TextInput(page, RESEARCHER_FORM.FIRST_NAME_INPUT);
    this.lastNameInput = new TextInput(page, RESEARCHER_FORM.LAST_NAME_INPUT);
  }

  /**
   * Submits the form by clicking the save button
   */
  async submit() {
    // cy.get(selector(RESEARCHER_FORM.SAVE_BUTTON)).click();
    await this.page.getByRole("button", { name: "Save" }).click();
  }

  async fillEmail(email: Researcher["email"]) {
    await this.emailInput.type(email);
  }

  async fillInvalidEmail(email: string) {
    await this.emailInput.type(email);
  }

  async fillPassword(password: Researcher["password"]) {
    await this.passwordInput.type(password);
  }

  async fillPasswordConfirm(password: Researcher["password"]) {
    await this.passwordConfirmInput.type(password);
  }

  async fillFirstName(firstName: Researcher["firstName"]) {
    if (!firstName) return;
    this.firstNameInput.type(firstName);
  }

  async fillLastName(lastName: Researcher["lastName"]) {
    if (!lastName) return;
    await this.lastNameInput.type(lastName);
  }

  async selectLanguage(language: Researcher["language"]) {
    await this.languageDropdown.toggle();
    await this.languageDropdown.selectOption(language);
  }

  async selectRole(roles: Researcher["role"]) {
    await this.roleDropdown.toggle();
    await this.roleDropdown.selectOption(roles);
  }

  fillForm(researcher: Researcher) {
    this.fillEmail(researcher.email);
    this.fillPassword(researcher.password);
    this.fillPasswordConfirm(
      researcher.passwordConfirmation ?? researcher.password // use the same password for password confirmation if not provided
    );
    this.fillFirstName(researcher.firstName);
    this.fillLastName(researcher.lastName);
    this.selectLanguage(researcher.language);
    this.selectRole(researcher.role);
  }

  getEmailInputError() {
    // TODO: a specific selector should be used
    // return cy.get("body form");
    return this.page.locator("body form");
  }

  getPasswordInputError() {
    // TODO: a specific selector should be used
    // return cy.get("body form");
  }

  getPasswordConfirmationInputError() {
    // TODO: a specific selector should be used
    // return cy.get("body form");
  }

  cancel() {
    this.cancelForm.cancel();
  }
}
