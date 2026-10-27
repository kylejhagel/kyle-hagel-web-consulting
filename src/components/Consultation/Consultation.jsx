import { consultationDetails } from '../../data/consultationDetails.js';
import './Consultation.scss';

function Consultation() {
  const {
    eyebrow,
    title,
    intro,
    reassurance,
    packageName,
    packageDescription,
    priceNote,
    primaryCta,
    primaryHref,
    secondaryCta,
    secondaryHref,
    reasons,
    outcomes,
    boundaries,
  } = consultationDetails;

  return (
    <section
      id="consultation"
      className="section-block consultation"
      aria-labelledby="consultation-title"
    >
      <div className="container consultation-layout">
        <div className="consultation-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id="consultation-title">{title}</h2>
          <p className="consultation-lead">{intro}</p>
          <p>{reassurance}</p>

          <div className="consultation-actions" aria-label="Consultation actions">
            <a className="button button-primary" href={primaryHref}>
              {primaryCta}
            </a>
            <a className="button button-secondary" href={secondaryHref}>
              {secondaryCta}
            </a>
          </div>
        </div>

        <aside className="consultation-card" aria-labelledby="consultation-package-title">
          <div className="consultation-card__header">
            <span className="consultation-badge">Practical second opinion</span>
            <h3 id="consultation-package-title">{packageName}</h3>
            <p>{packageDescription}</p>
          </div>

          <div className="consultation-card__price">
            <span>{priceNote}</span>
          </div>

          <div className="consultation-card__section">
            <h4>Common reasons people book</h4>
            <ul>
              {reasons.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </div>

          <div className="consultation-card__section">
            <h4>What you leave with</h4>
            <ul>
              {outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <div className="container">
        <div className="consultation-boundary" role="note">
          <strong>Good to know:</strong> {boundaries}
        </div>
      </div>
    </section>
  );
}

export default Consultation;
