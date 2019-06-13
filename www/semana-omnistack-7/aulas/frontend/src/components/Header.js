import React from "react";

import "./Header.css";

import logo from "../assets/logo.svg";
import camera from "../assets/logo.svg";

export default function Header() {
  return (
    <header id="main-header">
      <div className="header-content">
        <img src={logo} alt="Rocketgram" />
        <img src={camera} alt="Enviar publicação" />
      </div>
    </header>
  );
}
