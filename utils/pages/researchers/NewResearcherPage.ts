import { Page, expect } from "@playwright/test";
import { ResearcherForm } from "../../components/researchers/ResearcherForm";

export class NewResearcherPage {
  form: ResearcherForm;
  page: Page;
  constructor(page: Page) {
    this.page = page;
    this.form = new ResearcherForm(page);
  }

  async isCurrentRoute() {
    await expect(this.page).toHaveURL(
      /new-ui\/cs-CZ\/administration\/researchers\/new-researcher/
    );
  }

  getForm() {
    return this.form;
  }

  async visit() {
    await this.page.goto(
      "/new-ui/cs-CZ/administration/researchers/new-researcher"
    );
  }
}
