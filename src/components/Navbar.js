import React from 'react';
import logo1 from "../assets/logo1.png";
import "./Navbar.css";
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
  const navigate= useNavigate()
  return (
    <div>
      <nav class="n">
        <ul className="left">
          <li onClick={()=>{navigate("/trial")}}>
            <img src={logo1} alt="" className="logo" />
          </li>
        </ul>
        <ul className="right align-center">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
