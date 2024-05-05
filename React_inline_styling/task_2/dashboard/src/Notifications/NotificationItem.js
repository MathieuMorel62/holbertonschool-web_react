import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  default: {
    color: "blue",
  },

  urgent: {
    color: "red",
  },
});

function NotificationItem({ type, html, value, markAsRead, id }) {
  const style = type === "urgent" ? styles.urgent : styles.default;
  return (
    <>
      <li className={css(style)} data-notification-type={type} onClick={() => markAsRead(id)}>
        {html ? (
          <span dangerouslySetInnerHTML={html} />
        ) : value}
      </li>
    </>
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
