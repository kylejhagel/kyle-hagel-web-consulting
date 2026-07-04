import { useRef } from 'react';
import TimelineItem from './TimelineItem.jsx';
import './EmployerTimeline.scss';

function EmployerTimeline({ employers = [] }) {
  const trackRef = useRef(null);

  const scrollTimeline = (direction) => {
    if (!trackRef.current) return;

    const firstItem = trackRef.current.querySelector('.timeline-item');
    const itemWidth = firstItem?.offsetWidth || 320;
    const gap = 16;
    const scrollAmount = itemWidth + gap;

    trackRef.current.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="career-timeline"
      className="section-block employer-timeline"
      aria-labelledby="timeline-title"
    >
      <div className="container">
        <div className="timeline-header">
          <div className="section-header">
            <p className="eyebrow">Career Timeline</p>
            <h2 id="timeline-title">
              A career built across design, development, and web systems.
            </h2>
            <p>
              A quick look at the organizations, roles, and long-term web work
              that shaped my experience.
            </p>
          </div>

          <div className="timeline-controls" aria-label="Timeline controls">
            <button
              type="button"
              className="timeline-control"
              aria-label="Scroll employer timeline left"
              onClick={() => scrollTimeline('previous')}
            >
              <span aria-hidden="true">←</span>
            </button>

            <button
              type="button"
              className="timeline-control"
              aria-label="Scroll employer timeline right"
              onClick={() => scrollTimeline('next')}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="timeline-track"
          tabIndex="0"
          aria-label="Employer timeline. Scroll horizontally to view more employers."
        >
          {employers.map((employer) => (
            <TimelineItem key={employer.id} employer={employer} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EmployerTimeline;
