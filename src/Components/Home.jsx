import carousal1 from "../assets/home-assets/homecarousal1.jpg";
import carousal2 from "../assets/home-assets/homecarousal2.jpg";
import carousal3 from "../assets/home-assets/homecarousal3.jpg";
import carousal4 from "../assets/home-assets/homecarousal4.jpg";
import carousal5 from "../assets/home-assets/homecarousal5.jpg";
import carousal6 from "../assets/home-assets/homecarousal6.jpg";
import carousal7 from "../assets/home-assets/homecarousal7.jpg";
import carousal8 from "../assets/home-assets/homecarousal8.jpg";
import { Link } from "react-router-dom";
import card1 from "../assets/home-assets/cards/homecard1.png";
import card2 from "../assets/home-assets/cards/homecard2.png";
import card3 from "../assets/home-assets/cards/homecard3.png";
import card4 from "../assets/home-assets/cards/homecard4.png";
import card5 from "../assets/home-assets/cards/homecard5.png";
import card6 from "../assets/home-assets/cards/homecard6.png";
import card7 from "../assets/home-assets/cards/homecard7.png";
import card8 from "../assets/home-assets/cards/homecard8.png";
import card9 from "../assets/home-assets/cards/homecard9.png";
import card10 from "../assets/home-assets/cards/homecard10.png";
import card11 from "../assets/home-assets/cards/homecard11.png";
import card12 from "../assets/home-assets/cards/homecard12.png";
import card13 from "../assets/home-assets/cards/homecard13.png";
import card14 from "../assets/home-assets/cards/homecard14.png";
import card15 from "../assets/home-assets/cards/homecard15.png";
import card16 from "../assets/home-assets/cards/homecard16.png";
import card17 from "../assets/home-assets/cards/homecard17.png";
import card18 from "../assets/home-assets/cards/homecard18.png";
import card19 from "../assets/home-assets/cards/homecard19.png";
import card20 from "../assets/home-assets/cards/homecard20.png";
import card21 from "../assets/home-assets/cards/homecard21.png";
import card22 from "../assets/home-assets/cards/homecard22.png";
import card23 from "../assets/home-assets/cards/homecard23.png";
import card24 from "../assets/home-assets/cards/homecard24.png";
import card25 from "../assets/home-assets/cards/homecard25.png";
import card26 from "../assets/home-assets/cards/homecard26.png";
import card27 from "../assets/home-assets/cards/homecard27.png";
import card28 from "../assets/home-assets/cards/homecard28.png";
import card29 from "../assets/home-assets/cards/homecard29.png";
import card30 from "../assets/home-assets/cards/homecard30.png";
import card31 from "../assets/home-assets/cards/homecard31.png";
import card32 from "../assets/home-assets/cards/homecard32.png";
import card33 from "../assets/home-assets/cards/homecard33.png";
import card34 from "../assets/home-assets/cards/homecard34.png";
import card35 from "../assets/home-assets/cards/homecard35.png";
import card36 from "../assets/home-assets/cards/homecard36.png";
import card37 from "../assets/home-assets/cards/homecard37.png";
import card38 from "../assets/home-assets/cards/homecard38.png";
import card39 from "../assets/home-assets/cards/homecard39.png";
import card40 from "../assets/home-assets/cards/homecard40.png";
import card41 from "../assets/home-assets/cards/homecard41.png";


