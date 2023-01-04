import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import About from './components/About';
import Service from './components/Service';
import Team from './components/Team';
import Faqs from './components/Faqs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';


function App() {
  return (
    <div className="App">
      <>
        {/* Navbar Start */}
        <Navbar></Navbar>
        {/* Navbar End */}
        {/* Carousel Start */}
        <Carousel></Carousel>
        {/* Carousel End */}
        {/* About Start */}
        <About></About>
        {/* About End */}
        {/* Service Start */}
        <Service></Service>
        {/* Service End */}
        {/* Team Start */}
        <Team></Team>
        {/* Team End */}
        {/* FAQs Start */}
        <Faqs></Faqs>
        {/* FAQs End */}
        {/* Contact Start */}
        <Contact></Contact>
        {/* Contact End */}
        {/* Footer Start */}
        <Footer></Footer>
        {/* Footer End */}
        {/* Modal */}
        <Modal></Modal>
        {/* Modal */}
        {/* Back to Top */}
        <a
          href="#"
          className="btn btn-lg btn-outline-primary btn-lg-square back-to-top"
        >
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
