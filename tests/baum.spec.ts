import { test, expect, type Page } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://baumacademy.com");
  // do something in here if there is something that needs to happen before each test
});

// beforeEach function that will do whatever you want it to do before each test

// describe function, it takes 2 arg.  the first is the name of the test, the second is a function
// that tells describe, what to do
test.describe("Baum Academy landing page", () => {
  // function test, 1 argument is name, second is what do u want to do
  test("should see welcome message", async ({ page }) => {
    const welcomeMsg = page.getByText("Welcome to Baum Academy");
    await expect(welcomeMsg).toBeVisible(); // assertion
  });

  test("should see career advancement message", async ({ page }) => {
    const careerMsg = page.getByText("Unlocking your");
    const careerMsg2 = page.getByText("career advancement");
    await expect(careerMsg).toBeVisible();
    await expect(careerMsg2).toBeVisible();
  });

  // test location address is showing on the page
  test("should show location text", async ({ page }) => {
    // code goes here
    const location = page.getByText("Location");
    await expect(location).toBeVisible();
  });

  // test admin email showing on the page
});

test.describe("Baum Academy courses page", () => {
  // navigate to courses page by clicking on the courses button
  test("should navigate to courses page", async ({ page }) => {
    const courseLink = page.getByRole("link", { name: "courses" });
    await courseLink.click();

    const qaText = page.locator("h2", { hasText: "QA Engineering Bootcamp" });
    // test kids coding course is showing on the page
    // test kids coding saturday course is showing on the page
    await expect(qaText).toBeVisible();
  });
});

test.describe("Baum Academy contact page", () => {
  // navigate to contact page by clicking on the contact button
  // test contact form submit
  // test contact form success
});
