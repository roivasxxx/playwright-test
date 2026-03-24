import { DIALOG, RESEARCHER_FORM, selector } from "../selectors";
import { ConfirmationDialog } from "./ConfirmationDialog";

export class CancelForm {
  dialog: ConfirmationDialog;
  constructor() {
    this.dialog = new ConfirmationDialog();
  }

  cancel() {
    cy.get(selector(RESEARCHER_FORM.CANCEL_BUTTON)).click();
    this.dialog.confirm();
  }
}