import { FaPlusCircle} from "react-icons/fa";
import { FaFire } from "react-icons/fa";
const Home = () => {
  const Alert = () => {
    alert("added to cart!");
  };
  return (
    <>

      <div className="container-fluid  ">
        <marquee
          className=""
          direction="left"
          style={{ width: "100%" }}
          data-scrollamount="40"
        >
          {"  "}
          <FaFire />
          {"  "}Kyu ke Yahan Sab Milta Ha{"  "}
          <FaFire />
          {"  "}Monthly deals & discounts{"  "}
          <FaFire />
          {"  "}100k products at one click{"  "}
          <FaFire />
          {"  "}Flat 199 delivery charges{"  "}
          <FaFire />
          {"  "}Same day delivery
        </marquee>
      </div>
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
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="5"
          aria-label="Slide 6"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="6"
          aria-label="Slide 7"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="7"
          aria-label="Slide 8"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={carousal1}
            className="d-block w-100 img-fluid"
            alt="Slide 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src={carousal2}
            className="d-block w-100 img-fluid"
            alt="Slide 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src={carousal3}
            className="d-block w-100 img-fluid"
            alt="Slide 3"
          />
        </div>
        <div className="carousel-item">
          <img
            src={carousal4}
            className="d-block w-100 img-fluid"
            alt="Slide 4"
          />
        </div>
        <div className="carousel-item">
          <img
            src={carousal5}
            className="d-block w-100 img-fluid"
            alt="Slide 5"
          />
        </div>
        <div className="carousel-item">
          <img
            src={carousal6}
            className="d-block w-100 img-fluid"
            alt="Slide 6"
          />
        </div>
        <div className="carousel-item">
          <img
            src={carousal7}
            className="d-block w-100 img-fluid"
            alt="Slide 7"
          />
        </div>
        <div className="carousel-item">
          <img
            src={carousal8}
            className="d-block w-100 img-fluid"
            alt="Slide 8"
          />
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
	 
      {/*row 1 Cards Section */}
      <div className="container my-4">
        <div className="row">
          <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
            <Link
              to={"/Grocery"}
              className="card-hover-effect"
              style={{ textDecoration: "none" }}
            >
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
                    className="img-fluid mb-3 "
                    style={{ height: "150px", objectFit: "contain" }}
                  />
                  <div>
                    <h5 className="card-title">
                      <b>
                        <strong>Grocery Foods</strong>
                      </b>
                    </h5>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
            <Link
              to={"/Perfumes"}
              className="card-hover-effect"
              style={{ textDecoration: "none" }}
            >
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
                    <h5 className="card-title ">
                      <b>
                        <strong>Perfumes</strong>
                      </b>
                    </h5>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
            <Link
              to={"/Makeup"}
              className="card-hover-effect"
              style={{ textDecoration: "none" }}
            >
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
                    <h5 className="card-title">
                      <b>
                        <strong>Makeup</strong>
                      </b>
                    </h5>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
            <Link
              to={"/Skincare"}
              className="card-hover-effect"
              style={{ textDecoration: "none" }}
            >
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
                    <h5 className="card-title">
                      <b>
                        <strong>Skin Care</strong>
                      </b>
                    </h5>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
            <Link
              to={"/Electronics"}
              className="card-hover-effect"
              style={{ textDecoration: "none" }}
            >
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
                    <h5 className="card-title">
                      <b>
                        <strong>Electronic</strong>
                      </b>
                    </h5>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
            <Link
              to={"/Toys"}
              className="card-hover-effect"
              style={{ textDecoration: "none" }}
            >
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
                    <h5 className="card-title">
                      <b>
                        <strong>Toys</strong>
                      </b>
                    </h5>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/*row 1 Cards Section ends*/}

        {/* row 2 heading */}
        <div className="row my-4">
          <b>
            <strong>
              <h3>
                <b>
                  <strong>Upto 15% OFF! 🎊</strong>
                </b>
              </h3>
            </strong>
          </b>
        </div>

        {/* row 2 cards starts */}

        <div className="row">
          <div className="col col-12 col-sm-12 my-3 col-lg-4">
            <div className="card  h-100">
              <img src={card7} alt="..." />
            </div>
          </div>

          <div className="col col-6 col-sm-6 col-lg-2 my-3">
            <div className="card h-100">
              <img
                src={card8}
                className="card-img-top position-relative "
                alt="..."
              />
              <Link onClick={Alert}>
                <FaPlusCircle
                  className="position-absolute top-50 end-0 mx-3  "
                  style={{ color: "#04aead", width: "30px", height: "30px" }}
                />
				 
              </Link>
              <div
                className="position-absolute top-0 start-0"
                style={{
                  backgroundColor: "#FFD8D7",
                  width: "85.58px",
                  height: "25.19px",
                }}
              >
                <p className="" style={{ color: "#E10600" }}>
                  15.03% OFF
                </p>
              </div>

              <p className="card-text mx-3">Rs.650.00 PKR</p>
              <p className="card-title mx-3">
                <b>
                  <strong>LOREAL ELVIVE SHAMPOO 360ML</strong>
                </b>
              </p>
            </div>
          </div>

          <div className="col col-6 col-sm-6 col-lg-2 my-3">
            <div className="card  h-100">
              <img
                src={card9}
                className="card-img-top position-relative"
                alt="..."
              />
              <div
                className="position-absolute top-0 start-0"
                style={{
                  backgroundColor: "#FFD8D7",
                  width: "85.58px",
                  height: "25.19px",
                }}
              >
                <p className="" style={{ color: "#E10600" }}>
                  15.03% OFF
                </p>
              </div>
              <Link onClick={Alert}>
                <FaPlusCircle
                  className="position-absolute top-50 end-0 mx-3 "
                  style={{ color: "#04aead", width: "30px", height: "30px" }}
                />
              </Link>{" "}
              <p className="card-text mx-3">Rs.650.00 PKR</p>
              <p className="card-title mx-3">
                <b>
                  <strong>LOREAL ELVIVE RESTORING </strong>
                </b>
              </p>
            </div>
          </div>

          <div className="col col-6 col-sm-6 col-lg-2 my-3">
            <div className="card  h-100">
              <img
                src={card10}
                className="card-img-top position-relative"
                alt="..."
              />
              <Link onClick={Alert}>
                <FaPlusCircle
                  className="position-absolute top-50 end-0 mx-3 "
                  style={{ color: "#04aead", width: "30px", height: "30px" }}
                />
              </Link>
              <div
                className="position-absolute top-0 start-0"
                style={{
                  backgroundColor: "#FFD8D7",
                  width: "85.58px",
                  height: "25.19px",
                }}
              >
                <p className="" style={{ color: "#E10600" }}>
                  15.03% OFF
                </p>
              </div>
              <p className="card-text mx-3">Rs.650.00 PKR</p>
              <p className="card-title mx-3">
                <b>
                  <strong>LOREAL ELVIVE ANTI HAIRFALL </strong>
                </b>
              </p>
            </div>
          </div>

          <div className="col col-6 col-sm-6 col-lg-2 my-3">
            <div className="card  h-100">
              <img
                src={card11}
                className="card-img-top position-relative"
                alt="..."
              />
              <Link onClick={Alert}>
                <FaPlusCircle
                  className="position-absolute top-50 end-0 mx-3 "
                  style={{ color: "#04aead", width: "30px", height: "30px" }}
                />
              </Link>
              <div
                className="position-absolute top-0 start-0"
                style={{
                  backgroundColor: "#FFD8D7",
                  width: "85.58px",
                  height: "25.19px",
                }}
              >
                <p className="" style={{ color: "#E10600" }}>
                  15.00% OFF
                </p>
              </div>
              <p className="card-text mx-3">Rs.357.00 PKR</p>
              <p className="card-title mx-3">
                <b>
                  <strong>MUNCH CRUNCHY NUTS </strong>
                </b>
              </p>
            </div>
          </div>
        </div>
        {/* row 2 cards ends */}

        {/* row 3 heading  */}
        <div className="row my-4">
          <b>
            <strong>
              <h3>
                <b>
                  <strong>Your Tech Upgrade starts Here</strong>
                </b>
              </h3>
            </strong>
          </b>
        </div>

        {/* row 3 cards starts */}
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 my-3 col-lg-4">
            <div className="card  h-100">
              <img src={card12} className="" alt="..." />
            </div>
          </div>

          <div className="col col-6 col-sm-6 col-md-6 col-lg-2 my-3">
            <div className="card  h-100">
              <img
                src={card13}
                className="card-img-top position-relative"
                alt="..."
              />
              <Link onClick={Alert}>
                <FaPlusCircle
                  className="position-absolute top-50 end-0 mx-3 "
                  style={{ color: "#04aead", width: "30px", height: "30px" }}
                />
              </Link>
              <p className="card-text mx-3">Rs.51,900 PKR</p>
              <p className="card-title mx-3">
                <b>
                  <strong>ESQUIRE ELECTRIC OVEN</strong>
                </b>
              </p>
            </div>
          </div>

          <div className="col col-6 col-sm-6 col-md-6 col-lg-2 my-3">
            <div className="card  h-100">
              <img
                src={card14}
                className="card-img-top position-relative"
                alt="..."
              />
              <Link onClick={Alert}>
                <FaPlusCircle
                  className="position-absolute top-50 end-0 mx-3 "
                  style={{ color: "#04aead", width: "30px", height: "30px" }}
                />
              </Link>
              <p className="card-text mx-3">Rs.26,900 PKR</p>
              <p className="card-title mx-3">
                <b>
                  <strong>PHILIPS AIR FRYER HD9200</strong>
                </b>
              </p>
            </div>
          </div>

          <div className="col col-6 col-sm-6 col-md-6 col-lg-2 my-3">
            <div className="card  h-100">
              <img
                src={card15}
                className="card-img-top position-relative"
                alt="..."
              />
              <Link onClick={Alert}>
                <FaPlusCircle
                  className="position-absolute top-50 end-0 mx-3 "
                  style={{ color: "#04aead", width: "30px", height: "30px" }}
                />
              </Link>
              <p className="card-text mx-3">Rs.8995 PKR</p>
              <p className="card-title mx-3">
                <b>
                  <strong>PHILIPS EPILATOR</strong>
                </b>
              </p>
            </div>
          </div>

          <div className="col col-6 col-sm-6 col-md-6 col-lg-2 my-3">
            <div className="card  h-100">
              <img
                src={card16}
                className="card-img-top position-relative"
                alt="..."
              />
              <Link onClick={Alert}>
                <FaPlusCircle
                  className="position-absolute top-50 end-0 mx-3 "
                  style={{ color: "#04aead", width: "30px", height: "30px" }}
                />
              </Link>
              <p className="card-text mx-3">Rs.17500 PKR</p>
              <p className="card-title mx-3">
                <b>
                  <strong>REMINGTON STRAIGHTNER </strong>
                </b>
              </p>
            </div>
          </div>
        </div>
        {/* row 3 cards ends */}

        {/* row 4 heading */}
        <div className="row my-4">
          <b>
            <strong>
              <h3>
                <b>
                  <strong>Essence Of Love ❤️</strong>
                </b>
              </h3>
            </strong>
          </b>
        </div>

        {/* row 4 cards starts */}
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 my-3 col-lg-4">
            <div className="card  h-100">
              <img src={card17} className="" alt="..." />
            </div>
          </div>

          <div className="col col-6 col-sm-6 col-md-6 col-lg-2 my-3">
            <div className="card  h-100">
              <img
                src={card18}
                className="card-img-top position-relative"
                alt="..."
              />
              <Link onClick={Alert}>
                <FaPlusCircle
                  className="position-absolute top-50 end-0 mx-3 "
                  style={{ color: "#04aead", width: "30px", height: "30px" }}
                />
              </Link>
              <p className="card-text mx-3">Rs.2995 PKR</p>
              <p className="card-title mx-3">
                <b>
                  <strong>RIVARI BLUE DE CHANNEL</strong>
                </b>
              </p>
            </div>
          </div>

          <div className="col col-6 col-sm-6 col-md-6 col-lg-2 my-3">
            <div className="card  h-100">
              <img
                src={card19}
                className="card-img-top position-relative"
                alt="..."
              />
              <Link onClick={Alert}>
                <FaPlusCircle
                  className="position-absolute top-50 end-0 mx-3 "
                  style={{ color: "#04aead", width: "30px", height: "30px" }}
                />
              </Link>
              <p className="card-text mx-3">Rs.4500 PKR</p>
              <p className="card-title mx-3">
                <b>
                  <strong>JAGUAR CLASSIC</strong>
                </b>
              </p>
            </div>
          </div>

          <div className="col col-6 col-sm-6 col-md-6 col-lg-2 my-3">
            <div className="card  h-100">
              <img
                src={card20}
                className="card-img-top position-relative"
                alt="..."
              />
              <Link onClick={Alert}>
                <FaPlusCircle
                  className="position-absolute top-50 end-0 mx-3 "
                  style={{ color: "#04aead", width: "30px", height: "30px" }}
                />
              </Link>
              <p className="card-text mx-3">Rs.16,900 PKR</p>
              <p className="card-title mx-3">
                <b>
                  <strong>MONT BLANC EXPLORER</strong>
                </b>
              </p>
            </div>
          </div>

          <div className="col col-6 col-sm-6 col-md-6 col-lg-2 my-3">
            <div className="card  h-100">
              <img
                src={card21}
                className="card-img-top position-relative"
                alt="..."
              />
              <Link onClick={Alert}>
                <FaPlusCircle
                  className="position-absolute top-50 end-0 mx-3 "
                  style={{ color: "#04aead", width: "30px", height: "30px" }}
                />
              </Link>
              <p className="card-text mx-3">Rs.2995 PKR</p>
              <p className="card-title mx-3">
                <b>
                  <strong>RIVARI MISS DIOR </strong>
                </b>
              </p>
            </div>
          </div>
        </div>
        {/* row 4 cards ends */}

        {/* row 5 heading */}
        <div className="row my-4">
          <b>
            <strong>
              <h3>
                <b>
                  <strong>Serve it up in Style! 🍴</strong>
                </b>
              </h3>
            </strong>
          </b>
        </div>

        {/* row 5 cards starts */}
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 my-3 col-lg-4">
            <div className="card  h-100">
              <img src={card22} className="object-fit-contain" alt="..." />
            </div>
          </div>

          <div className="col col-6 col-sm-6 col-md-6 col-lg-2 my-3">
            <div className="card  h-100">
              <img
                src={card23}
                className="card-img-top position-relative"
                alt="..."
              />
              <Link onClick={Alert}>
                <FaPlusCircle
                  className="position-absolute top-50 end-0 mx-3 "
                  style={{ color: "#04aead", width: "30px", height: "30px" }}
                />
              </Link>
              <p className="card-text mx-3">Rs.3,320 PKR</p>
              <p className="card-title mx-3">
                <b>
                  <strong>PLATE DINNER ROYA</strong>
                </b>
              </p>
            </div>
          </div>

          <div className="col col-6 col-sm-6 col-md-6 col-lg-2 my-3">
            <div className="card  h-100">
              <img
                src={card24}
                className="card-img-top position-relative"
                alt="..."
              />
              <Link onClick={Alert}>
                <FaPlusCircle
                  className="position-absolute top-50 end-0 mx-3 "
                  style={{ color: "#04aead", width: "30px", height: "30px" }}
                />
              </Link>
              <p className="card-text mx-3">Rs.784 PKR</p>
              <p className="card-title mx-3">
                <b>
                  <strong>GLASS HONGLI</strong>
                </b>
              </p>
            </div>
          </div>

          <div className="col col-6 col-sm-6 col-md-6 col-lg-2 my-3">
            <div className="card  h-100">
              <img
                src={card25}
                className="card-img-top position-relative"
                alt="..."
              />
              <Link onClick={Alert}>
                <FaPlusCircle
                  className="position-absolute top-50 end-0 mx-3 "
                  style={{ color: "#04aead", width: "30px", height: "30px" }}
                />
              </Link>
              <p className="card-text mx-3">Rs.356 PKR</p>
              <p className="card-title mx-3">
                <b>
                  <strong>DISH MELAMINE</strong>
                </b>
              </p>
            </div>
          </div>

          <div className="col col-6 col-sm-6 col-md-6 col-lg-2 my-3">
            <div className="card  h-100">
              <img
                src={card26}
                className="card-img-top position-relative"
                alt="..."
              />
              <Link onClick={Alert}>
                <FaPlusCircle
                  className="position-absolute top-50 end-0 mx-3 "
                  style={{ color: "#04aead", width: "30px", height: "30px" }}
                />
              </Link>
              <p className="card-text mx-3">Rs.1500 PKR</p>
              <p className="card-title mx-3">
                <b>
                  <strong>WATER BOTTLE </strong>
                </b>
              </p>
            </div>
          </div>
        </div>
        {/* row 5 cards ends */}

        {/* row 6 heading */}
        <div className="row my-4">
          <b>
            <strong>
              <h3>
                <b>
                  <strong>A Line Of Cosmetics!</strong>
                </b>
              </h3>
            </strong>
          </b>
        </div>

        {/* row 6 cards starts */}
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 my-3 col-lg-4">
            <div className="card  h-100">
              <img src={card27} className="" alt="..." />
            </div>
          </div>

          <div className="col col-6 col-sm-6 col-md-6 col-lg-2 my-3">
            <div className="card  h-100">
              <img
                src={card28}
                className="card-img-top position-relative"
                alt="..."
              />
              <Link onClick={Alert}>
                <FaPlusCircle
                  className="position-absolute top-50 end-0 mx-3 "
                  style={{ color: "#04aead", width: "30px", height: "30px" }}
                />
              </Link>
              <p className="card-text mx-3">Rs.1,695.00 PKR</p>
              <p className="card-title mx-3">
                <b>
                  <strong>MARSHMALLOW BLUSH</strong>
                </b>
              </p>
            </div>
          </div>

          <div className="col col-6 col-sm-6 col-md-6 col-lg-2 my-3">
            <div className="card  h-100">
              <img
                src={card29}
                className="card-img-top position-relative"
                alt="..."
              />
              <Link onClick={Alert}>
                <FaPlusCircle
                  className="position-absolute top-50 end-0 mx-3 "
                  style={{ color: "#04aead", width: "30px", height: "30px" }}
                />
              </Link>
              <p className="card-text mx-3">Rs.2,195.00 PKR</p>
              <p className="card-title mx-3">
                <b>
                  <strong>MARSHMALLOW VELVET</strong>
                </b>
              </p>
            </div>
          </div>

          <div className="col col-6 col-sm-6 col-md-6 col-lg-2 my-3">
            <div className="card  h-100">
              <img
                src={card30}
                className="card-img-top position-relative"
                alt="..."
              />
              <Link onClick={Alert}>
                <FaPlusCircle
                  className="position-absolute top-50 end-0 mx-3 "
                  style={{ color: "#04aead", width: "30px", height: "30px" }}
                />
              </Link>
              <p className="card-text mx-3">Rs.3,795.00 PKR</p>
              <p className="card-title mx-3">
                <b>
                  <strong>MARSHMALLOW MATTE</strong>
                </b>
              </p>
            </div>
          </div>

          <div className="col col-6 col-sm-6 col-md-6 col-lg-2 my-3">
            <div className="card  h-100">
              <img
                src={card31}
                className="card-img-top position-relative"
                alt="..."
              />
              <Link onClick={Alert}>
                <FaPlusCircle
                  className="position-absolute top-50 end-0 mx-3 "
                  style={{ color: "#04aead", width: "30px", height: "30px" }}
                />
              </Link>
              <p className="card-text mx-3">Rs.895 PKR</p>
              <p className="card-title mx-3">
                <b>
                  <strong>MARSHMALLOW NAIL</strong>
                </b>
              </p>
            </div>
          </div>
        </div>
        {/* row 6 cards ends */}

        {/* row 7 heading */}
        <div className="row my-4">
          <b>
            <strong>
              <h3>
                <b>
                  <strong>Shade Seekers,Unite!❤️</strong>
                </b>
              </h3>
            </strong>
          </b>
        </div>

        {/* row 7 cards starts */}
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 my-3 col-lg-4">
            <div className="card  h-100">
              <img src={card32} className="" alt="..." />
            </div>
          </div>

          <div className="col col-6 col-sm-6 col-md-6 col-lg-2 my-3">
            <div className="card  h-100">
              <img
                src={card33}
                className="card-img-top position-relative"
                alt="..."
              />
              <Link onClick={Alert}>
                <FaPlusCircle
                  className="position-absolute top-50 end-0 mx-3 "
                  style={{ color: "#04aead", width: "30px", height: "30px" }}
                />
              </Link>
              <p className="card-text mx-3">Rs.12,900.00 PKR</p>
              <p className="card-title mx-3">
                <b>
                  <strong>ESCADA SUNGLASSES</strong>
                </b>
              </p>
            </div>
          </div>

          <div className="col col-6 col-sm-6 col-md-6 col-lg-2 my-3">
            <div className="card  h-100">
              <img
                src={card34}
                className="card-img-top position-relative"
                alt="..."
              />
              <Link onClick={Alert}>
                <FaPlusCircle
                  className="position-absolute top-50 end-0 mx-3 "
                  style={{ color: "#04aead", width: "30px", height: "30px" }}
                />
              </Link>
              <p className="card-text mx-3">Rs.10,900 PKR</p>
              <p className="card-title mx-3">
                <b>
                  <strong>ESCADA SUNGLASS</strong>
                </b>
              </p>
            </div>
          </div>

          <div className="col col-6 col-sm-6 col-md-6 col-lg-2 my-3">
            <div className="card  h-100">
              <img
                src={card35}
                className="card-img-top position-relative"
                alt="..."
              />
              <Link onClick={Alert}>
                <FaPlusCircle
                  className="position-absolute top-50 end-0 mx-3 "
                  style={{ color: "#04aead", width: "30px", height: "30px" }}
                />
              </Link>
              <p className="card-text mx-3">Rs.13,900 PKR</p>
              <p className="card-title mx-3">
                <b>
                  <strong>CHOPARD SUNGLASS</strong>
                </b>
              </p>
            </div>
          </div>

          <div className="col col-6 col-sm-6 col-md-6 col-lg-2 my-3">
            <div className="card  h-100">
              <img
                src={card36}
                className="card-img-top position-relative"
                alt="..."
              />
              <Link onClick={Alert}>
                <FaPlusCircle
                  className="position-absolute top-50 end-0 mx-3 "
                  style={{ color: "#04aead", width: "30px", height: "30px" }}
                />
              </Link>
              <p className="card-text mx-3">Rs.1900 PKR</p>
              <p className="card-title mx-3">
                <b>
                  <strong>Ferrari Sunglass Pc </strong>
                </b>
              </p>
            </div>
          </div>
        </div>
        {/* row 7 cards ends */}

        {/* row 8 heading */}
        <div className="row my-4">
          <b>
            <strong>
              <h3>
                <b>
                  <strong>Let The Fun Begin Toys🎊😎</strong>
                </b>
              </h3>
            </strong>
          </b>
        </div>

        {/* row 8 cards starts */}
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 my-3 col-lg-4">
            <div className="card  h-100">
              <img src={card37} className="" alt="..." />
            </div>
          </div>

          <div className="col col-6 col-sm-6 col-md-6 col-lg-2 my-3">
            <div className="card  h-100">
              <img
                src={card38}
                className="card-img-top position-relative"
                alt="..."
              />
              <Link onClick={Alert}>
                <FaPlusCircle
                  className="position-absolute top-50 end-0 mx-3 "
                  style={{ color: "#04aead", width: "30px", height: "30px" }}
                />
              </Link>
              <p className="card-text mx-3">Rs.560 PKR</p>
              <p className="card-title mx-3">
                <b>
                  <strong>Aqua Flow Goggles</strong>
                </b>
              </p>
            </div>
          </div>

          <div className="col col-6 col-sm-6 col-md-6 col-lg-2 my-3">
            <div className="card  h-100">
              <img
                src={card39}
                className="card-img-top position-relative"
                alt="..."
              />
              <Link onClick={Alert}>
                <FaPlusCircle
                  className="position-absolute top-50 end-0 mx-3 "
                  style={{ color: "#04aead", width: "30px", height: "30px" }}
                />
              </Link>
              <p className="card-text mx-3">Rs.750 PKR</p>
              <p className="card-title mx-3">
                <b>
                  <strong>MATCHBOX DINKY</strong>
                </b>
              </p>
            </div>
          </div>

          <div className="col col-6 col-sm-6 col-md-6 col-lg-2 my-3">
            <div className="card  h-100">
              <img
                src={card40}
                className="card-img-top position-relative"
                alt="..."
              />
              <Link onClick={Alert}>
                <FaPlusCircle
                  className="position-absolute top-50 end-0 mx-3 "
                  style={{ color: "#04aead", width: "30px", height: "30px" }}
                />
              </Link>
              <p className="card-text mx-3">Rs.935 PKR</p>
              <p className="card-title mx-3">
                <b>
                  <strong>Swimming Jacket</strong>
                </b>
              </p>
            </div>
          </div>

          <div className="col col-6 col-sm-6 col-md-6 col-lg-2 my-3">
            <div className="card  h-100">
              <img
                src={card41}
                className="card-img-top position-relative"
                alt="..."
              />
              <Link onClick={Alert}>
                <FaPlusCircle
                  className="position-absolute top-50 end-0 mx-3 "
                  style={{ color: "#04aead", width: "30px", height: "30px" }}
                />
              </Link>
              <p className="card-text mx-3">Rs.1475 PKR</p>
              <p className="card-title mx-3">
                <b>
                  <strong>INTEX BOB BAGS</strong>
                </b>
              </p>
            </div>
          </div>
        </div>
        {/* row 8 cards ends */}
      </div>

      <div className="container">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={carousal4} className="d-block w-100" alt="Slide 1" />
            </div>
          </div>
        </div>
      </div>
	
    </>
  );
};

export default Home;
