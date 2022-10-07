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
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet
          <div className="singlePostEdit">
            <i className="SinglePostIcon fa-regular fa-pen-to-square"></i>
            <i className="SinglePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="siglePostInfo">
          <span className="SinglePostAuthor">
            Author: <b>Jean </b>
          </span>
          <span className="SinglePostDate">
            Date: <b>1 hour ago </b>
          </span>
          <span className="SinglePostDate">
            Date: <b>1 hour ago</b>
          </span>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
          accusamus, ratione suscipit sequi sit cum veniam nulla. Dicta
          perferendis consequuntur at rem ipsum minus sequi, vero odit, nulla
          voluptatibus excepturi? Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Nobis accusamus, ratione suscipit sequi sit cum
          veniam nulla. Dicta perferendis consequuntur at rem ipsum minus sequi,
          vero odit, nulla voluptatibus excepturi? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Nobis accusamus, ratione suscipit sequi
          sit cum veniam nulla. Dicta perferendis consequuntur at rem ipsum
          minus sequi, vero odit, nulla voluptatibus excepturi? Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Nobis accusamus, ratione
          suscipit sequi sit cum veniam nulla. Dicta perferendis consequuntur at
          rem ipsum minus sequi, vero odit, nulla voluptatibus excepturi?
        </p>
      </div>
    </div>
  );
}
