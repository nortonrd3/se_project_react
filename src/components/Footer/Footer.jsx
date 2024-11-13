import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer__dev">Developed by Robert Norton</p>
      <p className="footer__year">{currentYear}</p>
    </footer>
  );
}

export default Footer;
