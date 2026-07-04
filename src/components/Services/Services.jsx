import { useEffect, useRef, useState } from 'react';
import { services } from '../../data/services.js';
import './Services.scss';

function Services() {
  const [activeService, setActiveService] = useState(null);
  const closeButtonRef = useRef(null);
  const previouslyFocusedElement = useRef(null);

  const openModal = (service) => {
    previouslyFocusedElement.current = document.activeElement;
    setActiveService(service);
  };

  const closeModal = () => {
    setActiveService(null);
  };

  useEffect(() => {
    if (!activeService) return;

    closeButtonRef.current?.focus();
    document.body.classList.add('modal-is-open');

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('modal-is-open');
      document.removeEventListener('keydown', handleKeyDown);
      previouslyFocusedElement.current?.focus?.();
    };
  }, [activeService]);

  return (
    <section id="services" className="section-block services" aria-labelledby="services-title">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Services</p>
          <h2 id="services-title">Support where websites actually need it.</h2>
          <p>
            Select a service to see how my experience connects to practical client
            needs, delivery support, and long-term website operations.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.id}>
              <div className="service-icon" aria-hidden="true">
                {service.number}
              </div>

              <h3>{service.title}</h3>

              <p>{service.shortDescription}</p>

              <button
                type="button"
                className="button button-secondary service-card__button"
                onClick={() => openModal(service)}
                aria-haspopup="dialog"
              >
                View experience
              </button>
            </article>
          ))}
        </div>
      </div>

      {activeService && (
        <div
          className="service-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          aria-describedby="service-modal-description"
        >
          <div
            className="service-modal__backdrop"
            onClick={closeModal}
            aria-hidden="true"
          />

          <div className="service-modal__panel">
            <div className="service-modal__header">
              <div>
                <p className="eyebrow">Relevant Experience</p>
                <h2 id="service-modal-title">{activeService.title}</h2>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                className="service-modal__close"
                aria-label="Close service experience modal"
                onClick={closeModal}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <p id="service-modal-description" className="service-modal__intro">
              {activeService.modalIntro}
            </p>

            <div className="service-modal__content">
              <section aria-labelledby={`${activeService.id}-client-needs`}>
                <h3 id={`${activeService.id}-client-needs`}>Client needs this supports</h3>
                <ul className="service-modal__list">
                  {activeService.clientNeeds.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby={`${activeService.id}-experience`}>
                <h3 id={`${activeService.id}-experience`}>Experience I bring</h3>
                <ul className="service-modal__list">
                  {activeService.experience.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby={`${activeService.id}-tools`}>
                <h3 id={`${activeService.id}-tools`}>Relevant tools and skills</h3>
                <ul className="skill-list service-modal__skills">
                  {activeService.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="service-modal__footer">
              <a className="button button-primary" href="#contact" onClick={closeModal}>
                Start a conversation
              </a>

              <button
                type="button"
                className="button button-secondary"
                onClick={closeModal}
              >
                Back to services
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Services;
