import { test, expect, type Page } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://baumacademy.com");
});

test.describe("Baum Academy landing page", () => {
  test("should see welcome message", async ({ page }) => {
    const welcomeMsg = page.getByText("Welcome to Baum Academy");
    await expect(welcomeMsg).toBeVisible();
  });

  test("should see career advancement message", async ({ page }) => {
    const careerMsg = page.getByText("Unlocking your");
    await expect(careerMsg).toBeVisible();
  });

  // test location address is showing on the page

  // test admin email showing on the page
});

test.describe("Baum Academy courses page", () => {
  // navigate to courses page by clicking on the courses button
  // test qa engineering course is showing on the page
  // test kids coding course is showing on the page
  // test kids coding saturday course is showing on the page
});

test.describe("Baum Academy contact page", () => {
  // navigate to contact page by clicking on the contact button
  // test contact form submit
  // test contact form success
});
