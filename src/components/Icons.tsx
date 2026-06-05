/** Lightweight inline SVG icon set. Stroke inherits currentColor. */
import type { JSX } from "react";

type IconProps = { size?: number };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

const icons: Record<string, (s: number) => JSX.Element> = {
  plane: (s) => (
    <svg {...base(s)}><path d="M17.8 19.2 16 11l3.5-3.5a2.1 2.1 0 0 0-3-3L13 8 4.8 6.2a.5.5 0 0 0-.5.8L8 11l-2 2-2-.5a.5.5 0 0 0-.5.8L6 16l2.2 2.5a.5.5 0 0 0 .8-.5L8.5 16l2-2 3.5 3.7a.5.5 0 0 0 .8-.5Z" /></svg>
  ),
  briefcase: (s) => (
    <svg {...base(s)}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" /></svg>
  ),
  road: (s) => (
    <svg {...base(s)}><path d="M4 20 7 4M20 20 17 4M12 5v2M12 11v2M12 17v2" /></svg>
  ),
  champagne: (s) => (
    <svg {...base(s)}><path d="M8 3h8l-1 8a3 3 0 0 1-6 0L8 3ZM12 14v5M9 21h6M7 4l1 3M17 4l-1 3" /></svg>
  ),
  clock: (s) => (
    <svg {...base(s)}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
  ),
  camera: (s) => (
    <svg {...base(s)}><path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" /><circle cx="12" cy="13" r="3.2" /></svg>
  ),
  shield: (s) => (
    <svg {...base(s)}><path d="M12 3 5 6v5c0 4.4 3 8.4 7 9 4-.6 7-4.6 7-9V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></svg>
  ),
  star: (s) => (
    <svg {...base(s)}><path d="m12 3 2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 16.9 6.8 19.2l1-5.9L3.5 9.2l5.9-.8L12 3Z" /></svg>
  ),
  tag: (s) => (
    <svg {...base(s)}><path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9-9-9Z" /><circle cx="7.5" cy="7.5" r="1.4" /></svg>
  ),
  phone: (s) => (
    <svg {...base(s)}><path d="M5 3h3l2 5-2.5 1.5a12 12 0 0 0 5 5L19 12l5 2v3a2 2 0 0 1-2 2A18 18 0 0 1 4 5a2 2 0 0 1 1-2Z" /></svg>
  ),
  mail: (s) => (
    <svg {...base(s)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
  ),
  pin: (s) => (
    <svg {...base(s)}><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg>
  ),
  check: (s) => (
    <svg {...base(s)}><path d="m20 6-11 11-5-5" /></svg>
  ),
  users: (s) => (
    <svg {...base(s)}><circle cx="9" cy="8" r="3.2" /><path d="M3 20a6 6 0 0 1 12 0M16 5.5a3 3 0 0 1 0 5.8M22 20a6 6 0 0 0-4-5.6" /></svg>
  ),
  luggage: (s) => (
    <svg {...base(s)}><rect x="6" y="7" width="12" height="13" rx="2" /><path d="M9 7V4h6v3M9 20v1M15 20v1" /></svg>
  ),
  whatsapp: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm5.8 14.3c-.2.7-1.4 1.3-2 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5-4.5-.2-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 2c.1.1.1.3 0 .5l-.4.6-.3.3c-.2.2-.3.4-.2.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.2.1.4.1.5-.1l.7-.9c.2-.2.4-.2.6-.1l1.9.9c.3.1.4.2.5.3.1.2.1.8-.1 1.4Z" /></svg>
  ),
  menu: (s) => (
    <svg {...base(s)}><path d="M3 6h18M3 12h18M3 18h18" /></svg>
  ),
  close: (s) => (
    <svg {...base(s)}><path d="M6 6l12 12M18 6 6 18" /></svg>
  ),
  arrow: (s) => (
    <svg {...base(s)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
  ),
  chevron: (s) => (
    <svg {...base(s)}><path d="m6 9 6 6 6-6" /></svg>
  ),
};

export function Icon({ name, size = 24 }: IconProps & { name: string }) {
  const render = icons[name];
  return render ? render(size) : null;
}
