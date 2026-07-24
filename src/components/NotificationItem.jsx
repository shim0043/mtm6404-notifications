import React from 'react';

// display all notification data and individual clear button
function NotificationItem({ id, name, message, onClear }) {
    return (
        <div className="notification-item d-flex p-3 align-items-center justify-content-between">
            <div>
                <h3 className="notification-name">{name}</h3>
                <p className="notification-message">{message}</p>
                <small className="read-the-docs">ID: {id}</small>
            </div>
        </div>
    );
}

export default NotificationItem;