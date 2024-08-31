import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/Context';
import "./Write.css"
import axios from 'axios';
import {postRequest} from "../../api_request"
export default function Write() {
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  const [file,setFile]=useState(null);
  const {user}=useContext(Context);
  const handleSubmit= async(e)=>{
    e.preventDefault();
    const newPost={
      username:user.username,
      title,
      desc
    };
    console.log("kkkkkkkkkkkkkkkkkkkkkk file========",file)
    if(file)
    {
      console.log("kkkkkkkkkkkkkkkkkkkkkk file========index",file)
      console.log("file found",file)
      const data=new FormData();
      const filename=Date.now()+file.name;
      data.append("name",filename);
      data.append("file",file);
      newPost.photo=filename;
      try{
        await postRequest("/upload",data)
      }catch(Error)
      {
        console.log(Error)
      }
      
    }
    try{

     const res= await postRequest("/post",newPost)
     window.location.replace('/post/'+res.data._id);
    }
    catch(error)
    {}
  }

  return (
    <div className='write'>
       {
         file &&
         <img 
         className='rightImg'
         src={URL.createObjectURL(file)}></img>
       }
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
                <i className='writeIcon fas fa-plus'></i>
            </label>
            <input type='file' id='fileInput' style={{display:'none'}}
            onChange={(e)=>setFile(e.target.files[0])}
            />
            <input type='text' placeholder='Title' className='writeInput' autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
            />
        </div>
        <div className="writeFormGroup">
            <textarea name="" className="writeInput writeText" placeholder='Tell your story...' type="text"
            onChange={e=>setDesc(e.target.value)}
            ></textarea>
        </div>
        <button className="writeSubmit" type='submit'>Publish</button>
      </form>
      
    </div>
  )
}
