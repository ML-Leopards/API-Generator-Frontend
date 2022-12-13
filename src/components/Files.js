import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./Files.css";
import { UploadFileOutlined } from "@mui/icons-material";
import axios from "axios";

export default function Files() {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  console.log(getInputProps);
  // useEffect(() => {
  //   axios
  //     .post("http://127.0.0.1:5000/file", {
  //       'file': acceptedFiles
  //     })
  //     .then(
  //       (response) => {
  //         console.log(response);
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  // });
  return (
    <>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <div>Drop the files here ...</div>
        ) : (
          <div className="dragtext">
            <div className="text-upload">
              Drag and drop <br /> or <br /> browse/upload
              <br />
              <br />
              <UploadFileOutlined sx={{ fontSize: "50px" }} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
