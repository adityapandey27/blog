import React from 'react'
import "./Post.css"
import TranspoterCraft from '../../assets/transpoter.jpg'
import { Link } from 'react-router-dom';
export default function Post({item}) {
  console.log(">>>>>>>>>Single post======",item);
  return (
    <div className='post'>
      
      <img className='postImg' src={TranspoterCraft} alt="TranspoterCraft" />
      <div className="postInfo">
        <div className="postCats">
          {
            !item.categories.length?"No category is added":item.categories.map((element)=>(

              <div className="postCat">{element.categories}
              </div>
            ))
          }
        </div>
         <Link to={`/post/${item._id}`} className='link'>
        <span className="postTitle">
          {item.title}</span>

         </Link>
        <hr/>
        <span className="postDate">{new Date(item.createdAt).toDateString()}</span>
      </div>
      <p className='postDesc'>
       {item.desc}</p>
    </div>
  )
}
