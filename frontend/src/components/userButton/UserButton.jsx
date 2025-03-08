import React, { useState } from "react";
import './userButton.css'
const UserButton = () => {
  const currentUset = true;
  const [open, setOpen] =useState(false)

  return currentUset ? (
    <div className="userButton">
      <img src="/general/noAvatar.png" alt="" />
      <img
        onClick={() => setOpen((prev) => !prev)}
        src="/general/arrow.svg"
        alt=""
        className="arrow"
      />
     {open &&  <div className="userOptions">
        <div className="userOption">Profile</div>
        <div className="userOption">Settings</div>
        <div className="userOption">Logout</div>
      </div>}
    </div>
  ) : (
    <a href="/" className="LoginLink">
      Login / Sign Up
    </a>
  );
};

export default UserButton;
