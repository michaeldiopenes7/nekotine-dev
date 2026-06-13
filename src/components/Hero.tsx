import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy-block">
        <h1 id="hero-title">Hi, I&apos;m Christine, an aspiring UX/UI Designer</h1>
        <div className="hero-meta">
          <p>
            I design clean, intentional digital experiences shaped by research,
            systems thinking, and visual clarity.
          </p>
          <p>
            Focused on useful interfaces, thoughtful flows, and portfolio-ready
            product stories that scale across screens.
          </p>
          <a href="#contact">Get in touch</a>
        </div>
      </div>

      <div className="hero-image-panel">
        <Image
          src="/assets/hero-wide.png"
          alt="Black and white designer portrait with UI design tool icons"
          width={1774}
          height={887}
          sizes="(max-width: 900px) 100vw, 1240px"
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </div>
    </section>
  );
}
