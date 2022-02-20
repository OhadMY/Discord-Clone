import React from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SidebarChannel from "./SidebarChannel";
import { Avatar } from "@material-ui/core";
import { Settings } from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";

function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <h3>Discord Clone</h3>
        <ExpandMoreIcon />
      </div>

      <div className="sidebar_channels">
        <div className="sidebar_channelsHeader">
          <div className="sidebar_header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>

          <Tooltip title="Add" placement="top">
            <AddIcon className="sidebar_addChannel"></AddIcon>
          </Tooltip>
        </div>

        <div className="sidebar_channelsList">
          <SidebarChannel />
          <SidebarChannel />
        </div>
      </div>

      <div className="sidebar_profile">
        <Avatar src="https://lh3.googleusercontent.com/a-/AOh14GidgFkedLgEZUS0o_ZhwNMT3zoRdbSGAmHefUGNHQ=s288-p-rw-no" />
        <div className="sidebar_profileInfo">
          <h3>OhadMY</h3>
          <p>#2702</p>
        </div>

        <div className="sidebar_profileIcons">
          <Tooltip title="Settings" placement="top">
            <Settings />
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default sidebar;
