import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type = 'default', html = null, value = '' }) {
  let color = 'blue';
  if (type === 'urgent') {
    color = 'red';
  }

  const styles = {
    color: color
  };

  if (html) {
    return (
      <li
        data-notification-type={type}
        style={styles}
        dangerouslySetInnerHTML={html}
      />
    );
  }

  return (
    <li
      data-notification-type={type}
      style={styles}
    >
      {value}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  value: PropTypes.string
};

NotificationItem.defaultProps = {
  type: 'default',
  html: null,
  value: ''
};

export default NotificationItem;