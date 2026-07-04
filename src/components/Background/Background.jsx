import './Background.scss';

function Background() {
  return (
    <section id="background" className="section-block" aria-labelledby="background-title">
      <div className="container about-grid">
        <div className="section-header">
          <p className="eyebrow">Background</p>
          <h2 id="background-title">Experienced, steady, and easy to work with.</h2>
        </div>

        <div className="body-copy">
          <p>
            I’m a front-end web developer and digital services professional with
            deep experience supporting websites, content systems, stakeholders,
            and accessibility needs across complex organizations.
          </p>
          <p>
            My work often sits between design, development, content, and
            operations. I can help translate business needs into clean,
            maintainable web solutions while keeping usability, accessibility,
            and long-term support in mind.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Background;
