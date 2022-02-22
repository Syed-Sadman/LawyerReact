import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardR from "./components/CardR";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Lawyercard from "./components/Lawyercard";
import Navbar from "./components/Navbar";
import GlobalStyles from "./Global.styles";
import "./index.css";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Navbar />
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" />
        </Routes>
        {/* <Footer /> */}
        {/* <Lawyercard /> */}
        {/* <Footer /> */}
        <CardR />
        <Carousel />
        <Lawyercard />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
