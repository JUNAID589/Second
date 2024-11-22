import carousal from "../assets/perfume-assets/perfumecarousal.jpg";
import card1 from "../assets/perfume-assets/cards/card1..png";
import card2 from "../assets/perfume-assets/cards/card2.png";
import card3 from "../assets/perfume-assets/cards/card3.png";
import card4 from "../assets/perfume-assets/cards/card4.png";
import card5 from "../assets/perfume-assets/cards/card5.png";
import card6 from "../assets/perfume-assets/cards/card6.png";
import { Link } from "react-router-dom";
import scrollcard1 from "../assets/perfume-assets/scrollcards/scrollcard1.png";
import scrollcard2 from "../assets/perfume-assets/scrollcards/scrollcard2.png";
import scrollcard3 from "../assets/perfume-assets/scrollcards/scrollcard3.png";
import scrollcard4 from "../assets/perfume-assets/scrollcards/scrollcard4.png";
import scrollcard5 from "../assets/perfume-assets/scrollcards/scrollcard5.png";
import scrollcard6 from "../assets/perfume-assets/scrollcards/scrollcard6.png";
import { FaPlusCircle } from "react-icons/fa";
const Perfumes = () => {
  const Alert = () => {
    alert("added to cart!");
  };
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img src={carousal} className="d-block w-100" alt="Slide 1" />
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container my-4">
        {/* ROW 1 STARTS */}
        <div className="row">
          <div className="col-6 col-lg-2 col-md-4 col-sm-6 mb-4 card-hover-effect">
            <div
              className="card text-center shadow-sm"
              style={{
                backgroundColor: "#f7e5d5",
                borderRadius: "15px",
                height: "229.98px",
              }}
            >
              <div className="card-body d-flex flex-column justify-content-between">
                <img
                  src={card1}
                  alt="Grocery Foods"
                  className="img-fluid mb-3"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div>
                  <h5 className="card-title">Men Perfumes</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="col-6 col-lg-2 col-md-4 col-sm-6 mb-4 card-hover-effect">
            <div
              className="card text-center shadow-sm"
              style={{
                backgroundColor: "#d7eed1",
                borderRadius: "15px",
                height: "229.98px",
              }}
            >
              <div className="card-body d-flex flex-column justify-content-between">
                <img
                  src={card2}
                  alt="Grocery Non-Foods"
                  className="img-fluid mb-3"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div>
                  <h5 className="card-title">Women Perfumes</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="col-6 col-lg-2 col-md-4 col-sm-6 mb-4 card-hover-effect">
            <div
              className="card text-center shadow-sm"
              style={{
                backgroundColor: "#d8e7f3",
                borderRadius: "15px",
                height: "229.98px",
              }}
            >
              <div className="card-body d-flex flex-column justify-content-between">
                <img
                  src={card3}
                  alt="Makeup"
                  className="img-fluid mb-3"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div>
                  <h5 className="card-title">Body Sprays</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="col-6 col-lg-2 col-md-4 col-sm-6 mb-4 card-hover-effect">
            <div
              className="card text-center shadow-sm"
              style={{
                backgroundColor: "#f9dcdc",
                borderRadius: "15px",
                height: "229.98px",
              }}
            >
              <div className="card-body d-flex flex-column justify-content-between">
                <img
                  src={card4}
                  alt="Skin Care"
                  className="img-fluid mb-3"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div>
                  <h5 className="card-title">Deo Stick and Roll On</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="col-6 col-lg-2 col-md-4 col-sm-6 mb-4 card-hover-effect">
            <div
              className="card text-center shadow-sm"
              style={{
                backgroundColor: "#ececec",
                borderRadius: "15px",
                height: "229.98px",
              }}
            >
              <div className="card-body d-flex flex-column justify-content-between">
                <img
                  src={card5}
                  alt="Electronics"
                  className="img-fluid mb-3"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div>
                  <h5 className="card-title">Gift Sets</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="col-6 col-lg-2 col-md-4 col-sm-6 mb-4 card-hover-effect">
            <div
              className="card text-center shadow-sm"
              style={{
                backgroundColor: "#f1e3d0",
                borderRadius: "15px",
                height: "229.98px",
              }}
            >
              <div className="card-body d-flex flex-column justify-content-between">
                <img
                  src={card6}
                  alt="Crockery"
                  className="img-fluid mb-3"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div>
                  <h5 className="card-title">After Shave</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* row 2 starts heading */}
        <div className="row">
          <div className="col-12">
            <h4>
              <b>
                <strong>Best To Choose</strong>
              </b>
            </h4>
          </div>
        </div>

        {/* row 3 starts scrollable */}
        <div className="row scrolling-wrapper  flex-row flex-nowrap overflow-auto">
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
            <div className="card">
              <img
                src={scrollcard1}
                className="card-img-top position-relative"
                alt="Product 1"
              />
              <Link onClick={Alert}>
                <FaPlusCircle
                  className="position-absolute top-50 end-0 mx-3 "
                  style={{ color: "#04aead", width: "30px", height: "30px" }}
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">
                  KENNETH COLE BLACK FOR MEN 3PC GIFT SET
                </h5>
                <p className="card-text">Rs.15,900.00 PKR</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
            <div className="card">
              <img
                src={scrollcard2}
                className="card-img-top position-relative"
                alt="Product 2"
              />
              <Link onClick={Alert}>
                <FaPlusCircle
                  className="position-absolute top-50 end-0 mx-3 "
                  style={{ color: "#04aead", width: "30px", height: "30px" }}
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">
                  MONT BLANC EXPLORER FOR MEN 3PC GIFT SET
                </h5>
                <p className="card-text">Rs.22,900.00 PKR</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
            <div className="card">
              <img
                src={scrollcard3}
                className="card-img-top position-relative"
                alt="Product 3"
              />
              <Link onClick={Alert}>
                <FaPlusCircle
                  className="position-absolute top-50 end-0 mx-3 "
                  style={{ color: "#04aead", width: "30px", height: "30px" }}
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">
                  ISSEY MIYAKE LEAU DISSEY POUR HOMME 2PC GIFT SET
                </h5>
                <p className="card-text">Regular priceRs.12,500.00 PKR</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
            <div className="card">
              <img
                src={scrollcard4}
                className="card-img-top position-relative"
                alt="Product 4"
              />
              <Link onClick={Alert}>
                <FaPlusCircle
                  className="position-absolute top-50 end-0 mx-3 "
                  style={{ color: "#04aead", width: "30px", height: "30px" }}
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">
                  CARTIER DECLARATION 2 PC MEN GIFT SET BASIC
                </h5>
                <p className="card-text">Regular priceRs.28,900.00 PKR</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
            <div className="card">
              <img
                src={scrollcard5}
                className="card-img-top position-relative"
                alt="Product 5"
              />
              <Link onClick={Alert}>
                <FaPlusCircle
                  className="position-absolute top-50 end-0 mx-3 "
                  style={{ color: "#04aead", width: "30px", height: "30px" }}
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">
                  VERCASE DYLAN BLUE FOR MEN 2PC GIFT SET + BAG
                </h5>
                <p className="card-text">Rs.22,900.00 PKR</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
            <div className="card">
              <img
                src={scrollcard6}
                className="card-img-top position-relative"
                alt="Product 6"
              />
              <Link onClick={Alert}>
                <FaPlusCircle
                  className="position-absolute top-50 end-0 mx-3 "
                  style={{ color: "#04aead", width: "30px", height: "30px" }}
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">
                  DUNHILL LONDON ICON RACING BLUE FOR MEN 3PC GIFT SET
                </h5>
                <p className="card-text">Rs.17,900.00 PKR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Perfumes;
