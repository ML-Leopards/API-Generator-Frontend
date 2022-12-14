import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./Files.css";
import { UploadFileOutlined } from "@mui/icons-material";

export default function Files(props) {
  const onDrop = useCallback((acceptedFiles) => {
    props.setFiles(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <>
      <div {...getRootProps()}>
        <input {...getInputProps()} disabled={props.loading}/>
        {isDragActive ? (
          <div>Drop the files here ...</div>
        ) : (
          <div className="dragtext">
            <div className="text-upload">
              Drag and drop <br /> or <br /> browse/upload
              <br />
              <br />
              <UploadFileOutlined sx={{ fontSize: "50px" }}/>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
