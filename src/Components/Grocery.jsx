import carousal1 from "../assets/grocery-assets/grocerycarousal1.jpeg";
import carousal2 from "../assets/grocery-assets/grocerycarousal2.jpg";
import carousal3 from "../assets/grocery-assets/grocerycarousal3.jpg";

import card1 from "../assets/grocery-assets/cards/card1.png";
import card2 from "../assets/grocery-assets/cards/card2.png";
import card3 from "../assets/grocery-assets/cards/card3.png";
import card4 from "../assets/grocery-assets/cards/card4.png";
import card5 from "../assets/grocery-assets/cards/card5.png";
import card6 from "../assets/grocery-assets/cards/card6.png";
import card7 from "../assets/grocery-assets/cards/card7.png";
import card8 from "../assets/grocery-assets/cards/card8.png";
import card9 from "../assets/grocery-assets/cards/card9.png";
import card10 from "../assets/grocery-assets/cards/card10.png";
import card11 from "../assets/grocery-assets/cards/card11.png";
import card12 from "../assets/grocery-assets/cards/card12.png";
import card13 from "../assets/grocery-assets/cards/card13.png";
import card14 from "../assets/grocery-assets/cards/card14.png";
import card15 from "../assets/grocery-assets/cards/card15.png";
import card16 from "../assets/grocery-assets/cards/card16.png";
import card17 from "../assets/grocery-assets/cards/card17.png";
import card18 from "../assets/grocery-assets/cards/card18.png";
import card19 from "../assets/grocery-assets/cards/card19.png";
import card20 from "../assets/grocery-assets/cards/card20.png";
import card21 from "../assets/grocery-assets/cards/card21.png";
import card22 from "../assets/grocery-assets/cards/card22.png";
import card23 from "../assets/grocery-assets/cards/card23.png";
import card24 from "../assets/grocery-assets/cards/card24.png";
import card25 from "../assets/grocery-assets/cards/card25.png";
import card26 from "../assets/grocery-assets/cards/card26.png";
import card27 from "../assets/grocery-assets/cards/card27.png";
import card28 from "../assets/grocery-assets/cards/card28.png";
import card29 from "../assets/grocery-assets/cards/card29.png";
import card30 from "../assets/grocery-assets/cards/card30.png";
import card31 from "../assets/grocery-assets/cards/card31.png";
import card32 from "../assets/grocery-assets/cards/card32.png";
import card33 from "../assets/grocery-assets/cards/card33.png";
import card34 from "../assets/grocery-assets/cards/card34.png";
import card35 from "../assets/grocery-assets/cards/card35.png";
import card36 from "../assets/grocery-assets/cards/card36.png";

const Grocery = () => {
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
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carousal1} className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={carousal2} className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={carousal3} className="d-block w-100" alt="Slide 3" />
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
      <div className="container my-4">
        {/* ROW 1 STARTS */}
        <div className="row">
          <div className="col-6 col-lg-2 col-md-4 col-sm-6 mb-4 card-hover-effect ">
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
                  <h5 className="card-title">Local Drinks</h5>
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
                  <h5 className="card-title">Frozen Items</h5>
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
                  <h5 className="card-title">Frozen Fries</h5>
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
                  <h5 className="card-title">Baby Food</h5>
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
                  <h5 className="card-title">Flavoured Milk</h5>
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
                  <h5 className="card-title">Milk</h5>
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
                  <h5 className="card-title">Oils</h5>
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
                  <h5 className="card-title">Ghee</h5>
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
                  <h5 className="card-title">Pulses & Spices</h5>
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
                  <h5 className="card-title">Flour</h5>
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
                  <h5 className="card-title">Sugar</h5>
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
                  <h5 className="card-title">Salt</h5>
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
                  <h5 className="card-title">Rice Products</h5>
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
                  <h5 className="card-title">Chips & Nimko</h5>
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
                  <h5 className="card-title">Biscuits</h5>
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
                  <h5 className="card-title">Tea</h5>
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
                  <h5 className="card-title">Chocolates</h5>
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
                  <h5 className="card-title">Sauces & Soups</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ROW 4 STARTS */}
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
                  src={card19}
                  alt="Grocery Foods"
                  className="img-fluid mb-3"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div>
                  <h5 className="card-title">Mayo and Spreads</h5>
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
                  src={card20}
                  alt="Grocery Non-Foods"
                  className="img-fluid mb-3"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div>
                  <h5 className="card-title">Noodles and Pasta</h5>
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
                  src={card21}
                  alt="Makeup"
                  className="img-fluid mb-3"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div>
                  <h5 className="card-title">Candies</h5>
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
                  src={card22}
                  alt="Skin Care"
                  className="img-fluid mb-3"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div>
                  <h5 className="card-title">Cereals</h5>
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
                  src={card23}
                  alt="Electronics"
                  className="img-fluid mb-3"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div>
                  <h5 className="card-title">Mix Powder </h5>
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
                  src={card24}
                  alt="Crockery"
                  className="img-fluid mb-3"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div>
                  <h5 className="card-title">Eggs</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ROW 5 STARTS */}
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
                  src={card25}
                  alt="Grocery Foods"
                  className="img-fluid mb-3"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div>
                  <h5 className="card-title">Rusks and Buns</h5>
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
                  src={card26}
                  alt="Grocery Non-Foods"
                  className="img-fluid mb-3"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div>
                  <h5 className="card-title">Bread</h5>
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
                  src={card27}
                  alt="Makeup"
                  className="img-fluid mb-3"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div>
                  <h5 className="card-title">Coffee</h5>
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
                  src={card28}
                  alt="Skin Care"
                  className="img-fluid mb-3"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div>
                  <h5 className="card-title">Imported Drinks</h5>
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
                  src={card29}
                  alt="Electronics"
                  className="img-fluid mb-3"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div>
                  <h5 className="card-title">Pickle & Vineger</h5>
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
                  src={card30}
                  alt="Crockery"
                  className="img-fluid mb-3"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div>
                  <h5 className="card-title">Baking Accessories</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ROW 6 STARTS */}
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
                  src={card31}
                  alt="Grocery Foods"
                  className="img-fluid mb-3"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div>
                  <h5 className="card-title">Baking Items</h5>
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
                  src={card32}
                  alt="Grocery Non-Foods"
                  className="img-fluid mb-3"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div>
                  <h5 className="card-title">Chocolates</h5>
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
                  src={card33}
                  alt="Makeup"
                  className="img-fluid mb-3"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div>
                  <h5 className="card-title">Squashes</h5>
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
                  src={card34}
                  alt="Skin Care"
                  className="img-fluid mb-3"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div>
                  <h5 className="card-title">Liquid Tin Milk</h5>
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
                  src={card35}
                  alt="Electronics"
                  className="img-fluid mb-3"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div>
                  <h5 className="card-title">Dry Fruits</h5>
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
                  src={card36}
                  alt="Crockery"
                  className="img-fluid mb-3"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div>
                  <h5 className="card-title">Drinking Powders</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grocery;
