import { Page, expect } from "@playwright/test";
import { ResearcherTable } from "../../components/researchers/ResearcherTable";
import { RESEARCHER_FORM, selector } from "../../selectors";

export class ResearcherTablePage {
  table: ResearcherTable;
  page: Page;
  constructor(page: Page) {
    this.page = page;
    this.table = new ResearcherTable();
  }

  getTable() {
    return this.table;
  }

  async isCurrentRoute() {
    await expect(this.page).toHaveURL(
      /\/new-ui\/en-US\/administration\/researchers/
    );
  }

  async addResearcher() {
    await this.page
      .locator(selector(RESEARCHER_FORM.ADD_ENTITY_BUTTON))
      .click();
  }
}
