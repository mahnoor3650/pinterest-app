import React from "react";
import Image from "../image/Image";
import "./collections.css";
const Collections = () => {
  return (
    <div className="collections">
      <div className="collection">
        <Image

        //   width={100}
        //   height={100}
          path="/pins/pin1.jpeg"
          alt="collection"
        />
        <div className="collectionInfo">
          <h1 className="collectionName">Bedrooms</h1>
          <span className="collectionDescription">12 Pins - 1w</span>
        </div>
      </div>
      <div className="collection">
        <Image
          className="collectionImage"
          width={100}
          height={100}
          path="/pins/pin1.jpeg"
          alt="collection"
        />
        <div className="collectionInfo">
          <h1 className="collectionName">Bedrooms</h1>
          <span className="collectionDescription">12 Pins - 1w</span>
        </div>
      </div>
      <div className="collection">
        <Image
          className="collectionImage"
          width={100}
          height={100}
          path="/pins/pin1.jpeg"
          alt="collection"
        />
        <div className="collectionInfo">
          <h1 className="collectionName">Bedrooms</h1>
          <span className="collectionDescription">12 Pins - 1w</span>
        </div>
      </div>
      <div className="collection">
        <Image
          className="collectionImage"
          width={100}
          height={100}
          path="/pins/pin1.jpeg"
          alt="collection"
        />
        <div className="collectionInfo">
          <h1 className="collectionName">Bedrooms</h1>
          <span className="collectionDescription">12 Pins - 1w</span>
        </div>
      </div>
    </div>
  );
};

export default Collections;
