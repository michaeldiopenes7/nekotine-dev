import RevealGroup from "./RevealGroup";
import { PlusIcon, ArrowOutIcon } from "./Icons";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <RevealGroup as="section" className="experience" id="experience" stagger={0.05} duration={0.5}>
      <div className="section-kicker reveal-item">
        <PlusIcon />
        <span>Experience</span>
      </div>
      <div className="section-heading reveal-item">
        <h2 id="experience-title">Past experience</h2>
        <p>
          Role details to be followed. The structure is ready for companies,
          dates, outcomes, and tools.
        </p>
      </div>
      <div className="experience-list">
        {experience.map((item) => (
          <article className="experience-item reveal-item" key={item.company}>
            <span className="timeline-dot" />
            <div>
              <p className="meta">{item.period}</p>
              <h3>{item.company}</h3>
              <ul className="experience-points">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
            <ArrowOutIcon />
          </article>
        ))}
      </div>
    </RevealGroup>
  );
}
