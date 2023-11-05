import React from 'react'
import "./Post.css"
import TranspoterCraft from '../../assets/transpoter.jpg'
export default function Post() {
  return (
    <div className='post'>
      <img className='postImg' src={TranspoterCraft} alt="TranspoterCraft" />
      <div className="postInfo">
        <div className="postCats">
            <div className="postCat">Music</div>
            <div className="postCat">Life</div>
        </div>
        <span className="postTitle">
            Lorem ipsum dolor sit  elit </span>
        <hr/>
        <span className="postDate">1 hour ago</span>
      </div>
      <p className='postDesc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse voluptatibus, harum obcaecati rem maxime accusamus pariatur maiores cupiditate quam odio. Veniam, dolor magnam quis similique praesentium quo repudiandae mollitia illo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas modi dolores iusto labore expedita nemo, consequatur eveniet! Unde earum porro voluptas facilis veniam alias? Rerum debitis corporis ipsum quibusdam officia.</p>
    </div>
  )
}
