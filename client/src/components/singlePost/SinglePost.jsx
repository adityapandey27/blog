import React, { useEffect, useState } from "react";
import "./SinglePost.css";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import Environment from "../../assets/environment.jpg";
export default function SinglePost() {

  const location=useLocation()
  const [post,setPosts]=useState({})
  
  const path=location.pathname.split("/")[2]
  useEffect(()=>{
    const getPost=async ()=>{
      const res= await axios.get("/post/"+path);
      console.log("resssssssssssssssssssss",res.data);
      setPosts(res.data)
    }
    getPost()
  },[path]);
  console.log("[][][][[][[][][]",post);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={post.image} alt="Cute" />
      </div>
      <h1 className="singlePostTitle">
        {
          post.title
        }
        <div className="singlePostEdit">
          <i className="singlePostIcon far fa-edit" />
          <i className="singlePostIcon far fa-trash-alt" />
        </div>
      </h1>
      <div className="singlePostInfo">
        <span className="singlePostAuthor">
          Author:
          <Link className="link" to={`/?user=${post.username}`}>
          <b>{post.username}</b>
          </Link>
        </span>
        <span className="singlePostDate">
        
         {
          new Date(post.createdAt).toDateString()
         }
        </span>
        
      </div>
        <p className="singlePostDesc">{post.desc}</p>
    </div>
  );
}
