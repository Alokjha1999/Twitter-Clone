import React from "react";
import "./NavBarLeft.css";
import { FaTwitter } from "react-icons/fa";
import {
  BiHash,
  BiHomeCircle,
  BiMessageSquareDetail,
  BiBookmark,
} from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiFileList2Line, RiContactsFill } from "react-icons/ri";
import { CgMoreO, CgMoreAlt } from "react-icons/cg";

const NavBarLeft = () => {
  return (
    <div id="Left">
      <div id="TwitterBox">
        <FaTwitter id="TwitterLogo" />
      </div>
      <button id="box">
        <BiHomeCircle id="icon" />
        <p id="text-navbar-left">Home</p>
      </button>
      <button id="box">
        <BiHash id="icon" />
        <p id="text-navbar-left">Explore</p>
      </button>
      <button id="box">
        <IoNotificationsOutline id="icon" />
        <p id="text-navbar-left">notifications</p>
      </button>
      <button id="box">
        <BiMessageSquareDetail id="icon" />
        <p id="text-navbar-left">Message</p>
      </button>
      <button id="box">
        <BiBookmark id="icon" />
        <p id="text-navbar-left">Bookmarks</p>
      </button>
      <button id="box">
        <RiFileList2Line id="icon" />
        <p id="text-navbar-left">Lists</p>
      </button>
      <button id="box">
        <RiContactsFill id="icon" />
        <p id="text-navbar-left" className="bold">Profile</p>
      </button>
      <button id="box">
        <CgMoreO id="icon" />
        <p id="text-navbar-left">More</p>
      </button>

      <button id="Tweet">Tweet</button>
      <div id="user">
        <img
          src="https://scontent.fpat10-1.fna.fbcdn.net/v/t39.30808-6/371056495_1964546743915563_7362739554913204208_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=_8Pqow04p24AX-eOOg9&_nc_ht=scontent.fpat10-1.fna&oh=00_AfC_5B7ab3Lp1h5a8FZPWp_4qiypKa5G4Tw06umz5BWqFg&oe=6503D71F"
          alt=""
          id="user-img"
        />
        <div id="box-user-names">
          <p id="name">Alok TexhUniverse</p>
          <p id="user-name">@aloktechuniverse</p>
        </div>
        <CgMoreAlt id="cg" />
      </div>
    </div>
  );
};

export default NavBarLeft;
