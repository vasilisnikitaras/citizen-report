<<<<<<< HEAD
import React from 'react';

export default function ExportCSV() {
  const handleExport = () => {
    const reports = JSON.parse(localStorage.getItem('reports') || '[]');
    if (reports.length === 0) {
      alert('Δεν υπάρχουν καταγγελίες για εξαγωγή.');
      return;
    }

    const headers = ['Τύπος', 'Περιγραφή', 'Ημερομηνία'];
    const rows = reports.map(r => [r.type, r.description, new Date(r.timestamp).toLocaleString('el-GR')]);
    
    const csvContent = [headers, ...rows]
      .map(row => row.map(cell => `"${cell}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'kataggelies.csv';
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleExport}
      style={{
        marginTop: '10px',
        backgroundColor: '#1E90FF',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '6px',
        cursor: 'pointer'
      }}
    >
      📤 Εξαγωγή σε CSV
    </button>
  );
}
=======
import React from 'react';

export default function ExportCSV() {
  const handleExport = () => {
    const reports = JSON.parse(localStorage.getItem('reports') || '[]');
    if (reports.length === 0) {
      alert('Δεν υπάρχουν καταγγελίες για εξαγωγή.');
      return;
    }

    const headers = ['Τύπος', 'Περιγραφή', 'Ημερομηνία'];
    const rows = reports.map(r => [r.type, r.description, new Date(r.timestamp).toLocaleString('el-GR')]);
    
    const csvContent = [headers, ...rows]
      .map(row => row.map(cell => `"${cell}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'kataggelies.csv';
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleExport}
      style={{
        marginTop: '10px',
        backgroundColor: '#1E90FF',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '6px',
        cursor: 'pointer'
      }}
    >
      📤 Εξαγωγή σε CSV
    </button>
  );
}
>>>>>>> 8135780e4c12dfc8c0c7b35c0dbdec0126292066
