import React from "react";
import { StyleSheet, css } from "aphrodite";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from './NotificationItemShape';


const styles = StyleSheet.create({
  notifications: {
    padding: "15px",
    border: "2px dashed #e11d3f",
    margin: "50px 20px 20px 0",
    fontFamily: "Times New Roman, Times, serif",
    width: "35%",
    float: "right",
    fontSize: "1.1rem",
  },

  menuItem: {
    position: "absolute",
    right: "30px",
    top: "0",
    fontSize: "1.2rem",
    fontFamily: "Times New Roman, Times, serif",
  },
});

function close() {
  console.log("Close button has been clicked");
}


class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length || nextProps.displayDrawer !== this.props.displayDrawer;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications = [] } = this.props;
    return (
      <>
        <div className={css(styles.menuItem)} data-test="menuItem">
          <p>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className={css(styles.notifications)} data-test="notifications">
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
                listNotifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                    markAsRead={this.markAsRead}
                    id={notification.id}
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
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;