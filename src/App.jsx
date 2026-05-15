import { useState, useEffect } from "react"
import { t, loadLanguage, getInitialLanguage } from "./i18n"
import LanguageSwitcher from "./components/LanguageSwitcher"

import ReportTypeSelector from "./components/ReportTypeSelector"
import ReportForm from "./components/ReportForm"
import ReportList from "./components/ReportList"
import Login from "./components/login"
import StatsDashboard from "./components/StatsDashboard"
import ClearReports from "./components/ClearReports"
import ExportCSV from "./components/ExportCSV"

function App() {
  const [selectedType, setSelectedType] = useState("")
  const [user, setUser] = useState(localStorage.getItem("user") || "")
  const [darkMode, setDarkMode] = useState(true)
  const [lang, setLang] = useState("en")

  const [reports, setReports] = useState(
    JSON.parse(localStorage.getItem("reports") || "[]")
  )

  // -------------------------
  // LOAD LANGUAGE ON START
  // -------------------------
  useEffect(() => {
    getInitialLanguage().then((lng) => {
      setLang(lng)
      loadLanguage(lng)
    })

    const handler = () => setLang(localStorage.getItem("lang") || "en")
    window.addEventListener("language-changed", handler)
    return () => window.removeEventListener("language-changed", handler)
  }, [])

  // -------------------------
  // REFRESH UI WHEN REPORTS ARE CLEARED
  // -------------------------
  useEffect(() => {
    const handler = () => {
      setReports([])
    }

    window.addEventListener("reports-cleared", handler)
    return () => window.removeEventListener("reports-cleared", handler)
  }, [])

  // -------------------------
  // ADD REPORT
  // -------------------------
  const addReport = (newReport) => {
    const updated = [...reports, newReport]
    setReports(updated)
    localStorage.setItem("reports", JSON.stringify(updated))
  }

  // -------------------------
  // LOGOUT
  // -------------------------
  const handleLogout = () => {
    localStorage.removeItem("user")
    setUser("")
  }

  // -------------------------
  // THEME TOGGLE
  // -------------------------
  const toggleTheme = () => setDarkMode(!darkMode)

  const themeStyles = {
    backgroundColor: darkMode ? "#000" : "#f4f4f4",
    color: darkMode ? "#fff" : "#222",
  }

  if (!user) return <Login onLogin={setUser} />

  return (
    <div style={{ textAlign: "center", padding: "20px", ...themeStyles }}>
      <LanguageSwitcher />

      <h1 style={{ color: "#CC7722" }}>Citizen Report</h1>

      <p>
        👤 {t("loggedInAs")}: <strong>{user}</strong>
      </p>

      <button
        onClick={handleLogout}
        style={{
          marginBottom: "10px",
          backgroundColor: "#C2272D",
          color: "white",
          border: "none",
          padding: "8px 16px",
          borderRadius: "6px",
          cursor: "pointer",
          marginRight: "10px",
        }}
      >
        🔓 {t("logout")}
      </button>

      <button
        onClick={toggleTheme}
        style={{
          marginBottom: "20px",
          backgroundColor: "#666",
          color: "white",
          border: "none",
          padding: "8px 16px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        {darkMode ? t("lightTheme") : t("darkTheme")}
      </button>

      <ReportTypeSelector
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <ReportForm selectedType={selectedType} addReport={addReport} />
      <ReportList reports={reports} />

      <StatsDashboard />
      <ClearReports />
      <ExportCSV />

      <footer
        style={{
          marginTop: "40px",
          fontSize: "14px",
          color: "var(--text-color)",
          textAlign: "center",
          lineHeight: "1.6",
        }}
      >
        © 2026 Citizen Report by Vasilis Nikitaras
        <br />
        Resale is strictly prohibited and punishable by law.
        <br />
        Contact: <strong>vasilis.nikitaras@gmail.com</strong>
      </footer>
    </div>
  )
}

export default App
