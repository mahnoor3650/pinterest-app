import React from 'react'
import "./galleryItem.css";
import {Link} from 'react-router'
const GalleryItem = ({item}) => {
  return (
    <div
      className="galleryItem"
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      <img src={item.media} alt="" />
      <Link to={`/pin/${item.id}`} className="overly"></Link>
      <button className="savebtn">Save</button>
      <div className='overlyIcons'>
        <button>
          <img src="/general/share.svg" alt="" />
        </button>
        <button>
          <img src="/general/more.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default GalleryItem
