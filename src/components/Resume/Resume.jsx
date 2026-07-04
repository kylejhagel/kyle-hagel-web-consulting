import './Resume.scss';

function Resume() {
  return (
    <section id="resume" className="section-block" aria-labelledby="resume-title">
      <div className="container resume-layout">
        <div>
          <div className="section-header">
            <p className="eyebrow">Resume</p>
            <h2 id="resume-title">A practical history of building and supporting the web.</h2>
            <p>
              This section can be expanded into a full resume or kept as a brief
              credibility summary for service inquiries.
            </p>
          </div>

          <ul className="skill-list" aria-label="Key skills">
            <li>WordPress</li>
            <li>HTML5</li>
            <li>CSS / SCSS</li>
            <li>JavaScript</li>
            <li>Accessibility</li>
            <li>CMS support</li>
            <li>Responsive design</li>
            <li>Stakeholder support</li>
          </ul>
        </div>

        <div className="resume-list">
          <article className="resume-card">
            <time dateTime="2012">2012–Present</time>
            <h3>Front-End Web Developer</h3>
            <p>
              Supported a large portfolio of websites, collaborated with
              internal teams, improved accessibility, managed CMS updates, and
              helped deliver public-facing digital services.
            </p>
          </article>

          <article className="resume-card">
            <time dateTime="2003">2003–2012</time>
            <h3>Web & Graphic Design Background</h3>
            <p>
              Built a foundation in design, front-end implementation, client
              support, visual communication, and production-ready web delivery.
            </p>
          </article>

          <article className="resume-card">
            <time dateTime="2024">Selected Projects</time>
            <h3>CMS migrations, accessibility, and intranet support</h3>
            <p>
              Experience includes WordPress migrations, ADA remediation,
              documentation, SharePoint intranet support, and custom content
              workflow improvements.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Resume;
