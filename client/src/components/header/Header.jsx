import React from "react";
import "./Header.css";
import Man from '../../assets/man.jpg'
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitle">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImage" src={Man} alt="running man image" />
    </div>
  );
}
