import React, { useEffect,useState } from "react";
import "./SideBar.css";
import axios from "axios";
import Building from '../../assets/building.png'
export default function SideBar() {
  const [cats,setCats]=useState([]);
  useEffect(()=>{
    const getCats=async ()=>{
      const res=await axios.get("/categories");
      setCats(res.data);
    }
    getCats();
  },[])
  console.log("side Bar=>>>>>>>>>",cats);
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
          {
            cats.map(item=>(

              <li className="sidebarListItem">{item.name}</li>
            ))
          }
          
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
