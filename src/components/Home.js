import React from "react";
import "../components/Home.css";
import Files from "./Files";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, CircularProgress } from "@mui/material";

export default function Home() {
  const navigate = useNavigate();
  const [files, setFiles] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handlefile = () => {
    setLoading(true);
    const data = new FormData();
    data.append("file", files);
    axios.post("http://127.0.0.1:5000/file", data).then(
      (response) => {
        if (response.status === 200) {
          navigate("/dashboard/analysis");
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

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
                <Files setFiles={setFiles} loading={loading}/>
              </div>
              <div>
                <button className="analyse" onClick={handlefile} disabled={loading}>
                  {loading? <CircularProgress/> : "Upload" }
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
