import { expect, test } from "@playwright/test"
import { NewResearcherPage } from "../utils/pages/researchers/NewResearcherPage"
import { ResearcherTablePage } from "../utils/pages/researchers/ResearcherTablePage"

export const DASHBOARD_API_GRAPHQL_URL_PATH = "/dashboard-api/graphql"
export const GRAPH_API_GRAPHQL_URL_PATH = "/graphql-api/graphql"

export const INVALID_EMAILS = [
	"plainaddress",
	"@missinglocalpart.com",
	"username@.nodomain",
	"username@domain,com",
	"username@domain.c",
	"username@domain.toolongtld",
	`"quoted"@example.com`,
	"user@domain@domain.com",
	"user name@domain.com",
]

test.beforeEach(async ({ page }) => {
	page.goto("/login.xhtml")
	await page.locator('[name="j_id_8:user-name"]').fill(process.env.USER_NAME)
	await page.locator('[name="j_id_8:password"]').fill(process.env.PASSWORD)
	await page.locator('[name="j_id_8:login"]').click()

	await expect(page).toHaveURL(/home/)

	await expect(page.locator("#logout-section")).toBeVisible()
	await expect(page.locator("#logout-section")).toContainText(process.env.USER_NAME)
})

test.describe("adding researchers", () => {
	test.beforeEach("setup", async ({ page }) => {
		// log in to old frontend

		const responsePromise = page.waitForResponse(
			response =>
				response.url().includes(DASHBOARD_API_GRAPHQL_URL_PATH) &&
				response.request().method() === "POST" &&
				response.request().postDataJSON()?.operationName === "GetResearchers"
		)

		console.log("test")

		console.log("test")

		// visit new frontend - researchers page
		page.goto("/new-ui/cs-CZ/administration/researchers")

		await responsePromise
	})

	INVALID_EMAILS.forEach(email => {
		test(`test invalid email='${email}'`, async ({ page }) => {
			const researcherTablePage = new ResearcherTablePage(page)
			await researcherTablePage.addResearcher()

			const newResearcherPage = new NewResearcherPage(page)
			await newResearcherPage.visit()
			const form = newResearcherPage.getForm()
			await form.fillEmail(email)
			await form.submit()
			await expect(page.locator("body form")).toContainText("Email address is not valid.")
		})
	})

	// test("get started link", async ({ page }) => {
	//   await page.goto("https://playwright.dev/");

	//   // Click the get started link.
	//   await page.getByRole("link", { name: "Get started" }).click();

	//   // Expects page to have a heading with the name of Installation.
	//   await expect(
	//     page.getByRole("heading", { name: "Installation" })
	//   ).toBeVisible();
	// });
})
