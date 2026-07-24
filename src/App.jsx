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
    setNotifications();
  };

}

export default App;