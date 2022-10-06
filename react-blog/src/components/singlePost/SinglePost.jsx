import React from "react";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="SinglePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="singlePostImg"
        />
      </div>
      <h1 className="singlePostTitle">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum eveniet
        dolor eum aliquam fuga optio culpa architecto ab consectetur error amet
        sint soluta suscipit, quisquam alias voluptates atque libero odio!
      </h1>
    </div>
  );
}
