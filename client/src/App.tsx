import React, { useState } from "react";
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
//components
import Dashboard from "./dashboard";
import Customers from "./customers";
import Header from './components/Header/_header';
import './assets/styles/style.scss'
import Navbar from "./components/Navbar/_navbar";

const App = () => {

  return (
    <BrowserRouter>
      <div className="wrap-content">
        <Header/>
        <Navbar/>
        <main className="main">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App

export const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};
