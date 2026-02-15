# Screenshots Guide

## Overview

This guide explains how to capture and add screenshots to the documentation. Screenshots help visualize the prototype dashboard and make the README more engaging.

## Required Screenshots

Capture these 5 key views:

1. **Dashboard Overview** (`dashboard-overview.png`)
   - Default landing page
   - Shows: Key metrics, spending chart, provider breakdown, optimizations

2. **Spending View** (`spending-view.png`)
   - Click "Spending" in sidebar
   - Shows: Detailed spending analysis, model comparison

3. **Analytics View** (`analytics-view.png`)
   - Click "Analytics" in sidebar
   - Shows: Provider breakdown, model comparisons

4. **Optimizations View** (`optimizations-view.png`)
   - Click "Optimizations" in sidebar
   - Shows: AI recommendations, potential savings

5. **Trends View** (`trends-view.png`)
   - Click "Trends" in sidebar
   - Shows: Monthly trends, AI vs Human comparison

## Step-by-Step Instructions

### Method 1: Automated (Playwright)

**Prerequisites:**
```bash
cd prototype
npm install -D @playwright/test playwright
npx playwright install chromium
```

**Steps:**
1. Start dev server:
   ```bash
   cd prototype
   npm run dev
   ```

2. In another terminal, run:
   ```bash
   node scripts/generate-screenshots.js
   ```

3. Screenshots will be saved to `screenshots/` directory

### Method 2: Manual (Browser)

**Steps:**
1. Start the prototype:
   ```bash
   cd prototype
   npm run dev
   ```

2. Open `http://localhost:3000` in Chrome/Firefox

3. For each view:
   - Navigate to the view
   - Wait for page to fully load (2-3 seconds)
   - Take full-page screenshot

**Mac Screenshot:**
- Full page: Cmd + Shift + 4, then press Space, click window
- Or use browser DevTools: Right-click → Inspect → Toggle device toolbar → Screenshot

**Windows Screenshot:**
- Snipping Tool: Windows + Shift + S
- Or browser DevTools: F12 → Toggle device toolbar → Screenshot

**Browser DevTools Method (Best Quality):**
1. Open DevTools (F12 or Cmd+Option+I)
2. Click device toolbar icon (or Cmd+Shift+M)
3. Set device to "Desktop" or custom 1920x1080
4. Right-click page → "Capture screenshot" or "Capture full size screenshot"
5. Save to `screenshots/` directory

### Method 3: Browser Extension

**Recommended Extensions:**
- **Full Page Screen Capture** (Chrome)
- **FireShot** (Chrome/Firefox)
- **Awesome Screenshot** (Chrome/Firefox)

**Steps:**
1. Install extension
2. Navigate to each view
3. Click extension icon
4. Select "Capture entire page"
5. Save to `screenshots/` directory

## Screenshot Specifications

### Technical Requirements

- **Format**: PNG (preferred) or JPG
- **Resolution**: Minimum 1920x1080
- **Device Scale**: 2x for retina displays
- **Full Page**: Yes (capture entire scrollable page)
- **File Size**: Optimize if > 2MB (use tools like TinyPNG)

### Quality Guidelines

- ✅ **Clear and readable**: All text should be legible
- ✅ **Complete views**: Show entire component, not cropped
- ✅ **Consistent styling**: Same browser, same zoom level
- ✅ **No personal data**: Remove any sensitive information
- ✅ **Good contrast**: Ensure colors are visible

### Naming Convention

Use descriptive, consistent names:
- `dashboard-overview.png`
- `spending-view.png`
- `analytics-view.png`
- `optimizations-view.png`
- `trends-view.png`

## Adding Screenshots to README

Once screenshots are captured, add them to the README:

```markdown
## Screenshots & UI Preview

### Dashboard Overview
![Dashboard Overview](screenshots/dashboard-overview.png)
*Main dashboard showing key metrics, spending trends, and provider breakdown*

### Spending Analysis
![Spending View](screenshots/spending-view.png)
*Detailed spending analysis with model comparisons*

### Optimizations
![Optimizations View](screenshots/optimizations-view.png)
*AI-powered optimization recommendations with potential savings*
```

## Troubleshooting

### Screenshots are blurry
- Use browser DevTools device toolbar
- Set device scale to 2x
- Use PNG format instead of JPG

### Screenshots are cropped
- Use "Capture full page" option
- Ensure page is fully loaded
- Scroll to top before capturing

### Can't find screenshot button
- Use browser DevTools (F12)
- Look for "Capture screenshot" in right-click menu
- Try browser extension method

### Server not running
```bash
cd prototype
npm run dev
# Wait for "Local: http://localhost:3000" message
```

## Alternative: Mock Screenshots

If you can't capture real screenshots, you can:
1. Use design tools (Figma, Sketch) to create mockups
2. Use placeholder services (placeholder.com)
3. Describe the UI in text (less ideal)

## Best Practices

1. **Capture at peak times**: When dashboard shows interesting data
2. **Multiple angles**: Consider mobile/tablet views too
3. **Keep updated**: Re-capture when UI changes
4. **Optimize files**: Compress large images
5. **Version control**: Don't commit huge image files (>5MB)

## Tools & Resources

- **TinyPNG**: Image compression (tinypng.com)
- **Squoosh**: Google's image optimizer (squoosh.app)
- **Playwright**: Automated screenshot tool
- **Browser DevTools**: Built-in screenshot feature

---

**Need help?** Check the main README or open an issue.





