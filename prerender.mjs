// Post-build prerender step: injects the statically-rendered app HTML into
// dist/index.html so search engines and social scrapers get real content.
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
import { readFileSync, writeFileSync } from "node:fs";

const { render } = await import("./dist-ssr/entry-server.js");

const appHtml = render();
const templatePath = "dist/index.html";
const template = readFileSync(templatePath, "utf-8");

if (!template.includes('<div id="root"></div>')) {
  throw new Error('prerender: could not find <div id="root"></div> in dist/index.html');
}

const out = template.replace(
  '<div id="root"></div>',
  `<div id="root">${appHtml}</div>`
);
writeFileSync(templatePath, out);
console.log(`prerender: injected ${appHtml.length} chars of HTML into ${templatePath}`);
