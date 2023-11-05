import React from "react";
import "./SideBar.css";
import Building from '../../assets/building.png'
export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="" src={Building} alt="building image" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
          nisi explicabo dolor dolore possimus libero laboriosam,
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <ul className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook topIcons" />
          <i className="sidebarIcon fa-brands fa-twitter topIcons" />
          <i className="sidebarIcon fa-brands fa-pinterest topIcons" />
          <i className="sidebarIcon fa-brands fa-instagram topIcons"/>
        </ul>
      </div>
    </div>
  );
}
