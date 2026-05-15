import LanguageSwitcher from "./components/LanguageSwitcher.jsx";
import ReportTypeSelector from "./components/ReportTypeSelector"
import ReportForm from "./components/ReportForm"
import ReportList from "./components/ReportList"
import StatsDashboard from "./components/StatsDashboard"
import ClearReports from "./components/ClearReports"
import ExportCSV from "./components/ExportCSV"
import { useState } from "react"

export default function ReportApp({ lang, t, onChangeLang, user, onLogout }) {
  const [selectedType, setSelectedType] = useState("")
  const [reports, setReports] = useState(
    JSON.parse(localStorage.getItem("reports") || "[]")
  )

  const addReport = (newReport) => {
    const updated = [...reports, newReport]
    setReports(updated)
    localStorage.setItem("reports", JSON.stringify(updated))
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <LanguageSwitcher lang={lang} onChange={onChangeLang} />

      <h1 style={{ color: "#CC7722" }}>{t.appTitle}</h1>

      <p>{t.loggedInAs}: <strong>{user}</strong></p>

      <button onClick={onLogout}>{t.logout}</button>

      <ReportTypeSelector
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        t={t}
      />

      <ReportForm selectedType={selectedType} addReport={addReport} t={t} />

      <ReportList reports={reports} t={t} />

      <StatsDashboard t={t} />

      <ClearReports t={t} />

      <ExportCSV t={t} />
    </div>
  )
}
