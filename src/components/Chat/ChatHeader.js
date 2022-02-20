import React from "react";
import "./ChatHeader.css";

function ChatHeader() {
  return (
    <div className="chatHeader">
      <h3>Header Text</h3>
      <div className="chatHeader_left">
        <h3>
          <span className="chatHeader_hash">#</span>Test Channel Name
        </h3>
      </div>

      <div className="chatHeader_right"></div>
    </div>
  );
}

export default ChatHeader;
