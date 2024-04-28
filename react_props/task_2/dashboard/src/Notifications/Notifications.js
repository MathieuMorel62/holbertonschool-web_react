import React from "react";
import "./Notifications.css";
import NotificationItem from "./NotificationItem";
import closeIcon from "../assets/close-icon.png";

import { getLatestNotification } from "../utils/utils";

function Notifications() {
  return (
    <div className="Notifications">
      <button
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          border: "none",
          background: "transparent",
          cursor: "pointer",
        }}
        aria-label="Close"
        onClick={() => console.log("Close button has been clicked")}
      >
        <img
          src={closeIcon}
          alt="close button"
          style={{ width: "12px", height: "12px" }}
        />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={{ __html: getLatestNotification() }}></NotificationItem>
      </ul>
    </div>
  );
}

export default Notifications;
