
import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/notifications">Notifications</Link></li>
          <li><Link to="/create-post">Create Post</Link></li>
        </ul>
      </nav>

      <div className="posts-list">
        {/* Display posts here */}
      </div>
    </div>
  );
}

export default LandingPage;
