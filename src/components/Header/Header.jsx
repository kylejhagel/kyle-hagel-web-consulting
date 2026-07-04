import { useEffect, useState } from 'react';
import './Header.scss';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');

  const navLinks = [
    { href: '#intro', label: 'Intro' },
    { href: '#services', label: 'Services' },
    { href: '#resume', label: 'Resume' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeNavOnOutsideClick = (event) => {
      const nav = document.querySelector('.site-nav');
      const toggle = document.querySelector('.nav-toggle');

      if (!nav || !toggle) return;

      const clickedInsideNav = nav.contains(event.target);
      const clickedToggle = toggle.contains(event.target);

      if (!clickedInsideNav && !clickedToggle) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener('click', closeNavOnOutsideClick);

    return () => {
      document.removeEventListener('click', closeNavOnOutsideClick);
    };
  }, []);

  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        <a className="brand" href="#intro" aria-label="kyle-hagel-web-consulting  home">
          <span className="brand-mark" aria-hidden="true">
           KHWC
          </span>
          <span>Kyle Hagel Web Consulting</span>
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={isNavOpen}
          aria-controls="site-nav"
          onClick={() => setIsNavOpen((current) => !current)}
        >
          Menu
        </button>

        <nav
          id="site-nav"
          className={`site-nav ${isNavOpen ? 'is-open' : ''}`}
          aria-label="Primary navigation"
        >
          <ul className="nav-list">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isCurrent = activeSection === sectionId;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isCurrent ? 'true' : undefined}
                    onClick={() => setIsNavOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
