// Post-build prerender step: renders each route to its own index.html so
// search engines, social scrapers, and direct/refreshed links get real
// content on a plain static host (no SPA server fallback required).
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const { render, ROUTES } = await import("./dist-ssr/entry-server.js");

// The client build emits a single template we clone for every route.
const template = readFileSync("dist/index.html", "utf-8");

if (!template.includes('<div id="root"></div>')) {
  throw new Error('prerender: could not find <div id="root"></div> in dist/index.html');
}

for (const route of ROUTES) {
  const appHtml = render(route);
  // "/" -> dist/index.html ; "/book" -> dist/book/index.html
  const outPath = route === "/" ? "dist/index.html" : `dist${route}/index.html`;
  mkdirSync(dirname(outPath), { recursive: true });
  const out = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );
  writeFileSync(outPath, out);
  console.log(`prerender: ${route} -> ${outPath} (${appHtml.length} chars)`);
}
