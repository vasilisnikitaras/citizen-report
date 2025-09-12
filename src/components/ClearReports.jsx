import React from 'react';

export default function ClearReports() {
  const handleClear = () => {
    localStorage.removeItem('reports');
    window.location.reload();
  };

  return (
    <button
      onClick={handleClear}
      style={{
        marginTop: '20px',
        backgroundColor: '#C2272D',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '6px',
        cursor: 'pointer'
      }}
    >
      🧹 Καθαρισμός Όλων των Καταγγελιών
    </button>
  );
}
