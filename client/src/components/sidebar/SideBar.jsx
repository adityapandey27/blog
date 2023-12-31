import React, { useEffect, useState } from "react";
import "./SideBar.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Building from "../../assets/building.png";
export default function SideBar() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  console.log("side Bar=>>>>>>>>>", cats);
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
          {cats.map((item) => (
            <Link className="link" to={`/?cat=${item.name}`}>
              <li className="sidebarListItem">{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <ul className="sidebarSocial">
          <a href="https://twitter.com/tweeter" target="_blank">
            <i className="fa-brands fa-twitter topIcons" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <i className="fa-brands fa-instagram topIcons"></i>
          </a>
          <a href="https://in.pinterest.com/" target="_blank">
            <i className="fa-brands fa-pinterest topIcons" />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <i className="fa-brands fa-facebook topIcons" />
          </a>
        </ul>
      </div>
    </div>
  );
}
