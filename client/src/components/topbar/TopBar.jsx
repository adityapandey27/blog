import React from "react";
import "./TopBar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
export default function TopBar() {
  const {user,dispatch}=useContext(Context);
  const handleLogout=()=>{
    dispatch({type:"LOGOUT"});
  }
  return (
    <div className="top">
      <div className="topLeft">
        <i className="fa-brands fa-facebook topIcons" />
        <i className="fa-brands fa-twitter topIcons" />
        <i className="fa-brands fa-pinterest topIcons" />
        <i className="fa-brands fa-instagram topIcons"></i>
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
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li onClick={handleLogout} className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings" className="link">
          <img
            className="topImage"
            src={user.profilePic}
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

        <i className="fa-solid fa-magnifying-glass searchIcon"></i>
      </div>
    </div>
  );
}
