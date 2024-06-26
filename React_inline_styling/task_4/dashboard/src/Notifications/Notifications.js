import React from "react";
import { StyleSheet, css } from "aphrodite";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";


const close = () => {
  console.log("Close button has been clicked");
};

const opacityFrames = {
    'from': {
        opacity: 0.5,
    },
    'to': {
        opacity: 1,
    }
};

const bounceFrames = {
    '0%': {
        transform: 'translateY(0px)',
    },
    '100%': {
        transform: 'translateY(5px)',
    }
};

const styles = StyleSheet.create({
  notifications: {
    padding: "15px",
    border: "2px dashed #e11d3f",
    fontFamily: "Times New Roman, Times, serif",
    width: "35%",
    float: "right",
    fontSize: "20px",
    backgroundColor: "#fff8f8",
    "@media (max-width: 900px)": {
      width: "100%",
      height: "100vh",
      position: "fixed",
      zIndex: 1,
      top: 0,
      left: 0,
      backgroundColor: "white",
      margin: 0,
      padding: 0,
      border: "none",
    },
  },

  menuItem: {
    position: "absolute",
    right: 30,
    top: 0,
    fontSize: "20px",
    fontFamily: "Times New Roman, Times, serif",
    cursor: "pointer",
    ":hover": {
      animationName: [opacityFrames, bounceFrames],
      animationDuration: ["0.2s", "0.2s"],
      animationIterationCount: [3, 6],
      animationDirection: "alternate",
    },
  },

  menuItemActive: {
    animationName: [opacityFrames, bounceFrames],
    animationDuration: ["0.2s", "0.2s"],
    animationIterationCount: [3, 6],
    animationDirection: "alternate",
  },

  notificationList: {
    padding: 0,
    marginLeft: 10,
    "@media (max-width: 900px)": {
      marginLeft: 0,
    }
  },

  notificationListItem: {
    fontSize: "20px",

  },
});

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
    const menuItemClass = listNotifications.length > this.props.listNotifications.length 
                          ? css(styles.menuItem, styles.menuItemActive)
                          : css(styles.menuItem);
    
    return (
      <>
        {!displayDrawer && (
          <div className={menuItemClass} data-test="menuItem">
            <p>Your notifications</p>
          </div>
        )}
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
            <p className={css(styles.notificationListItem)}>Here is the list of notifications</p>
            <ul className={css(styles.notificationList)}>
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
