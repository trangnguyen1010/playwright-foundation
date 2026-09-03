import {test, expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('Independent test with accessibility spec', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    
    console.log('The number of accessibility violations found:', accessibilityScanResults.violations.length);
    console.log(accessibilityScanResults.violations.map(violation => ({
        impact: violation.impact
    })));

    const criticalSeriousViolations = accessibilityScanResults.violations.filter(violation => violation.impact === 'critical' || violation.impact === 'serious');
    criticalSeriousViolations.forEach(violation => {
        console.log(`Critical/Serious violation found: ${violation.id}`);
    })

    expect(criticalSeriousViolations.length).toBe(0);
})