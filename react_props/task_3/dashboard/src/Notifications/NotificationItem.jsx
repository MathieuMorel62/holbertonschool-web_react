import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value }) {
  // Cas 1 : Notification par défaut (BLEU)
  if (type === 'default') {
    // Si on a du HTML (optionnel, mais pour être sûr)
    if (html) {
      return (
        <li
          data-notification-type="default"
          dangerouslySetInnerHTML={html}
          style={{ color: 'blue' }}
        />
      );
    }
    // Cas classique
    return (
      <li
        data-notification-type="default"
        style={{ color: 'blue' }}
      >
        {value}
      </li>
    );
  }

  // Cas 2 : Notification urgente (ROUGE) - Tous les autres types tombent ici si ce n'est pas 'default'
  if (html) {
    return (
      <li
        data-notification-type="urgent"
        dangerouslySetInnerHTML={html}
        style={{ color: 'red' }}
      />
    );
  }

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
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  type: 'default',
};

export default NotificationItem;