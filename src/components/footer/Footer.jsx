import logo from "../assets/logo_placeholder.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <img src={logo} alt="" />
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2025 - All Right Reserved</p>
      </div>
    </div>
  );
}
