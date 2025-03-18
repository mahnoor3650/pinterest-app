import React from "react";
import "./leftbar.css";
import Image from "../image/Image";
const Leftbar = () => {
  return (
    <div className="leftBar">
      <div className="menuIcons">
        <a href="/" className="menuIcon">
          <Image path="/general/logo.png" className="logo" alt="" />
        </a>
        <a href="/" className="menuIcon">
          <Image path="/general/home.svg" alt="" />
        </a>
        <a href="/create" className="menuIcon">
          <Image path="/general/create.svg" alt="" />
        </a>
        <a href="/" className="menuIcon">
          <Image path="/general/updates.svg" alt="" />
        </a>
        <a href="/" className="menuIcon">
          <Image path="/general/messages.svg" alt="" />
        </a>
      </div>
      <a href="/" className="menuIcon">
        <Image path="/general/messages.svg" alt="" />
      </a>
    </div>
  );
};

export default Leftbar;
