import React from 'react'
import "./mainLayout.css";
import Leftbar from '../../components/leftBar/Leftbar';
import TopBar from '../../components/topBAr/TopBar';
import { Outlet } from 'react-router';
const MainLayout = () => {
  return (
    <div className="app">
      {" "}
      <Leftbar />
      <div className="content">
        <TopBar />
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout
