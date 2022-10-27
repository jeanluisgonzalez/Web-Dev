import React from "react";
import "./post.css";

export default function post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id deserunt
        nesciunt maxime ex facere ipsa a laudantium veniam, neque aut fuga, quae
        soluta eaque, esse magnam perspiciatis provident eligendi voluptatum!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id deserunt
        nesciunt maxime ex facere ipsa a laudantium veniam, neque aut fuga, quae
        soluta eaque, esse magnam perspiciatis provident eligendi voluptatum!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id deserunt
        nesciunt maxime ex facere ipsa a laudantium veniam, neque aut fuga, quae
        soluta eaque, esse magnam perspiciatis provident eligendi voluptatum!
      </p>
    </div>
  );
}
