import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/Context';
import "./Write.css"
import axios from 'axios';
export default function Write() {
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  const [file,setFile]=useState(null);
  const {user}=useContext(Context);
  console.log("jjjjjjjj",user);
  const handleSubmit= async(e)=>{
    e.preventDefault();
    const newPost={
      username:user.username,
      title,
      desc
    };
    if(file)
    {
      const data=new FormData();
      const filename=Date.now()+file.name;
      data.append("name",filename);
      data.append("file",file);
      newPost.photo=filename;
      try{
        await axios.post("/upload",data)
      }catch(Error)
      {

      }
      
    }
    try{

     const res= await axios.post("/post",newPost)
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
