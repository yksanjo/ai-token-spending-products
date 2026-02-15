# Screenshot Generation Scripts

## Automated Screenshot Generation

### Prerequisites

Install Playwright:
```bash
cd prototype
npm install -D @playwright/test playwright
npx playwright install chromium
```

### Usage

1. **Start the dev server** (in one terminal):
   ```bash
   cd prototype
   npm run dev
   ```

2. **Generate screenshots** (in another terminal):
   ```bash
   node scripts/generate-screenshots.js
   ```

Screenshots will be saved to `screenshots/` directory:
- `dashboard-overview.png`
- `spending-view.png`
- `analytics-view.png`
- `optimizations-view.png`
- `trends-view.png`

### Manual Screenshots

If you prefer manual screenshots:

1. Open `http://localhost:3000` in your browser
2. Navigate through different views
3. Take screenshots using:
   - **Mac**: Cmd + Shift + 4
   - **Windows**: Windows + Shift + S
   - **Browser DevTools**: Right-click → Inspect → Device toolbar → Screenshot

Save screenshots to `screenshots/` directory with descriptive names.





