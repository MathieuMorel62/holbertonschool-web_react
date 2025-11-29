import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type = 'default', html, value }) {
  // Suppression de la variable 'const styles = ...'

  if (html) {
    return (
      <li
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        // Correction ici : définition directe de l'objet style
        style={{ color: type === 'urgent' ? 'red' : 'blue' }}
      />
    );
  }

  return (
    <li
      data-notification-type={type}
      // Correction ici : définition directe de l'objet style
      style={{ color: type === 'urgent' ? 'red' : 'blue' }}
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
  type: 'default'
};

export default NotificationItem;