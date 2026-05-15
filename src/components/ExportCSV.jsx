import React from "react"
import { t } from "../i18n"

export default function ExportCSV() {
  const handleExport = () => {
    const reports = JSON.parse(localStorage.getItem("reports") || "[]")

    if (reports.length === 0) {
      alert(t("noReportsToExport"))
      return
    }

    // CSV HEADER
    const header = ["Type", "Description", "Location", "Timestamp", "User"]

    // CSV ROWS
    const rows = reports.map((r) => [
      r.type,
      r.description,
      r.location,
      r.timestamp,
      r.user || "Unknown"
    ])

    // JOIN CSV
    const csvContent =
      "data:text/csv;charset=utf-8," +
      [header.join(","), ...rows.map((row) => row.join(","))].join("\n")

    const encodedUri = encodeURI(csvContent)
    const link = document.createElement("a")
    link.setAttribute("href", encodedUri)
    link.setAttribute("download", "reports.csv")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <button
      onClick={handleExport}
      style={{
        marginTop: "10px",
        backgroundColor: "#CC7722",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "6px",
        cursor: "pointer"
      }}
    >
      📄 {t("exportCSV")}
    </button>
  )
}
