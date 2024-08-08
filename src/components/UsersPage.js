
import React, { useState } from 'react';

function UsersPage() {
  const [selectedUser, setSelectedUser] = useState(null);
  const users = ['User1', 'User2', 'User3']; // Example users

  const handleUserClick = (user) => {
    setSelectedUser(user);
    // Fetch and display posts by the selected user
  };

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user} onClick={() => handleUserClick(user)}>
            {user}
          </li>
        ))}
      </ul>

      {selectedUser && (
        <div className="user-posts">
          <h2>Posts by {selectedUser}</h2>
          {/* Display posts by selected user */}
        </div>
      )}
    </div>
  );
}

export default UsersPage;
