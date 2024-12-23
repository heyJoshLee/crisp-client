import React from "react";
import { Outlet } from 'react-router-dom';

import Header from "@shared/components/Header/Header";

const Layout = () => {
  return (
    <div className="">
      <Header />
      <div className="main-container">
        <main className="page-wrapper">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;