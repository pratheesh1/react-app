import "../assets/styles/footer.css";
import logo from "../assets/images/brand-logo.png";

function Footer() {
  return (
    <div className=" footer-wrapper">
      <div className="container ">
        {/* logo */}
        <div className="row p-0 m-0 text-center text-md-start">
          <div className="navbar-brand my-4">
            <img id="footer-logo" src={logo} aria-label="logo" />
            <span id="footer-logo-text">Trails</span>
          </div>
        </div>
        {/* main section */}
        <div className="row p-0 m-0"></div>
      </div>
    </div>
  );
}

export default Footer;
