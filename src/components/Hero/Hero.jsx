import './Hero.scss';

function Hero() {
  return (
    <section id="intro" className="hero" aria-labelledby="intro-title">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Web development & digital support</p>
          <h1 id="intro-title">Practical web services for growing teams.</h1>
          <p className="lead">
            I help organizations maintain, improve, and launch reliable websites
            with a strong focus on WordPress, accessibility, front-end
            development, and long-term support.
          </p>

          <div className="hero-actions" aria-label="Intro actions">
            <a className="button button-primary" href="#contact">
              Start a conversation
            </a>
            <a className="button button-secondary" href="#services">
              View services
            </a>
          </div>
        </div>

        <aside className="hero-card" aria-labelledby="snapshot-title">
          <h2 id="snapshot-title">What I bring</h2>
          <ul className="quick-list">
            <li>20+ years of professional web and front-end experience.</li>
            <li>Advanced WordPress, CMS, accessibility, and stakeholder support.</li>
            <li>
              Hands-on experience maintaining large portfolios of public-facing
              websites.
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
