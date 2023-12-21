import React from "react";
import "./Header.css";
import Man from '../../assets/man.jpg'
import Cover1 from '../../assets/cover1.jpg'
import Cover2 from '../../assets/cover2.jpg'
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitle">
        <span className="headerTitleSm">Ink the Digital Realm</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImage" src={Cover2} alt="running man image" />
    </div>
  );
}
