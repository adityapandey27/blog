import React from "react";
import "./TopBar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
import Cute from "../../assets/cute.jpg";
export default function TopBar() {
  const {user,dispatch}=useContext(Context);
  const handleLogout=()=>{
    dispatch({type:"LOGOUT"});
    window.location.replace("/");
  }
  return (
    <div className="top">
      <div className="topLeft">
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
        
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          {
            user ?<li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>:""
          }
          
          <li onClick={handleLogout} className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
      
     
        {user ? (
          <Link to="/settings" className="link">
          <img
            className="topImage"
            src={user.profilePicture.length>0?user.profilePicture :Cute}
            alt=""
          />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        
      </div>
    </div>
  );
}
