import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Services from "./components/Services";
import Appointment from "./components/Appointment";
import Features from "./components/Features";
import Action from "./components/Action";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import { images } from "./assets/img";

function App() {
  return (
    <div className="App">
      <>
        {/* Header Start */}
        <Header></Header>
        {/* Header End */}
        {/* Carousel Start */}
        <Carousel></Carousel>
        {/* Carousel End */}
        {/* About Start */}
        <About></About>
        {/* About End */}
        {/* Services Start */}
        <Services></Services>
        {/* Services End */}
        {/* Appointment Start */}
        <Appointment></Appointment>
        {/* Appointment End */}
        {/* Features Start */}
        <Features></Features>
        {/* Features End */}
        {/* Action Start */}
        <Action></Action>
        {/* Action End */}
        {/* Team Start */}
        <Team></Team>
        {/* Team End */}
        {/* Testimonial Start */}
        <Testimonial></Testimonial>
        {/* Testimonial End */}
        {/* Footer Start */}
        <Footer></Footer>
        {/* Footer End */}
        {/* Back to Top */}
        <a href="#" className="btn btn-primary px-3 back-to-top">
          <i className="fa fa-angle-double-up" />
        </a>
        {/* JavaScript Libraries */}
        {/* Contact Javascript File */}
        {/* Template Javascript */}
      </>
    </div>
  );
}

export default App;
