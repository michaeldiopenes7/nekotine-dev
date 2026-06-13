import Image from "next/image";
import RevealGroup from "./RevealGroup";
import { ListIcon, projectIcons } from "./Icons";
import { projects } from "@/data/portfolio";

function galleryClass(variant?: string) {
  if (variant === "mobile") return "project-image-strip mobile-gallery";
  if (variant === "five-up") return "project-image-strip mobile-gallery five-up-gallery";
  return "project-image-strip";
}

export default function Projects() {
  return (
    <RevealGroup as="section" className="projects" id="projects" stagger={0.05} duration={0.5}>
      <div className="section-kicker reveal-item">
        <ListIcon />
        <span>Projects</span>
      </div>
      <div className="section-heading reveal-item">
        <h2 id="projects-title">Projects</h2>
        <p>
          Each project has its own space for the interface screens, flows, and
          UI details created for that work.
        </p>
      </div>
      <div className="project-showcase">
        {projects.map((project) => {
          const Icon = projectIcons[project.icon];
          const isTall =
            project.galleryVariant === "mobile" || project.galleryVariant === "five-up";
          return (
            <article className="project-section reveal-item" key={project.title}>
              <div className="project-body">
                <div className="project-title">
                  <Icon />
                  <h3>{project.title}</h3>
                </div>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className={galleryClass(project.galleryVariant)}>
                {project.images.map((img) => (
                  <figure
                    className={`project-image-slot${img.wide ? " wide-slot" : ""}${isTall ? " tall-slot" : ""}`}
                    key={img.src}
                  >
                    <Image src={img.src} alt={img.alt} width={900} height={1200} />
                  </figure>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </RevealGroup>
  );
}
