import { DIALOG, selector } from "../selectors";

export class ConfirmationDialog {
  constructor() {}

  confirm() {
    cy.get(selector(DIALOG.DIALOG)).should("be.visible");
    cy.get(selector(DIALOG.CONFIRM_BUTTON)).click();
  }

  cancel() {
    cy.get(selector(DIALOG.DIALOG)).should("be.visible");
    cy.get(selector(DIALOG.DECLINE_BUTTON)).click();
  }
}
