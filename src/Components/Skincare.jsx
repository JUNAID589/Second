import carousal1 from "../assets/skincare-assets/skincarecarousal1.jpg";
import carousal2 from "../assets/skincare-assets/skincarecarousal2.jpg";

import card1 from "../assets/skincare-assets/cards/card1.png";
import card2 from "../assets/skincare-assets/cards/card2.png";
import card3 from "../assets/skincare-assets/cards/card3.png";
import card4 from "../assets/skincare-assets/cards/card4.png";
import card5 from "../assets/skincare-assets/cards/card5.png";
import card6 from "../assets/skincare-assets/cards/card6.png";
import card7 from "../assets/skincare-assets/cards/card7.png";
import card8 from "../assets/skincare-assets/cards/card8.png";
import card9 from "../assets/skincare-assets/cards/card9.png";
import card10 from "../assets/skincare-assets/cards/card10.png";
import card11 from "../assets/skincare-assets/cards/card11.png";
import card12 from "../assets/skincare-assets/cards/card12.png";
import card13 from "../assets/skincare-assets/cards/card13.png";
import card14 from "../assets/skincare-assets/cards/card14.png";
import card15 from "../assets/skincare-assets/cards/card15.png";
import card16 from "../assets/skincare-assets/cards/card16.png";
import card17 from "../assets/skincare-assets/cards/card17.png";
import card18 from "../assets/skincare-assets/cards/card18.png";
const Skincare = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carousal1} className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={carousal2} className="d-block w-100" alt="Slide 2" />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Cards Section */}
      <div className="container mt-5 mb-5">
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
                  <h5 className="card-title">Makeup Remover</h5>
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
                  <h5 className="card-title">Moisturizing Cream</h5>
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
                  <h5 className="card-title">Serum</h5>
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
                  <h5 className="card-title">Beauty Soaps</h5>
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
                  <h5 className="card-title">Body Wash</h5>
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
                  <h5 className="card-title">Scrub</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ROW 2 STARTS */}
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
                  src={card7}
                  alt="Grocery Foods"
                  className="img-fluid mb-3"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div>
                  <h5 className="card-title">Face Wash & Cleanser</h5>
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
                  src={card8}
                  alt="Grocery Non-Foods"
                  className="img-fluid mb-3"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div>
                  <h5 className="card-title">Face Masks</h5>
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
                  src={card9}
                  alt="Makeup"
                  className="img-fluid mb-3"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div>
                  <h5 className="card-title">Liquid Soap</h5>
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
                  src={card10}
                  alt="Skin Care"
                  className="img-fluid mb-3"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div>
                  <h5 className="card-title">Sunblock & Sunscreen</h5>
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
                  src={card11}
                  alt="Electronics"
                  className="img-fluid mb-3"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div>
                  <h5 className="card-title">Wipes</h5>
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
                  src={card12}
                  alt="Crockery"
                  className="img-fluid mb-3"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div>
                  <h5 className="card-title">Toner</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 3 STARTS */}
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
                  src={card13}
                  alt="Grocery Foods"
                  className="img-fluid mb-3"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div>
                  <h5 className="card-title">Strips</h5>
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
                  src={card14}
                  alt="Grocery Non-Foods"
                  className="img-fluid mb-3"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div>
                  <h5 className="card-title">Night Cream</h5>
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
                  src={card15}
                  alt="Makeup"
                  className="img-fluid mb-3"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div>
                  <h5 className="card-title">Sheet Mask</h5>
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
                  src={card16}
                  alt="Skin Care"
                  className="img-fluid mb-3"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div>
                  <h5 className="card-title">Day Cream</h5>
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
                  src={card17}
                  alt="Electronics"
                  className="img-fluid mb-3"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div>
                  <h5 className="card-title">Gels & Oils</h5>
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
                  src={card18}
                  alt="Crockery"
                  className="img-fluid mb-3"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div>
                  <h5 className="card-title">Wax</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skincare;
