import "../assets/styles/footer.css";
import logo from "../assets/images/brand-logo.png";
import instagram from "../assets/images/instagram-icon.png";
import twitter from "../assets/images/twitter-icon.png";
import facebook from "../assets/images/facebook-icon.png";
import pinterest from "../assets/images/pinterest-icon.png";
import { openInNewTab } from "../utils";
import { useGlobalStore } from "../store";

function Footer() {
  //get state values and functions from different stores
  const setPage = useGlobalStore((state) => state.setPage);

  return (
    <footer className=" footer-wrapper">
      <div className="container ">
        {/* logo */}
        <div className="row p-0 m-0 text-center text-md-start">
          <div
            className="navbar-brand my-4"
            role="button"
            onClick={() => setPage("main")}
          >
            <img id="footer-logo" src={logo} aria-label="logo" />
            <span id="footer-logo-text">Trails</span>
          </div>
        </div>
        {/* main section */}
        <div className="row p-0 m-0">
          <div className="container">
            <div className="row">
              {/* Explore */}
              <div
                className="accordion accordion-flush col-12 col-lg-3 footer-accordian"
                id="accordion-explore"
              >
                <div className="accordion-item subsections">
                  <h3 className="d-none d-lg-block mx-3 footer-heading">
                    Explore
                  </h3>
                  <h1 className="accordion-header d-lg-none" id="flush-explore">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseExplore"
                      aria-expanded="true"
                      aria-controls="flush-collapseExplore"
                    >
                      <span className="footer-heading"> Explore</span>
                    </button>
                  </h1>
                  <div
                    id="flush-collapseExplore"
                    className="accordion-collapse collapse d-lg-block"
                    aria-labelledby="flush-explore"
                    data-bs-parent="#accordion-explore"
                  >
                    <div className="accordion-body d-lg-block">
                      <p
                        role="button"
                        onClick={() =>
                          openInNewTab(
                            "https://www.infoplease.com/world/countries"
                          )
                        }
                      >
                        Countries
                      </p>
                      <p
                        role="button"
                        onClick={() =>
                          openInNewTab(
                            "https://www.gide.com/en/where-we-work/6-regions-of-the-world"
                          )
                        }
                      >
                        Regions
                      </p>
                      <p
                        role="button"
                        onClick={() =>
                          openInNewTab(
                            "https://www.nationsonline.org/oneworld/cities.htm"
                          )
                        }
                      >
                        Cities
                      </p>
                      <p
                        role="button"
                        onClick={() =>
                          openInNewTab("https://worldnationalparks.com/")
                        }
                      >
                        Parks
                      </p>
                      <p
                        role="button"
                        onClick={() =>
                          openInNewTab("https://www.alltrails.com/")
                        }
                      >
                        Trails
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Discover Gear */}
              <div
                className="accordion accordion-flush col-12 col-lg-3 footer-accordian"
                id="accordion-discover-gear"
              >
                <div className="accordion-item subsections">
                  <h3 className="d-none d-lg-block mx-3 footer-heading">
                    Discover Gear
                  </h3>
                  <h1
                    className="accordion-header d-lg-none"
                    id="flush-discover-gear"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseDiscoverGear"
                      aria-expanded="true"
                      aria-controls="flush-collapseDiscoverGear"
                    >
                      <span className="footer-heading"> Discover Gear</span>
                    </button>
                  </h1>
                  <div
                    id="flush-collapseDiscoverGear"
                    className="accordion-collapse collapse d-lg-block"
                    aria-labelledby="flush-discover-gear"
                    data-bs-parent="#accordion-discover-gear"
                  >
                    <div className="accordion-body d-lg-block">
                      <p
                        role="button"
                        onClick={() =>
                          openInNewTab("https://www.amazon.com/s?k=hiking+gear")
                        }
                      >
                        Hiking
                      </p>
                      <p
                        role="button"
                        onClick={() =>
                          openInNewTab("https://www.amazon.com/s?k=skiing+gear")
                        }
                      >
                        Skiing
                      </p>
                      <p
                        role="button"
                        onClick={() =>
                          openInNewTab(
                            "https://www.amazon.com/s?k=running+gear"
                          )
                        }
                      >
                        Running
                      </p>
                      <p
                        role="button"
                        onClick={() =>
                          openInNewTab(
                            "https://www.amazon.com/s?k=swimming+gear"
                          )
                        }
                      >
                        Swimming
                      </p>
                      <p
                        role="button"
                        onClick={() =>
                          openInNewTab(
                            "https://www.amazon.com/s?k=camping+gear"
                          )
                        }
                      >
                        Camping
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Help */}
              <div
                className="accordion accordion-flush col-12 col-lg-2 footer-accordian"
                id="accordion-help"
              >
                <div className="accordion-item subsections">
                  <h3 className="d-none d-lg-block mx-3 footer-heading">
                    Help
                  </h3>
                  <h1 className="accordion-header d-lg-none" id="flush-help">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseHelp"
                      aria-expanded="true"
                      aria-controls="flush-collapseHelp"
                    >
                      <span className="footer-heading"> Help</span>
                    </button>
                  </h1>
                  <div
                    id="flush-collapseHelp"
                    className="accordion-collapse collapse d-lg-block"
                    aria-labelledby="flush-help"
                    data-bs-parent="#accordion-help"
                  >
                    <div className="accordion-body d-lg-block">
                      <p role="button">Support</p>
                      <p role="button">Contact Us</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Social */}
              <div className="col-lg-4 text-center text-lg-start socials-wrapper">
                <h3 className="footer-heading socials-heading">
                  Connect with us
                </h3>
                <img
                  role="button"
                  src={instagram}
                  aria-label="instagram icon"
                  className="instagram-icon"
                />
                <img
                  role="button"
                  src={twitter}
                  aria-label="twitter icon"
                  className="twitter-icon"
                />
                <img
                  role="button"
                  src={facebook}
                  aria-label="facebook icon"
                  className="facebook-icon"
                />
                <img
                  role="button"
                  src={pinterest}
                  aria-label="pinterest icon"
                  className="pinterest-icon"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row px-4">
          <hr className="d-none d-lg-block m-2" />
          <span className="small py-3 py-lg-2 text-secondary">
            &copy; {new Date().getFullYear()} - Trails App, All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
