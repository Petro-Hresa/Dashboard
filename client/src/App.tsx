import React, { useState } from "react";
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
//components
import Header from './components/Header/_header';
import Navbar from "./components/Navbar/_navbar";
import Dashboard from "./Dashboard";
import Product from "./product";
import Customers from "./Customers";
import Income from "./Income";
import Promote from "./Promote";
import Help from "./Help";
import './assets/styles/style.scss'

const App = () => {

  return (
    <BrowserRouter>
      <div className="wrap-content">
        <Header />
        <main className="main">
          <header className="main__header">
            <div className="greeting">Hello Evano <span>👋🏼,</span></div>
          </header>
          <div className="main__content">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              {/* <Route path="/product" element={<Product />} /> */}
              {/* <Route path="/customers" element={<Customers />} /> */}
              {/* <Route path="/income" element={<Income />} /> */}
              {/* <Route path="/promote" element={<Promote />} /> */}
              {/* <Route path="/help" element={<Help />} /> */}
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App

export const debounce = (fn: Function, ms = 0) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};





export function changeState(setState: (arg: boolean) => void, tag: string) {

  if (window.innerWidth <= 768 && tag == 'header') setState(true)
  // if (window.innerWidth > 768 && tag == 'navbar') fnStateCap(true)

  window.addEventListener('resize', debounce(() => {

    switch (tag) {
      case 'header':
        window.innerWidth <= 768 ? setState(true) : setState(false)
      break;

      // case 'navbar':
      //   window.innerWidth > 768 ?  fnStateCap(true) : fnStateCap(false)
      // break;
    }

  }))
}

