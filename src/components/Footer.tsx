import RevealGroup from "./RevealGroup";

export default function Footer() {
  return (
    <RevealGroup as="footer" className="footer" id="contact" stagger={0.05} duration={0.5}>
      <div className="footer-inner">
        <h2 className="footer-headline reveal-item">Let&apos;s build something clear together.</h2>
        <p className="footer-lede reveal-item">
          Designing clear interfaces for people who move quickly but still care
          about the details.
        </p>
        <div className="footer-contact reveal-item">
          <a href="mailto:tinxxx2003@gmail.com">tinxxx2003@gmail.com</a>
          <a href="tel:+639662408820">+63 966 240 8820</a>
        </div>
        <small className="reveal-item">&copy; 2026 Christine Flores. All rights reserved.</small>
      </div>
    </RevealGroup>
  );
}
