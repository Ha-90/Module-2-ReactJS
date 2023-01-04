import logo from './logo.svg';
import './App.css';
import Loader from './components/Loader';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import OurGlasses from './components/OurGlasses';
import OurShop from './components/OurShop';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <>
        {/* loader  */}
        <Loader></Loader>
        {/* end loader */}
        {/* header */}
        <Header></Header>
        {/* end header inner */}
        {/* end header */}
        {/* banner */}
        <Banner></Banner>
        {/* end banner */}
        {/* about section */}
        <About></About>
        {/* about section */}
        {/* Our  Glasses section */}
        <OurGlasses></OurGlasses>
        {/* end Our  Glasses section */}
        {/* Our shop section */}
        <OurShop></OurShop>
        {/* end Our shop section */}
        {/* clients section */}
        <Clients></Clients>
        {/* end clients section */}
        {/* contact section */}
        <Contact></Contact>
        {/* end contact section */}
        {/*  footer */}
        <Footer></Footer>
        {/* end footer */}
        {/* Javascript files*/}
        {/* sidebar */}
        {/* google map js */}
        {/* end google map js */}
      </>
    </div>
  );
}

export default App;
