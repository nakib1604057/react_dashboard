import React from "react";
import { Input } from "@mui/material";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import LanguageSharpIcon from "@mui/icons-material/LanguageSharp";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchSharpIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageSharpIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://studypress.org/asset/member/img/avatar5.png"
              alt=""
              className="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
