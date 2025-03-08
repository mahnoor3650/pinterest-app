import React from 'react'
import './topBar.css'
import UserButton from '../userButton/UserButton';
const TopBar = () => {
  return (
    <div className="topBar">
      <div className="search">
        <img src="/general/search.svg" alt="" />
        <input type="text" placeholder="Search" />
      </div>
      <UserButton />
    </div>
  );
}

export default TopBar
