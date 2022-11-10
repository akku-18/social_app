import "./rightbar.css";
import {Users} from "../../dummyData"

import React from "react";
import Online from "../online/Online";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="assests/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Ankit</b> and 3 other friends have birthday today
          </span>
        </div>
        <img src="assests/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
        {Users.map(u =>(
          <Online key={u.id} user={u} />
        ))}
        </ul>
      </div>
    </div>
  );
}
