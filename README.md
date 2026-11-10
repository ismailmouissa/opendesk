# OpenDesk

A free, open-source trading co-pilot that runs entirely in your browser.
No account, no subscription, no API key, no server.

## What it does

- **Analyst** — pick a market and a style (scalp / intraday / swing). The engine weighs ten factors across
  two timeframes and gives one answer: BUY, SELL or WAIT, with entry, stop loss, TP1 and TP2, position size,
  the reasons for and against, and discipline warnings (daily loss limit, too many open trades, revenge trading).
  "Find the best trade now" ranks all markets.
- **Markets** — 11 forex pairs (EUR/USD, GBP/USD, USD/JPY, AUD/USD, USD/CAD, USD/CHF, EUR/JPY, EUR/GBP, AUD/JPY,
  AUD/CAD, GBP/JPY), gold and 6 crypto coins. Sizes are also shown as MT5 lots with the stop distance in pips.
- **News** — high-impact releases from the economic calendar for the pair's currencies are listed on every
  analysis, and scalp/intraday trades are locked from 30 minutes before to 15 minutes after a release.
  A GitHub Action (`.github/workflows/calendar.yml`) refreshes `calendar.json` every 4 hours.
  It covers scheduled data only; it does not read headlines.
- **Scanner** — scans every market on 15m / 1h / 4h / 1d
  with three published rule sets (Breakout, Trend Pullback, Range Reversal). Each signal shows entry,
  structural stop, target, a confluence score and the reasons it fired.
- **Position sizing** — every signal is sized to your equity and your per-trade risk %.
- **Portfolio** — paper positions with live P&L, automatic stop/target exits, equity curve, max drawdown,
  daily P&L, win rate, profit factor, average R, and per-setup analytics. Manual trade logging included.
- **Assistant** — a local chat that answers in the context of your portfolio
  ("signal for BTC on 4h", "size gold", "best setup", "how am I doing").
- **Spot-only mode** — hides shorts and caps size at account value (no leverage).

## Run it

Double-click `index.html`. That's it.

Or serve it locally:

```bash
node serve.js
```

To put it online for free, upload `index.html` to GitHub Pages, Netlify or Cloudflare Pages.

## Data and privacy

Market data comes from the public Kraken API (forex; AUD/CAD and GBP/JPY are built from two legs) and
Binance API (crypto, gold via PAXG). Neither needs a key. The calendar is Forex Factory's weekly export.
Feed prices can differ from your broker's by a few pips.
Your settings and trades are stored in your browser's `localStorage` and never leave your device.
Use Settings → Export JSON to back them up.

## Disclaimer

Educational software. Signals are mechanical outputs of simple rules, not financial advice,
and the confluence score is not a win probability. Trading carries risk of loss.

## License

MIT — see `LICENSE`.
