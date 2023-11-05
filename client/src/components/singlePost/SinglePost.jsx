import React from "react";
import "./SinglePost.css";
import Environment from "../../assets/environment.jpg";
export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={Environment} alt="Cute" />
      </div>
      <h1 className="singlePostTitle">
        Lorem ipsum dolor sit amet consectetur adi
        <div className="singlePostEdit">
          <i className="singlePostIcon far fa-edit" />
          <i className="singlePostIcon far fa-trash-alt" />
        </div>
      </h1>
      <div className="singlePostInfo">
        <span className="singlePostAuthor">
          Author:<b>Aditya</b>
        </span>
        <span className="singlePostDate">
         1 hour ago
        </span>
        
      </div>
        <p className="singlePostDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates optio reiciendis dolore quia sed, laboriosam doloremque similique corporis atque accusamus obcaecati pariatur ea, tempore ab fugit iure repudiandae asperiores nobis.lo Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, numquam nam! Animi dolorum facere earum eaque, optio itaque reiciendis possimus aperiam unde quis, rem quos quasi. Excepturi, laboriosam ipsum! Quasi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, aliquid dignissimos! Vel quod rerum a in natus dolores dolor vitae commodi! Alias ex, numquam eos aperiam tempore impedit inventore incidunt?</p>
    </div>
  );
}
