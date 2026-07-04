import './CTA.scss';

function CTA() {
  return (
    <section id="contact" className="cta-section" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-card">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title">Need help with a website?</h2>
            <p>
              Reach out for WordPress support, accessibility improvements,
              front-end help, CMS cleanup, or a practical review of what your
              site needs next.
            </p>
          </div>

          <div className="cta-actions">
            <a className="button button-secondary" href="mailto:hello@example.com">
              Email me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
