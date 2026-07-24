import React from 'react';

// display an all clear button and render child elements from App.jsx
function NotificationWrapper({ count, onClearAll, children }) {
    return (
        <div className="card p-3">
            <h2>Notifications ({count})</h2>

            {count > 0 && (
                <button
                className="clear-all-btn mb-3"
                onClick={onClearAll}
                >Clear All</button>
            )}
        </div>
    );
}

export default NotificationWrapper;