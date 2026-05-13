import React, { useState } from 'react';

export default function ReportForm({ selectedType, addReport }) {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = () => {
    const timestamp = new Date().toISOString();

    const newReport = {
      type: selectedType,
      description,
      location,
      timestamp
    };

    addReport(newReport); // 🔥 ΕΝΗΜΕΡΩΝΕΙ ΤΟ STATE ΣΤΟ APP

    setDescription('');
    setLocation('');
    alert('✅ Καταγγελία καταχωρήθηκε!');
  };

  if (!selectedType) return null;

  return (
    <div style={{ marginBottom: '20px' }}>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Περιγραφή περιστατικού..."
        style={{ width: '80%', height: '100px', padding: '10px', fontSize: '16px' }}
      />
      <br />
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Τοποθεσία περιστατικού..."
        style={{ width: '80%', padding: '10px', fontSize: '16px', marginTop: '10px' }}
      />
      <br />
      <button
        onClick={handleSubmit}
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
        Υποβολή Καταγγελίας
      </button>
    </div>
  );
}
