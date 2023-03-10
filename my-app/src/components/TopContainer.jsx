import React from "react";
import Features from "./Features"
import Pricing from "./Pricing"
import Resources from "./Resources"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Shortly from "./Shortly";
import Button from "./Button";
import illustrationImage from "../images/illustration-working.svg"


function TopContainer(){
    return(
      <div className="top-container">
        <div className="routes">
        <h1 className="nav-header-mobile">Shortly</h1>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Shortly />} />
            <Route path="features" element={<Features />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="resources" element={<Resources />} />
          </Route>
        </Routes>
        </BrowserRouter>
        </div>
        <div className="top-container-content">
          <div className="left-box">
            <h1 className="top-container-header">More than just shorter links</h1>
            <p className="top-container-paragraph-tag">Build your brand's recognition and get detailed insights on how your links are performing</p>
            <Button className="top-container-get-started-button" buttonText="Get Started"/>
          </div>
          <div className="right-box">
            <img src={illustrationImage} alt="working"/>
          </div>
        </div>
        <div className="top-container-input">
        <form action="/" method="post">
          <input className="urlInput" type="text" placeholder="Shorten a link here..." required/>
          <Button type="submit" className="submitButton" buttonText="Shorten it!"/>
        </form>
        </div>
      </div>
    );
}

export default TopContainer;