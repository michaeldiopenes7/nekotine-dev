import RevealGroup from "./RevealGroup";
import { hobbies } from "@/data/portfolio";

export default function Hobbies() {
  return (
    <RevealGroup as="section" className="hobbies" id="hobbies" stagger={0.05} duration={0.5}>
      <div className="section-kicker reveal-item">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
        </svg>
        <span>Beyond the screen</span>
      </div>
      <div className="section-heading reveal-item">
        <h2 id="hobbies-title">Hobbies</h2>
        <p>The same curiosity that drives my design work shows up everywhere else, too.</p>
      </div>

      <ul className="hobby-list-col">
        {hobbies.map((h, i) => (
          <li key={h.name} className="hobby-row reveal-item">
            <span className="hobby-row-i">{String(i + 1).padStart(2, "0")}</span>
            <span className="hobby-row-name">{h.name}</span>
          </li>
        ))}
      </ul>
    </RevealGroup>
  );
}
