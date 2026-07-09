import { useContent } from "../i18n/LanguageContext";

export default function Stats() {
  const { stats } = useContent();
  return (
    <div id="stats" className="container">
      <div className="stats reveal">
        {stats.map((s) => (
          <div className="stats__item" key={s.label}>
            <div className="stats__value text-silver">{s.value}</div>
            <div className="stats__label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
