<<<<<<< HEAD
import React, { useEffect, useState } from 'react';

export default function StatsDashboard() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    const reports = JSON.parse(localStorage.getItem('reports') || '[]');
    const counts = reports.reduce((acc, r) => {
      acc[r.type] = (acc[r.type] || 0) + 1;
      return acc;
    }, {});
    setStats(counts);
  }, []);

  return (
    <div style={{ marginTop: '30px' }}>
      <h2 style={{ color: '#CC7722' }}>📊 Στατιστικά Καταγγελιών</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {Object.entries(stats).map(([type, count]) => (
          <li key={type} style={{ marginBottom: '10px' }}>
            <strong>{type}:</strong> {count} καταγγελίες
          </li>
        ))}
      </ul>
    </div>
  );
}
=======
import React, { useEffect, useState } from 'react';

export default function StatsDashboard() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    const reports = JSON.parse(localStorage.getItem('reports') || '[]');
    const counts = reports.reduce((acc, r) => {
      acc[r.type] = (acc[r.type] || 0) + 1;
      return acc;
    }, {});
    setStats(counts);
  }, []);

  return (
    <div style={{ marginTop: '30px' }}>
      <h2 style={{ color: '#CC7722' }}>📊 Στατιστικά Καταγγελιών</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {Object.entries(stats).map(([type, count]) => (
          <li key={type} style={{ marginBottom: '10px' }}>
            <strong>{type}:</strong> {count} καταγγελίες
          </li>
        ))}
      </ul>
    </div>
  );
}
>>>>>>> 8135780e4c12dfc8c0c7b35c0dbdec0126292066
