import { Page } from "@playwright/test";
import { selector } from "../selectors";

export class TextInput {
  elementSelector: string;
  page: Page;
  constructor(page: Page, selector: string) {
    this.page = page;
    this.elementSelector = selector;
  }

  type(value: string) {
    return this.page.locator(selector(this.elementSelector)).fill(value);
  }
}
