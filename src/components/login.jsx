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
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f0f0f0'
      }}
    >
      <div
        style={{
          background: 'white',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          width: '320px',
          textAlign: 'center'
        }}
      >
        {/* LOGO */}
        <div
          style={{
            width: '80px',
            height: '80px',
            background: '#CC7722',
            borderRadius: '50%',
            margin: '0 auto 20px auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: '32px',
            fontWeight: 'bold'
          }}
        >
          CR
        </div>

        <h2 style={{ color: '#CC7722', marginBottom: '20px' }}>
          🔐 Σύνδεση Χρήστη
        </h2>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Όνομα χρήστη"
          style={{
            width: '100%',
            padding: '12px',
            fontSize: '16px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            marginBottom: '15px'
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#CC7722',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Σύνδεση
        </button>
      </div>
    </div>
  );
}
