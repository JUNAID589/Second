import logo from "../assets/nav-assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
	
      <nav className="container-fluid navbar navbar-expand-lg navbar-custom  navbar-alfatah">
        <div className="container-fluid mx-5 my-2 ">
          <a className="navbar-brand" href="#">
            <img width={160} height={35} src={logo} alt="" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-links ">
              <li className="nav-item ">
                <Link to="/" className="nav-link active " aria-current="page">
                  <span className="navbar-item">
                    <b>
                      <strong>Home</strong>
                    </b>
                  </span>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/Grocery"
                  className="nav-link active"
                  aria-current="page"
                >
                  <span className="navbar-item">
                    <b>
                      <strong>Grocery Foods</strong>
                    </b>
                  </span>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/Electronics"
                  className="nav-link active"
                  aria-current="page"
                >
                  <span className="navbar-item">
                    <b>
                      <strong>Electonics</strong>
                    </b>
                  </span>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/Perfumes"
                  className="nav-link active"
                  aria-current="page"
                >
                  <span className="navbar-item">
                    <b>
                      <strong>Perfumes</strong>
                    </b>
                  </span>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/Makeup"
                  className="nav-link active"
                  aria-current="page"
                >
                  <span className="navbar-item">
                    <b>
                      <strong>Makeup</strong>
                    </b>
                  </span>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/Skincare"
                  className="nav-link active"
                  aria-current="page"
                >
                  <span className="navbar-item">
                    <b>
                      <strong>Skincare</strong>
                    </b>
                  </span>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/Toys"
                  className="nav-link active"
                  aria-current="page"
                >
                  <span className="navbar-item">
                    <b>
                      <strong>Toys</strong>
                    </b>
                  </span>
                </Link>
              </li>
            </ul>

            <div>
              <FontAwesomeIcon
                size="lg"
                className="mx-3"
                icon={faMagnifyingGlass}
                style={{ color: "#0f0f0f", cursor: "pointer" }}
              />
              <FontAwesomeIcon
                size="lg"
                className="mx-3"
                icon={faUser}
                style={{ color: "#0f0f0f", cursor: "pointer" }}
              />
              <FontAwesomeIcon
                size="lg"
                className="mx-3"
                icon={faCartShopping}
                style={{ color: "#000000", cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
      </nav>
      
    </>
  );
};

export default Nav;
