# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Drew and their friends and family, mostly Australians who travel or send money abroad. They check rates quickly, often on a phone, to answer "what is this worth in dollars?" or "is now a good time to convert?".

## Product Purpose
Rateboard converts amounts fast and keeps a personal watchlist of currencies with recent trends. Success means getting a trustworthy number in seconds, without opening a search engine or a bank app.

## Positioning
A fast, honest converter. Every number shows where it came from and how fresh it is: the rate date, the source (ExchangeRate-API, ECB via Frankfurter, or a community backup), and saved/offline status. It says plainly that these are mid-market rates and that banks add a margin.

## Operating Context
- Installed to a phone home screen as a web app, or opened in a browser.
- Works offline with the last saved rates, and labels them as saved.
- Rate alerts are checked only while the app is open.

## Capabilities and Constraints
- Single static file (`index.html`) plus a service worker and manifest. No build step, no accounts, no server.
- Converter (amount, From ⇄ To, copy, convert to every watchlist currency).
- Watchlist with a base currency, pinning, reordering, 7/30/90-day sparklines, a detail chart with stats, and rate alerts.
- Light, dark and auto themes. Feedback form emails the owner via Web3Forms.
- Defaults: base AUD; watchlist USD, EUR, GBP, JPY, NZD, VND.
- Data is stored only in the browser (localStorage).

## Brand Commitments
- The name "Rateboard" stays.
- The R logo, colours and type are open to change.

## Evidence on Hand
No users, testimonials or usage numbers. Don't invent any.

## Product Principles
1. The number comes first: conversion is the fastest path on the page.
2. Always honest about source, date and freshness, especially offline.
3. Personal, not a trading tool: plain language over market jargon.
4. Light and quick on a phone, with no sign-up.
