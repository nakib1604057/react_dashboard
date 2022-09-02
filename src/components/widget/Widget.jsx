import React from "react";
import { Card, Avatar } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import KeyboardControlKeyOutlinedIcon from "@mui/icons-material/KeyboardControlKeyOutlined";
import "./widget.scss";
const Widget = ({
  HeaderTitle,
  HeaderRatio,
  Count,
  BottomAll,
  BadgeDetails,
  BadgeColor,
  BadgeBgColor,
}) => {
  return (
    <div className="widget">
      <Card className="widget-card">
        <div className="widget-header">
          <span className="header-pat1"> {HeaderTitle} </span>
          <span className="header-pat2">
            <KeyboardControlKeyOutlinedIcon /> {HeaderRatio}
          </span>
        </div>
        <div className="widget-center">{Count}</div>
        <div className="widget-bottom">
          <span>
            <u>
              <a herf=""> {BottomAll}</a>
            </u>
          </span>
          <Avatar sx={{ bgcolor: "#ff00007a" }} variant="rounded">
            {BadgeDetails}
          </Avatar>
        </div>
      </Card>
    </div>
  );
};

export default Widget;
