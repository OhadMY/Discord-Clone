import React from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SidebarChannel from "./SidebarChannel";

function sidebar() {
  return (
    <div className="sidebar">
      <h1>Sidebar</h1>
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

          <AddIcon className="sidebar_addChannel"></AddIcon>
        </div>

        <div className="sidebar_channelsList">
          <SidebarChannel />
          <SidebarChannel />
        </div>
      </div>
    </div>
  );
}

export default sidebar;
