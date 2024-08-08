import React, { useState } from 'react';

function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);

  const handleRefresh = () => {
    // Fetch and display notifications
    setNotifications(['Notification 1', 'Notification 2']);
  };

  return (
    <div>
      <h1>Notifications</h1>
      <button className="button" onClick={handleRefresh}>Refresh Notifications</button>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
    </div>
  );
}

export default NotificationsPage;
