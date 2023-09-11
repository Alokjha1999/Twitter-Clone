import React, { useState } from "react";
import "./Main.css";
import { BiArrowBack } from "react-icons/bi";
import { CgCalendarDates, CgMoreAlt } from "react-icons/cg";
import Tweet from "../Tweets/Tweet";

const Main = () => {
  const [follow, setFollow] = useState(true);

  const FollowHandler = () => {
    if (follow === true) {
      setFollow(false);
    } else if (follow === false) {
      setFollow(true);
    }
  };

  return (
    <div id="Main">
      <div id="back-box-icon">
        <div id="box-user-name-back">
          <BiArrowBack id="back" />
          <div>
            <h1 id="matin">aloktechuniverse</h1>
            <p id="Tweets">25 Tweets</p>
          </div>
        </div>
      </div>
      <div id="header">
        <div id="user-img-box">
          <img
            id="user-img-g"
            src="https://scontent.fpat10-1.fna.fbcdn.net/v/t39.30808-6/376860191_1971235939913310_4330428071457971714_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=49d041&_nc_ohc=Z8ro5GtP72cAX9q8Fs2&_nc_ht=scontent.fpat10-1.fna&oh=00_AfD8JM1bS22FKhUMIA6I1pR_x0bG7-k9ybQDcwM4OlCYFA&oe=65036E3F"
            alt="avatar"
          />
        </div>
      </div>

      <div id="follow-box">
        <CgMoreAlt id="more" />
        <input
          type="button"
          value={follow ? "Follow" : "Following"}
          onClick={FollowHandler}
          className={follow === false ? "Following" : "Follow"}
        />
      </div>

      <div id="user-box">
        <h1 id="name-user">AlokTechUniverse</h1>
        <p id="user-name-e">@aloktechUniverse</p>
        <p>👨‍💻 frontend</p>
        <div id="dateBox">
          <CgCalendarDates />
          <p id="date">Joined May 2019</p>
        </div>
        <div id="following-followers">
          <span id="bold">1200</span>
          <p id="following">Following</p>
          <span id="bold">{follow === false ? 6 : 5}</span>
          <p id="followers">Followers</p>
        </div>
      </div>

      <div id="TweetsBox">
        <div id="boxs">
          <button id="tweets">Tweets</button>
          <div id="blue"></div>
        </div>
        <button id="btn">Tweets & replies</button>
        <button id="btn">Media</button>
        <button id="btn">Likes</button>
      </div>

      <Tweet comment="51" like="120" tweet="" />
      <Tweet comment="210" like="403" tweet=""/>
      <Tweet comment="10" like="220" tweet=""/>
      <Tweet comment="65" like="825" tweet="" />
      <Tweet comment="45" like="504" tweet="" />
    </div>
  );
};

export default Main;
