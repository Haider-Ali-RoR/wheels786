import { renderToStaticMarkup } from "react-dom/server";
import App from "./App";

/**
 * Server entry used only at build time by prerender.mjs.
 * Renders the app to static HTML that is injected into dist/index.html,
 * so crawlers receive fully-formed markup instead of an empty root.
 * The client still boots normally via main.tsx (createRoot re-renders).
 */
export function render(): string {
  return renderToStaticMarkup(<App />);
}
