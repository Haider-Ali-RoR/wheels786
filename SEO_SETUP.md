# SEO Setup Log — 786 Transport

This document records the SEO setup steps performed for
**privatedriverparis-786transport.com**, so the process is repeatable and the
current state is clear to anyone on the team.

- **Domain:** privatedriverparis-786transport.com
- **Registrar / DNS host:** Spaceship (nameservers `LAUNCH1/LAUNCH2.SPACESHIP.NET`)
- **Date documented:** 2026-07-11

---

## What was already shipped in code

The SEO groundwork was committed earlier (commit `715cb78 — "SEO related changes"`)
and is confirmed live on production:

| Item | Status |
|---|---|
| Prerendered HTML so crawlers receive real content (not an empty `<div id="root">`) | ✅ Live |
| `<title>` + meta description | ✅ Live |
| Open Graph + Twitter Card tags + OG image (`public/og-image.jpg`) | ✅ Live |
| JSON-LD `LocalBusiness` structured data | ✅ Live |
| `public/robots.txt` (allows all crawlers, references the sitemap) | ✅ Live |
| `public/sitemap.xml` (returns HTTP 200) | ✅ Live |

No further code changes were required for the setup below — these are
account/operational steps performed in Google Search Console and the DNS host.

---

## Step 1 — Verify domain ownership (Google Search Console)

Chosen method: **Domain property → DNS TXT record** (covers http, https, and all
subdomains at once — the most robust option).

1. Added the property `privatedriverparis-786transport.com` in
   [Google Search Console](https://search.google.com/search-console).
2. Google provided a TXT value of the form `google-site-verification=...`.
3. Logged in to **Spaceship** (the DNS host, identified via
   [lookup.icann.org](https://lookup.icann.org) → nameservers `*.spaceship.net`).
4. Opened the domain's **Advanced DNS** manager and added a new record:

   | Field | Value |
   |---|---|
   | Type | `TXT` |
   | Host | `@` |
   | Value | the full `google-site-verification=...` string |
   | TTL | default |

5. Saved the record, returned to the Search Console tab, and clicked **Verify**.

**Result:** `Ownership verified` — verification method: *Domain name provider*.

> ⚠️ Keep this TXT record permanently. Removing it un-verifies the property and
> stops Search Console data.

---

## Step 2 — Submit the sitemap

1. Search Console → **Indexing → Sitemaps**.
2. Entered `sitemap.xml` in the "Add a new sitemap" box
   (full URL: `https://privatedriverparis-786transport.com/sitemap.xml`).
3. Clicked **Submit**.

**Result:** Sitemap submitted successfully.

---

## Step 3 — Request indexing

1. Search Console → **URL Inspection** (top search bar).
2. Inspected the homepage `https://privatedriverparis-786transport.com/`.
3. Clicked **Request Indexing** to push the page into Google's crawl queue.

**Result:** Indexing requested successfully.

> ℹ️ Indexing is not instant — Google typically takes a few days to ~2 weeks to
> crawl and start showing a new site. Progress is visible in the **Pages** report
> (Indexing section). Check listing status with a
> `site:privatedriverparis-786transport.com` search in Google.

---

## Current status

- ✅ Domain ownership verified (DNS TXT via Spaceship)
- ✅ Sitemap submitted
- ✅ Homepage indexing requested
- ⏳ Waiting on Google to crawl and index (few days – ~2 weeks)

---

## Next steps (not yet done)

Recommended in order of impact for a local Paris VTC business:

1. **Google Business Profile** — highest impact for local search (Maps + local
   pack). Create/claim at [business.google.com](https://business.google.com),
   verify, and fill in category (Chauffeur service), phone, 24/7 hours, service
   area, and fleet photos.
2. **Review structured-data rating** ⚠️ — the JSON-LD `aggregateRating` currently
   declares `reviewCount: 60000` at `4.7`. Google requires that rating to be
   backed by reviews genuinely visible on the page; otherwise the markup may be
   ignored or trigger a manual action. Confirm the figure is defensible, or adjust
   the markup.
3. **Validate markup** — [Rich Results Test](https://search.google.com/test/rich-results)
   for the `LocalBusiness` schema, and the
   [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) for
   the social preview.
4. **Bing Webmaster Tools** — [bing.com/webmasters](https://www.bing.com/webmasters),
   "Import from Google Search Console" (one click). Also feeds Copilot/ChatGPT search.
5. **Google Analytics 4** — optional, to measure incoming traffic.
