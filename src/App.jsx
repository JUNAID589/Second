import Electronics from "./Components/Electronics";
import Footer from "./Components/Footer";
import Grocery from "./Components/Grocery";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { Routes, Route, Link } from "react-router-dom";
import Perfumes from "./Components/Perfumes";
import Makeup from "./Components/Makeup";
import Skincare from "./Components/Skincare";
import Toys from "./Components/Toys";
import { FaSquareWhatsapp } from "react-icons/fa6";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Grocery" element={<Grocery />} />
        <Route path="/Electronics" element={<Electronics />} />
        <Route path="/Perfumes" element={<Perfumes />} />
        <Route path="/Makeup" element={<Makeup />} />
        <Route path="/Skincare" element={<Skincare />} />
        <Route path="/Toys" element={<Toys />} />
      </Routes>
      <Footer />
      <Link to={"https://wa.me/923111555222"} className="whtsapp-icon">
        <FaSquareWhatsapp />
      </Link>
    </>
  );
};

export default App;
