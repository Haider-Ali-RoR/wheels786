import { renderToStaticMarkup } from "react-dom/server";
import { StaticRouter } from "react-router";
import AppRoutes from "./AppRoutes";

/**
 * Server entry used only at build time by prerender.mjs.
 * Renders a given route to static HTML that is injected into that route's
 * index.html, so crawlers receive fully-formed markup instead of an empty root.
 * The client still boots normally via main.tsx (createRoot re-renders).
 */
export function render(url: string): string {
  return renderToStaticMarkup(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>
  );
}

/** Routes to prerender, each written to its own index.html for static hosting. */
export const ROUTES = ["/", "/book"];
