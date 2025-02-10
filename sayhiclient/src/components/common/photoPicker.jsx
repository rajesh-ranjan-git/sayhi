import React from "react";
import ReactDOM from "react-dom";

const PhotoPicker = ({ onChange }) => {
  const component = (
    <input type="file" hidden id="photoPicker" onChange={onChange} />
  );
  return ReactDOM.createPortal(
    component,
    document.getElementById("photoPickerElement")
  );
};

export default PhotoPicker;
