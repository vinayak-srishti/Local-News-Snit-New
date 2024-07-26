import React, { useState } from 'react';

const HomePage = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    if (!isLoggedin) {
      setShowLoginPopup(true);
    }
  };

  const handleLogin = () => {
    // Basic example: Check if the username and password are correct
    if (username === 'example' && password === 'password') {
      // Set isLoggedin to true if login is successful
      setIsLoggedin(true);
      // Close the login popup
      setShowLoginPopup(false);
    } else {
      // Display an error message or handle unsuccessful login
      alert('Incorrect username or password');
    }
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={handleLoginClick}>Login</button>

      {showLoginPopup && !isLoggedin && (
        <div className="login-popup">
          <h2>Login</h2>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button onClick={handleLogin}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
