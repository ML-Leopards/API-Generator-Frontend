import React from 'react';
import "./Wait.css"
import Navbar from './Navbar';

export default function Wait() {
  return (
    <div className="backcolor">
      <Navbar />
      <div className="wait">
        we will take a few minutes to process your data
      </div>
    </div>
  );
}
