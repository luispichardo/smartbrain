import React from "react";
import "./face-recognition.css";

const FaceRecognition = ({
  imageUrl,
  box: { leftCol, rightCol, topRow, bottomRow },
}) => (
  <div className="center ma">
    <div className="absolute mt2">
      <img id="input_image" src={imageUrl} alt="" width="500px" height="auto" />
      {leftCol ? (
        <div
          className="bounding-box"
          style={{
            top: topRow,
            right: rightCol,
            left: leftCol,
            bottom: bottomRow,
          }}
        ></div>
      ) : null}
    </div>
  </div>
);

export default FaceRecognition;
