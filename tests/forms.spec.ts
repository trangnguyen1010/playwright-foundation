import { test, expect } from "@playwright/test";
import * as path from "path";

test("upload a file", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/upload");

  const filePath = path.resolve(__dirname, "../fixtures/sample.txt");

  await page.locator("#file-upload").setInputFiles(filePath);
  await page.locator("#file-submit").click();

  await expect(page.locator("h3")).toContainText("File Uploaded!");
  await expect(page.locator('#uploaded-files')).toContainText('sample.txt');
});