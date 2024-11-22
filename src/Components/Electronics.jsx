import carousal from "../assets/electronics-assets/electronicscarousal.jpg";

import card1 from "../assets/electronics-assets/cards/card1.png";
import card2 from "../assets/electronics-assets/cards/card2.png";
import card3 from "../assets/electronics-assets/cards/card3.png";
import card4 from "../assets/electronics-assets/cards/card4.png";
import card5 from "../assets/electronics-assets/cards/card5.png";
import card6 from "../assets/electronics-assets/cards/card6.png";
import card7 from "../assets/electronics-assets/cards/card7.png";
import card8 from "../assets/electronics-assets/cards/card8.png";
import card9 from "../assets/electronics-assets/cards/card9.png";
import card10 from "../assets/electronics-assets/cards/card10.png";
import card11 from "../assets/electronics-assets/cards/card11.png";
import card12 from "../assets/electronics-assets/cards/card12.png";
import card13 from "../assets/electronics-assets/cards/card13.png";
import card14 from "../assets/electronics-assets/cards/card14.png";
import card15 from "../assets/electronics-assets/cards/card15.png";
import card16 from "../assets/electronics-assets/cards/card16.png";
import card17 from "../assets/electronics-assets/cards/card17.png";
import card18 from "../assets/electronics-assets/cards/card18.png";
import card19 from "../assets/electronics-assets/cards/card19.png";
import card20 from "../assets/electronics-assets/cards/card20.png";
import card21 from "../assets/electronics-assets/cards/card21.png";
import card22 from "../assets/electronics-assets/cards/card22.png";
import card23 from "../assets/electronics-assets/cards/card23.png";
import card24 from "../assets/electronics-assets/cards/card24.png";
import card25 from "../assets/electronics-assets/cards/card25.png";
import card26 from "../assets/electronics-assets/cards/card26.png";
import card27 from "../assets/electronics-assets/cards/card27.png";
import card28 from "../assets/electronics-assets/cards/card28.png";
import card29 from "../assets/electronics-assets/cards/card29.png";
import card30 from "../assets/electronics-assets/cards/card30.png";
import card31 from "../assets/electronics-assets/cards/card31.png";
import card32 from "../assets/electronics-assets/cards/card32.png";
import card33 from "../assets/electronics-assets/cards/card33.png";
import card34 from "../assets/electronics-assets/cards/card34.png";
import card35 from "../assets/electronics-assets/cards/card35.png";
import card36 from "../assets/electronics-assets/cards/card36.png";

const Electronics = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators"></div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carousal} className="d-block w-100" alt="Slide 1" />
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container my-4">
        {/* ROW 1 STARTS */}
        <div className="row">
          <div className="col-6 col-lg-2    col-md-4 col-sm-6 mb-4 card-hover-effect">
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
                  <h5 className="card-title">Air Cooler</h5>
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
                  <h5 className="card-title">Fryers</h5>
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
                  <h5 className="card-title">Insect Killer</h5>
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
                  <h5 className="card-title">Digital Scales</h5>
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
                  <h5 className="card-title">Ovens</h5>
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
                  <h5 className="card-title">Shavers</h5>
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
                  <h5 className="card-title">Coffee Maker</h5>
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
                  <h5 className="card-title">Sound System</h5>
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
                  <h5 className="card-title">Juicer</h5>
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
                  <h5 className="card-title">Meat Mincer</h5>
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
                  <h5 className="card-title">Blender</h5>
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
                  <h5 className="card-title">Geyser</h5>
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
                  <h5 className="card-title">Heater</h5>
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
                  <h5 className="card-title">Chopper</h5>
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
                  <h5 className="card-title">Fan</h5>
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
                  <h5 className="card-title">Massagers</h5>
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
                  <h5 className="card-title">Grinder</h5>
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
                  <h5 className="card-title">Curler</h5>
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
                  <h5 className="card-title">Mixers</h5>
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
                  <h5 className="card-title">Hair Styler</h5>
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
                  <h5 className="card-title">Safe and Lockers</h5>
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
                  <h5 className="card-title">Humidifiers</h5>
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
                  <h5 className="card-title">Electric Grill</h5>
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
                  <h5 className="card-title">Food Processors</h5>
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
                  <h5 className="card-title">Air Purifiers</h5>
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
                  <h5 className="card-title">Toaster</h5>
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
                  <h5 className="card-title">Dishwasher</h5>
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
                  <h5 className="card-title">Electric Cooker</h5>
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
                  className="img-fluid "
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div>
                  <p>
                    <b>
                      <strong>Air Conditioner</strong>
                    </b>
                  </p>
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
                  <h5 className="card-title">Garment Steamers</h5>
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
                  <h5 className="card-title">Kettles</h5>
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
                  <h5 className="card-title">Sandwich Makers</h5>
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
                  <h5 className="card-title">Trimmer</h5>
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
                  <h5 className="card-title">Irons</h5>
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
                  <h5 className="card-title">Hair Dryers</h5>
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
                  <h5 className="card-title">Washing Machines</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Electronics;
