import React from "react";
import "./topbar.css";

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i class="fa-brands fa-facebook-square"></i>
        <i class="fa-brands fa-twitter-square"></i>
        <i class="fa-brands fa-pinterest-square"></i>
        <i class="fa-brands fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img src="" alt="" />
      </div>
    </div>
  );
}
