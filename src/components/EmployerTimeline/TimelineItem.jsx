function TimelineItem({ employer }) {
  const cardStyle = employer.backgroundImage
    ? {
        backgroundImage: `linear-gradient(
          rgba(23, 72, 63, 0.78),
          rgba(23, 72, 63, 0.9)
        ), url(${employer.backgroundImage})`,
      }
    : undefined;

  return (
    <article className="timeline-item">
      <div className="timeline-node" aria-hidden="true">
        <span className="timeline-dot" />
      </div>

      <div
        className={`timeline-card ${employer.backgroundImage ? 'has-background' : ''}`}
        style={cardStyle}
      >
        {employer.logo && (
          <img
            className="timeline-logo"
            src={employer.logo}
            alt={`${employer.employer} logo`}
          />
        )}

        <div className="timeline-meta">
          <span>{employer.dateRange}</span>
          <span>{employer.role}</span>
        </div>

        <h3>{employer.employer}</h3>

        <p>{employer.description}</p>

        {employer.ctaHref && employer.ctaLabel && (
          <a className="button button-secondary" href={employer.ctaHref}>
            {employer.ctaLabel}
          </a>
        )}
      </div>
    </article>
  );
}

export default TimelineItem;
