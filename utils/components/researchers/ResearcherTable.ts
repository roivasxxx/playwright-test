import { Researcher, TablePageSize } from "../../../types/types";
import { TABLE, selector } from "../../selectors";

export class ResearcherTable {
  constructor() {}
  getRows() {
    // return cy.get(selector(TABLE.TABLE_ITEM, "^="));
  }

  getRowByEmail(email: Researcher["email"]) {
    // return cy.get(selector(TABLE.TABLE_ITEM, "^=")).contains("tr", email);
  }

  resetFilters() {
    // cy.get("body").then(($body) => {
    //   if ($body.find(selector(TABLE.FILTER_RESET_BUTTON)).length > 0) {
    //     // click the reset button if it exists
    //     cy.get(selector(TABLE.FILTER_RESET_BUTTON)).should("exist").click();
    //     this.waitForDataLoad();
    //   }
    // });
  }

  resetColumns() {
    // cy.get(selector(TABLE.COLUMN_RESET_BUTTON)).should("exist").click();
    this.waitForDataLoad();
  }

  resetSort() {
    this.resetColumns();
  }

  /**
   * Waits for the table data to load.
   * @important - call this after changes to the page size, filters, sorting
   */
  waitForDataLoad() {
    // cy.wait("@GetResearchers");
  }

  setPageSize(pageSize: TablePageSize) {
    // cy.get(selector(TABLE.PAGE_SIZE_SELECT)).should("be.visible").click();
    // const sizeSelector =
    //   selector(TABLE.PAGE_SIZE_SELECT_ITEM, "^=") + `[id="${pageSize}"]`;
    // cy.get(sizeSelector).should("exist").click({ force: true });
    // this.waitForDataLoad();
  }

  getRecordCountText() {
    // return cy.get(selector(TABLE.TOTAL_RECORDS_NUMBER));
  }

  getRecordCount() {
    // return this.getRecordCountText()
    //   .should(($el) => {
    //     const match = $el.text().match(/\d+/);
    //     expect(match).to.not.be.null;
    //     expect(Number(match![0])).to.gte(0);
    //   })
    //   .invoke("text")
    //   .then((text) => {
    //     const count = Number(text.match(/\d+/)![0]);
    //     return count;
    //   });
  }
}
