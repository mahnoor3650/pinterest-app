import React from "react";
import "./galleryItem.css";
import { Link } from "react-router";
import Image from "../image/Image";
const GalleryItem = ({ item }) => {
  const optimizedHeight = (372 * item.height) / item.width;
  return (
    <div
      className="galleryItem"
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      <Image
        path={item.media}
        alt={item.id}
        height={optimizedHeight}
        width={372}
      />
      <Link to={`/pin/${item.id}`} className="overly"></Link>
      <button className="savebtn">Save</button>
      <div className="overlyIcons">
        <button>
          <Image path="/general/share.svg" alt="" />
        </button>
        <button>
          <Image path="/general/more.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default GalleryItem;
