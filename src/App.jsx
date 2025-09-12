import { useState } from 'react';
import ReportTypeSelector from './components/ReportTypeSelector.jsx';
import ReportForm from './components/ReportForm.jsx';
import ReportList from './components/ReportList.jsx';
import Login from './components/login.jsx';
import StatsDashboard from './components/StatsDashboard.jsx';
import ClearReports from './components/ClearReports.jsx'; // 👈 Εδώ το βάζεις
import ExportCSV from './components/ExportCSV.jsx';


function App() {
  const [selectedType, setSelectedType] = useState('');
  const [user, setUser] = useState(localStorage.getItem('user') || '');
  const [darkMode, setDarkMode] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser('');
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const themeStyles = {
    backgroundColor: darkMode ? '#000' : '#f4f4f4',
    color: darkMode ? '#fff' : '#222'
  };

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px', ...themeStyles }}>
      <h1 style={{ color: '#CC7722' }}>Citizen Report</h1>
      <p>👤 Συνδεδεμένος ως: <strong>{user}</strong></p>

      <button
        onClick={handleLogout}
        style={{
          marginBottom: '10px',
          backgroundColor: '#C2272D',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '6px',
          cursor: 'pointer',
          marginRight: '10px'
        }}
      >
        🔓 Αποσύνδεση
      </button>

      <button
        onClick={toggleTheme}
        style={{
          marginBottom: '20px',
          backgroundColor: '#666',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        {darkMode ? '🌞 Φωτεινό Θέμα' : '🌙 Σκοτεινό Θέμα'}
      </button>

      <ReportTypeSelector selectedType={selectedType} setSelectedType={setSelectedType} />
      <ReportForm selectedType={selectedType} />
      <ReportList />
      <StatsDashboard />
<ClearReports />
<ExportCSV />

    </div>
  );
}

export default App;
