# Expense Tracker & Budget Dashboard

A small vanilla-JavaScript expense tracker built from scratch — no framework, no build
step. Add income and expense transactions and see your balance, totals, and spending
by category update live.

This is **Project 1 of a 10-project "JavaScript Fundamentals" roadmap**. The goal is to
practice core JS: immutable state, array methods (`reduce`, `map`, `filter`), ES modules,
the DOM API, events, and `localStorage`.

## What it does

- Add a transaction (description, amount, date, type, category) via a form
- Live **summary**: total income, total expenses, and balance (income − expenses)
- **Spending by category** breakdown for expenses
- Everything on screen is derived fresh from state on every change

## Screenshot

<!-- Add a screenshot here once the UI is styled -->
_Coming soon._

## Running it

No install needed. It's plain ES modules, so it must be served over HTTP (opening
`index.html` via `file://` will break the module imports).

```bash
# from the project folder
npx serve
# or
python -m http.server
```

Then open the printed URL and go to `index.html`.

## Project structure

```
src/
  main.js          Entry point: wires the DOM, form submit handler, holds current state
  state.js         The single source of truth — a plain object with a transactions array
  calculations.js  Pure functions: getTotals, getSummary, getCategoryTotals (no DOM)
  render.js        Takes state, paints the summary, transaction list, and category breakdown
  storage.js       (planned) the only file that touches localStorage
  utils.js         (planned) makeId + a shared currency formatter
index.html         Semantic markup: summary, add-transaction form, list, breakdown
```

## The one idea it's built around

Keep one small pile of true facts (**state**) and **derive everything else fresh every
time**. Never store a value you could recalculate. Never mutate state — build new
objects and arrays instead (`{ ...state, ... }`, `[...arr, item]`, `.filter`, `.map`).

- `calculations.*` functions are **pure** — they take data in, return data out, never
  touch `document`.
- `render` receives state as an argument — it never reaches for a global.

## Status

| Feature | State |
| --- | --- |
| Module split + seed state | ✅ |
| `getTotals` / `getSummary` (reduce) | ✅ |
| `getCategoryTotals` (grouped reduce) | ✅ |
| Render summary + transaction list + category breakdown | ✅ |
| Add-transaction form (immutable append + re-render) | ✅ |
| Delete a transaction (event delegation + `.filter`) | 🚧 next |
| `utils.js` — id helper + currency formatting | ⬜ |
| `storage.js` — persist to `localStorage` | ⬜ |
| Filter & sort | ⬜ |
| Split `render` into helpers, cleanup | ⬜ |

## License

MIT — learning project, use it however you like.
