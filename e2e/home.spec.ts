import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Vincent Haryadi/);
});

test.describe("navbar functionalities", () => {
  test("1. name loaded", async ({ page }) => {
    await expect(page.locator("#my-name")).toHaveText("Vincent Haryadi");
  });

  test("2. dark mode icon loaded", async ({ page }) => {
    const btnToggle = page.locator("#btn-dark-mode-toggle");
    btnToggle.click();

    // if body has dark, tailwind should load the dark mode color
    // not the best test but I haven't figure out how to read the css w/ playwright
    await expect(page.locator("body")).toHaveClass("dark");
  });
});

test.describe("left column content", () => {
  test("1. profile pic loaded", async ({ page }) => {
    await expect(page.locator("#myProfPic")).toBeVisible();
  });

  test("2. name, description, and location loaded", async ({ page }) => {
    await expect(page.locator("#myNameHome")).toContainText(/Vincent Haryadi/);
    await expect(page.locator("#description")).toContainText(/Indonesia 🇮🇩/);
  });

  test("3. main links loaded", async ({ page }) => {
    const githubLink = page.getByRole("link", {
      name: "GitHub-icon-image GitHub",
    });
    await expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/vincenth19"
    );
  });
});
