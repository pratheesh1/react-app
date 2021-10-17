import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "../../assets/styles/form/form.css";
import fileUpload from "../../assets/images/file-upload.png";

export default function FileUpload() {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div className="row m-0 h-100 file-upload d-flex justify-content-center align-items-center">
        <img
          className="upload-file-logo"
          src={fileUpload}
          aria-label="upload file"
        />
        <span className="d-flex justify-content-center align-items-center text-muted upload-file-text">
          Drag and drop or choose file to upload your files.
        </span>
      </div>
    </div>
  );
}
