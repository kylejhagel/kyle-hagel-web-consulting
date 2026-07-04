import './Footer.scss';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-inner">
        <p>&copy; {currentYear} Kyle Hagel Web Consulting. All rights reserved.</p>

        <ul className="footer-contact" aria-label="Contact information">
          <li>
            <a href="mailto:hello@example.com">hello@example.com</a>
          </li>
          <li>
            <a href="tel:+15555555555">(555) 555-5555</a>
          </li>
          <li>Sacramento, CA</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
