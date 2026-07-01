# Analytics Dashboard — Square 1 AI starter

**Part of [Square 1 AI](https://square1-tutor.vercel.app) · Full Stack Development · Project 9.**

🛠️ **Full-stack project.** This repo provides the project scaffold, function stubs, and contract tests. Read the full brief on Square 1 for guidance.

MIT licensed — fork it, build on it, put it in your portfolio.

---

# P09 — Analytics Dashboard

Build a real-time analytics dashboard with interactive D3.js charts backed by PostgreSQL time-series queries.

## Getting Started

```bash
npm install
cp .env.example .env   # fill in your Postgres credentials
npm run dev             # http://localhost:3000
npm test                # run contract tests
```

## Project Structure

```
src/
  app/
    page.js            # Dashboard page
  components/
    TimeSeriesChart.js  # D3.js time-series line chart
    FunnelChart.js      # D3.js funnel visualisation
  lib/
    db.js              # PostgreSQL connection pool
    queries.js         # Data-fetching query functions
tests/
  queries.test.js      # Contract tests for query functions
```
