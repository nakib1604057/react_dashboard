import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Inventory2TwoToneIcon from "@mui/icons-material/Inventory2TwoTone";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";
import "./Sidebar.scss";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sideheader">
        <span className="logo">React Dash Board</span>
      </div>
      <hr />
      <div className="sidebody">
        <div className="list">
          <ul>
            <p className="title">Main</p>
            <li>
              <DashboardIcon className="sidebarIcon" /> Dashboard
            </li>
            <p className="title">Lists</p>

            <li>
              <PersonOutlineOutlinedIcon className="sidebarIcon" /> Users
            </li>
            <li>
              <Inventory2TwoToneIcon className="sidebarIcon" /> Products
            </li>
            <li>
              <ListAltIcon className="sidebarIcon" /> Orders
            </li>
            <li>
              <LocalShippingOutlinedIcon className="sidebarIcon" /> Delivery
            </li>
            <p className="title">Useful</p>

            <li>
              <QueryStatsOutlinedIcon className="sidebarIcon" /> Stats
            </li>
            <li>
              <NotificationsActiveOutlinedIcon className="sidebarIcon" />{" "}
              Notifications
            </li>
            <p className="title">Service</p>

            <li>
              <SettingsSystemDaydreamOutlinedIcon className="sidebarIcon" />{" "}
              System Health
            </li>
            <li>
              <PsychologyOutlinedIcon className="sidebarIcon" /> Logs
            </li>
            <li>
              <SettingsSharpIcon className="sidebarIcon" /> Settings
            </li>
            <p className="title">user</p>

            <li>
              <AccountCircleTwoToneIcon className="sidebarIcon" /> Profile
            </li>
            <li>
              <LogoutTwoToneIcon className="sidebarIcon" /> Logout
            </li>
          </ul>
        </div>
      </div>
      <div className="sidefooter">
        Color Option
        <div className="coloroption">
          <div className="selectColor"></div>
          <div className="selectColor"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
