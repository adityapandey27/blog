import React, { useEffect, useState ,useContext} from "react";
import { Context } from '../../context/Context';

import "./SinglePost.css";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import Environment from "../../assets/environment.jpg";
export default function SinglePost() {

  const location=useLocation()
  const [post,setPosts]=useState({})
  const PF="http://localhost:5000/images/"
  const {user}=useContext(Context);
  const path=location.pathname.split("/")[2]
  useEffect(()=>{
    const getPost=async ()=>{
      const res= await axios.get("/post/"+path);
      console.log("resssssssssssssssssssss",res.data);
      setPosts(res.data)
    }
    getPost()
  },[path]);

  const handleDelete=async()=>{
    try{
      console.log(user.username);
      await axios.delete("/post/"+path,{data:{username:user.username}});
      window.location.replace("/");
    }catch(error){

    }
  }

  const handleEdit=async()=>{
    try{
      await axios.delete("post/"+path);
    }catch(error){

    }
  }
  console.log("[][][][[][[][][]",post);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={PF+post.photo} alt="Cute" />
      </div>
      <h1 className="singlePostTitle">
        {
          post.title
        }
        {
          post.username === user?.username &&(
        <div className="singlePostEdit">
          <i className="singlePostIcon far fa-edit" onClick={handleEdit}/>
          <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}/>
        </div>

          )
        }
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
