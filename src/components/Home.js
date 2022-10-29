import React from "react";
import "../components/Home.css";
import Files from "./Files";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="outer">
        <Navbar />
        <div class="container">
          <div class="row">
            <div class="col-auto offset-6 heading">
              API Generator and Data Analysis
              <br />
              <div className="drop">
                <Files />
              </div>
              <div>
                <button
                  className="analyse"
                  onClick={() => {
                    navigate("/tuning");
                  }}
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
