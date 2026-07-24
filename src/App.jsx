import { useState } from 'react';
import notificationsData from './notifications';
import NotificationWrapper from './components/NotificationWrapper';
import NotificationItem from './components/NotificationItem';
import './App.css';

function App() {
  const [notifications, setNotifications] = useState(notificationsData);

  const clearIndividual = (id) => {
    const updated = notifications.filter((item) => item.id !== id);
    setNotifications(updated); 
  };

  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <div className="notifications-wrapper">
      <NotificationWrapper 
        count={notifications.length} 
        onClearAll={clearAll}
      >

        {notifications.length === 0 ? (
          <p className="text-muted text-center">You have no notifications.</p>
        ) : (
          <div className="notification-info">
            {notifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                id={notification.id}
                name={notification.name}
                message={notification.message}
                onClear={clearIndividual}
              />
            ))}
          </div>
        )}
      </NotificationWrapper>
    </div>
  );
}

export default App;