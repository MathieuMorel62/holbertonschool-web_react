import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value }) {
  // On gère le cas "default"
  if (type === 'default') {
    return (
      <li 
        data-notification-type={type} 
        style={{ color: 'blue' }}
      >
        {value}
      </li>
    );
  }

  // On gère le cas "urgent" avec HTML
  if (html) {
    return (
      <li 
        data-notification-type={type} 
        dangerouslySetInnerHTML={html} 
        style={{ color: 'red' }}
      />
    );
  }

  // Tous les autres cas (urgent sans html, etc)
  return (
    <li 
      data-notification-type={type} 
      style={{ color: 'red' }}
    >
      {value}
    </li>
  );
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};

// C'EST ICI QUE SE JOUE LA VALIDATION :
NotificationItem.defaultProps = {
  type: 'default', // Par défaut, on force le type à 'default' (bleu)
};

export default NotificationItem;