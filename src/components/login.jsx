import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username.trim()) {
      localStorage.setItem('user', username);
      onLogin(username);
    }
  };

  return (
    <div style={{ marginTop: '100px' }}>
      <h2 style={{ color: '#CC7722' }}>🔐 Σύνδεση Χρήστη</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Όνομα χρήστη"
        style={{ padding: '10px', fontSize: '16px' }}
      />
      <br />
      <button
        onClick={handleLogin}
        style={{
          marginTop: '10px',
          backgroundColor: '#CC7722',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        Σύνδεση
      </button>
    </div>
  );
}
