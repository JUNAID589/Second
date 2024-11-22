import logo from "../assets/nav-assets/logo.png";
import applestore from "../assets/footer-assets/applestore.svg";
import playstore from "../assets/footer-assets/playstore.svg";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <hr />
      <footer >
        <div className="container">
          <div className="row mt-5 ">

            <div className="col-12 col-md-3 mb-4">
              <ul className="list-unstyled">
                <li>
                  <img src={logo} alt="logo" className="img-fluid mb-3" />
                </li>
                <li>
                  <strong>DOWNLOAD THE APP</strong>
                </li>
                <li>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.techandaz.alfatahstore&pli=1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={playstore}
                      alt="playstore"
                      className="img-fluid me-2"
                    />
                  </a>
                  <a
                    href="https://apps.apple.com/us/app/al-fatah-online/id1606614674"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={applestore}
                      alt="applestore"
                      className="img-fluid"
                    />
                  </a>
                </li>
                <li>
                  <strong>FOLLOW US ON</strong>
                </li>
                <li className="d-flex gap-3 fs-4">
                  <a
                    href="https://www.facebook.com/alfatahpk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook style={{ color: "black" }} />
                  </a>
                  <a
                    href="https://www.instagram.com/alfatahofficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram style={{ color: "black" }} />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UC7p1xZdnvPWm6iMCP1V9AoQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube style={{ color: "black" }} />
                  </a>
                </li>
              </ul>
            </div>


            <div className="col-12 col-md-3 mb-4">
              <ul className="list-unstyled">
                <li className="mb-3">
                  <strong>Customer Service</strong>
                </li>
                <li>My Account</li>
                <li>FAQS</li>
                <li>Cash On Delivery Service</li>
                <li>Contact Us</li>
                <li>Store Locator</li>
              </ul>
            </div>

            <div className="col-12 col-md-3 mb-4">
              <ul className="list-unstyled">
                <li className="mb-3">
                  <strong>Help & Information</strong>
                </li>
                <li>About Us</li>
                <li>Shipping & Exchange Policy</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Payment Information</li>
                <li>Credit/Debit Card Policy</li>
              </ul>
            </div>

            <div className="col-12 col-md-3 mb-4">
              <ul className="list-unstyled">
                <li>
                  Al-Fatah Head Office, 52B, Block E1, Adjacent Shapes Gym,
                  Gulberg 3, Lahore, Pakistan
                </li>
                <li>
                  <strong>For Queries and Complaints:</strong>
                </li>
                <li>042-32307777</li>
                <li>(9:00 AM TO 9:00 PM)</li>
                <li>
                  <strong>Whatsapp message only</strong>
                </li>
                <li>0311-1555222</li>
                <li>(9:00 AM TO 9:00 PM)</li>
                <li>info@alfatah.pk</li>
              </ul>
            </div>
          </div>

          <hr className="hr-tag-footer" />
          <div className="row my-3">
            <div className="col-12 text-center">
              <p>
                © 2024,{" "}
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "black" }}
                >
                  Al-Fatah
                </a>{" "}
                All Rights Reserved - Powered By Junaid
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
