import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value }) {
  // Cas 1 : Type 'default' -> couleur bleue
  if (type === 'default') {
    return (
      <li 
        data-notification-type="default" 
        style={{ color: 'blue' }}
      >
        {value}
      </li>
    );
  }

  // Cas 2 : HTML fourni -> couleur rouge (urgent implicite ou explicite)
  if (html) {
    return (
      <li 
        data-notification-type="urgent" 
        dangerouslySetInnerHTML={html}
        style={{ color: 'red' }}
      />
    );
  }

  // Cas 3 : Type 'urgent' (ou autre) sans HTML -> couleur rouge
  return (
    <li 
      data-notification-type="urgent" 
      style={{ color: 'red' }}
    >
      {value}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  value: PropTypes.string
};

NotificationItem.defaultProps = {
  type: 'default',
};

export default NotificationItem;