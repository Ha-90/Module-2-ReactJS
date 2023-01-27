import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import RikkeiAcademy from "./components/RikkeiAcademy";
import RikkeiSoft from "./components/RikkeiSoft";
import AboutIndex from "./components/AboutIndex";
import NotFound from "./components/NotFound";
import CheckOut from "./components/CheckOut";
import Login from "./components/Login";
import CourseDetail from "./components/CourseDetail";
import React from "react";

function App() {
  const navLinkStyle = ({isActive})=>({
    color: isActive?'red':'black',
    backgroundColor: isActive?'black':'red'
  })

  
  return (
    <div className="App">
      {/* xây dựng menu với link và navlink */}
      <nav>
        <ul>
          <li><NavLink to={'/'} style={navLinkStyle}>Home</NavLink></li>
          <li><NavLink to={'/about'} style={navLinkStyle}> Abouts Us</NavLink> 
            <ul>
              <li><Link to={'/about/rikkeisoft'}>About RikkeiSoft</Link></li>
              <li><Link to={'/about/rikkeiacademy'}>About RikkeiAcademy</Link></li>
            </ul>
          </li>
          <li><Link to={'/products'} style={navLinkStyle}>Products</Link></li>
        </ul>
      </nav>
      {/* Dịnh nghĩa bộ định tuyến */}
      <Routes>
        {/* Định tuyến */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          {/* nest route */}
          {/* index route */}
          <Route index element={<AboutIndex />} />
          <Route path="rikkeisoft" element={<RikkeiSoft />} />
          <Route path="rikkeiacademy" element={<RikkeiAcademy />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element={<CheckOut/>}>CheckOut</Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="products/courseDetails/:courseName/:time" element={<CourseDetail/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
