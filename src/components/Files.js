import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./Files.css";
import { useNavigate } from "react-router-dom";
import { UploadFileOutlined } from "@mui/icons-material";

export default function Files() {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

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
