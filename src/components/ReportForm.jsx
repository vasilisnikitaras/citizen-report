import React, { useState } from 'react';

export default function ReportForm({ selectedType }) {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = () => {
    const reports = JSON.parse(localStorage.getItem('reports') || '[]');
    const timestamp = new Date().toISOString();

    reports.push({
      type: selectedType,
      description,
      location,
      timestamp
    });

    localStorage.setItem('reports', JSON.stringify(reports));
    window.dispatchEvent(new Event('report-submitted'));
    setDescription('');
    setLocation('');

  /*
    alert('✅ Καταγγελία καταχωρήθηκε!');
*/
    // 🔄 Κάνει refresh τη σελίδα
 /*   window.location.reload();   */


alert('✅ Καταγγελία καταχωρήθηκε!');

{/*  
setTimeout(() => {
  window.location.reload();
}, 100); // μικρή καθυστέρηση για να κλείσει το alert
*/}
setTimeout(() => {
  window.location.href = window.location.href;
}, 100);

  
  
  };



  

if (!selectedType) return null;

return (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      handleSubmit();
    }}
    style={{ marginBottom: '20px' }}
  >
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
      type="submit"
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
  </form>
);



}
=======
import React, { useState } from 'react';

export default function ReportForm({ selectedType }) {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = () => {
    const reports = JSON.parse(localStorage.getItem('reports') || '[]');
    const timestamp = new Date().toISOString();

    reports.push({
      type: selectedType,
      description,
      location,
      timestamp
    });

    localStorage.setItem('reports', JSON.stringify(reports));
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

