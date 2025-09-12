import React, { useEffect, useState } from 'react';

export default function ReportList() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('reports') || '[]');
    setReports(stored);
  }, []);

  if (reports.length === 0) return null;

  return (
    <div style={{ marginTop: '30px' }}>
      <h2 style={{ color: '#CC7722' }}>📋 Καταχωρημένες Καταγγελίες</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
  {reports.map((r, i) => (
    <li key={i} style={{ marginBottom: '10px' }}>
      <strong>{r.type}</strong>: {r.description}
      <br />
      <span style={{ fontSize: '14px', color: '#ccc' }}>
        📍 Τοποθεσία: {r.location}
      </span>
      <br />
      <span style={{ fontSize: '12px', color: '#aaa' }}>
        🕒 {new Date(r.timestamp).toLocaleString('el-GR')}
      </span>
    </li>
  ))}
</ul>
    </div>
  );
}
