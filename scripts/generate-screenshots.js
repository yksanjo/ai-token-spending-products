/**
 * Screenshot Generation Script
 * 
 * This script uses Playwright to automatically generate screenshots
 * of the prototype dashboard for use in documentation.
 * 
 * Installation:
 *   npm install -D @playwright/test playwright
 * 
 * Usage:
 *   node scripts/generate-screenshots.js
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const SCREENSHOT_DIR = path.join(__dirname, '../screenshots');
const PORT = 3000;
const BASE_URL = `http://localhost:${PORT}`;

// Ensure screenshots directory exists
if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

async function generateScreenshots() {
  console.log('🚀 Starting screenshot generation...');
  console.log(`📸 Screenshots will be saved to: ${SCREENSHOT_DIR}`);
  
  // Launch browser
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 2 // For high-DPI screenshots
  });

  const page = await context.newPage();

  try {
    // Wait for server to be ready
    console.log(`⏳ Waiting for server at ${BASE_URL}...`);
    await page.goto(BASE_URL, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000); // Additional wait for React to render

    // Screenshot 1: Dashboard Overview
    console.log('📸 Taking screenshot: Dashboard Overview');
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, 'dashboard-overview.png'),
      fullPage: true
    });

    // Navigate to Spending view
    console.log('📸 Taking screenshot: Spending View');
    const spendingButton = page.locator('button:has-text("Spending")');
    if (await spendingButton.count() > 0) {
      await spendingButton.click();
      await page.waitForTimeout(2000);
      await page.screenshot({
        path: path.join(SCREENSHOT_DIR, 'spending-view.png'),
        fullPage: true
      });
    }

    // Navigate to Analytics view
    console.log('📸 Taking screenshot: Analytics View');
    const analyticsButton = page.locator('button:has-text("Analytics")');
    if (await analyticsButton.count() > 0) {
      await analyticsButton.click();
      await page.waitForTimeout(2000);
      await page.screenshot({
        path: path.join(SCREENSHOT_DIR, 'analytics-view.png'),
        fullPage: true
      });
    }

    // Navigate to Optimizations view
    console.log('📸 Taking screenshot: Optimizations View');
    const optimizationsButton = page.locator('button:has-text("Optimizations")');
    if (await optimizationsButton.count() > 0) {
      await optimizationsButton.click();
      await page.waitForTimeout(2000);
      await page.screenshot({
        path: path.join(SCREENSHOT_DIR, 'optimizations-view.png'),
        fullPage: true
      });
    }

    // Navigate to Trends view
    console.log('📸 Taking screenshot: Trends View');
    const trendsButton = page.locator('button:has-text("Trends")');
    if (await trendsButton.count() > 0) {
      await trendsButton.click();
      await page.waitForTimeout(2000);
      await page.screenshot({
        path: path.join(SCREENSHOT_DIR, 'trends-view.png'),
        fullPage: true
      });
    }

    console.log('✅ Screenshots generated successfully!');
    console.log(`📁 Location: ${SCREENSHOT_DIR}`);

  } catch (error) {
    console.error('❌ Error generating screenshots:', error);
    console.log('\n💡 Make sure the dev server is running:');
    console.log('   cd prototype && npm run dev');
    process.exit(1);
  } finally {
    await browser.close();
  }
}

// Check if server is running
async function checkServer() {
  try {
    const response = await fetch(BASE_URL);
    return response.ok;
  } catch {
    return false;
  }
}

// Run if server is available
checkServer().then(isRunning => {
  if (isRunning) {
    generateScreenshots();
  } else {
    console.error('❌ Server is not running!');
    console.log('\n💡 Please start the dev server first:');
    console.log('   cd prototype && npm run dev');
    console.log('\n   Then run this script again.');
    process.exit(1);
  }
});





