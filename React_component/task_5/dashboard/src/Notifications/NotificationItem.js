import React from "react";
import PropTypes from "prop-types";
import "./Notifications.css";


function NotificationItem({ type, html, value, markAsRead, id }) {
  return (
    <li data-notification-type={type} onClick={() => markAsRead(id)}>
      {html ? (
        <span dangerouslySetInnerHTML={html} />
      ) : value}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  markAsRead: () => {}
};

export default React.memo(NotificationItem);

