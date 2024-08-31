import React, { useEffect, useState } from "react";
import "./SideBar.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Building from "../../assets/building.png";
import {getRequest} from "../../api_request";
export default function SideBar() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await getRequest("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="" src={Building} alt="building image" />
        <p>
        My name is Aditya Pandey, and I'm a full stack developer. With 1.5 years of experience in web development, I have a strong command over both front-end and back-end technologies, allowing me to build complete and scalable applications.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <span className="sidebarTitle">Choose to filter the blogs</span>
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
          <a href="https://twitter.com/AdityaPand27187" target="_blank">
            <i className="fa-brands fa-twitter topIcons" />
          </a>
          <a href="https://www.instagram.com/0_o.aditya.0_o/" target="_blank">
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
