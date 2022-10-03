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
          <span className="postcat">Music</span>
          <span className="postcat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
    </div>
  );
}
