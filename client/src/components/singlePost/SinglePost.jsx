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
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  const [updateMode,setUpdateMode]=useState(false);

  useEffect(()=>{
    const getPost=async ()=>{
      const res= await axios.get("/post/"+path);
      setPosts(res.data)
      setTitle(res.data.title);
      setDesc(res.data.desc);
    }
    getPost()
  },[path,updateMode]);

  const handleDelete=async()=>{
    try{
      await axios.delete(`/post/${post._id}`,{data:{username:user.username}});
      window.location.replace("/");
    }catch(error){

    }
  }

  const handleUpdate=async()=>{
    try{
      await axios.put(`/post/${post._id}`,{
        data:{username:user.username,title,desc},
      });
      setUpdateMode(false);
    }catch(error){

    }
  }

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={PF+post.photo} alt="Cute" />
      </div>
      {
        updateMode?<input type="text" value={title} autoFocus className="singlePostTitleInput"
        onChange={(e)=>{setTitle(e.target.value)}}
        />:(

      <h1 className="singlePostTitle">
        {
          post.title
        }
        {
          post.username === user?.username &&(
        <div className="singlePostEdit">
          <i className="singlePostIcon far fa-edit" onClick={()=>setUpdateMode(true)}/>
          <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}/>
        </div>

          )
        }
      </h1>
        )
      }
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
      {
        updateMode?(
          <textarea className="singlePostDescInput" value={desc}
          onChange={(e)=>{setDesc(e.target.value)}}
          />):(
            <p className="singlePostDesc">{desc}</p>
          )
        }
        <button className="singlePostButton"
        onClick={handleUpdate}
        >Update</button>
    </div>
  );
}
