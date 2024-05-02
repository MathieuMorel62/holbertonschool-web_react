import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from './NotificationItemShape';


function close() {
  console.log("Close button has been clicked");
}


function Notifications({ displayDrawer, listNotifications = [] }) {
  return (
    <>
      <div className="menuItem">
        <p>Your notifications</p>
      </div>
      {displayDrawer && (
        <div className="Notifications">
          <button
            style={{
              float: "right",
              top: "20px",
              right: "20px",
              border: "none",
              background: "transparent",
              cursor: "pointer",
            }}
            aria-label="Close"
            onClick={close}
          >
            <img
              src={closeIcon}
              alt="close button"
              style={{ width: "12px", height: "12px" }}
            />
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            {listNotifications.length > 0 ? (
              listNotifications.map(notification => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                />
              ))
            ) : (
              <li>No new notification for now</li>
            )}
          </ul>
        </div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

export default Notifications;
