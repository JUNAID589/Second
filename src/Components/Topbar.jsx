import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faBagShopping } from "@fortawesome/free-solid-svg-icons";

const Topbar = () => {
  return (
    <>
      <header className="container-fluid navbar navbar-expand-lg navbar-light topbar-alfatah " style={{backgroundColor:'#fff'}}>
        <div className="container-fluid mx-5 my-2 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <span >DELIVERING TO:</span>
            <FontAwesomeIcon icon={faLocationDot} className="mx-2 " style={{ color: "#63E6BE" }} />
            <span style={{ color: "#63E6BE" }} className="mx-1 ">
              <strong>Address</strong>
            </span>
          </div>

          <div className="d-flex align-items-center">
            <FontAwesomeIcon
              className="mx-2 "
              icon={faBagShopping}
              style={{ color: "#63E6BE" }}
			  
            />
            <span>Hussain Chowk</span>
          </div>
        </div>
		
      </header>
	  
    </>
  );
};

export default Topbar;
