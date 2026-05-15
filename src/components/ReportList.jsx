import React from "react"
import { t } from "../i18n"
import { exportTXT, exportJSON } from "../exportUtils"

export default function ReportList({ reports }) {
  if (!reports || reports.length === 0) return null

  return (
    <div style={{ marginTop: "30px" }}>
      <h2 style={{ color: "#CC7722" }}>📋 {t("registeredReports")}</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {reports.map((r, i) => (
          <li key={i} style={{ marginBottom: "15px" }}>
            <strong>{r.type}</strong>: {r.description}
            <br />

            <span style={{ fontSize: "14px", color: "#ccc" }}>
              📍 {t("location")}: {r.location}
            </span>
            <br />

            <span style={{ fontSize: "14px", color: "#ccc" }}>
              👤 {t("submittedBy")}: {r.user || "Unknown"}
            </span>
            <br />

            <span style={{ fontSize: "12px", color: "#aaa" }}>
              🕒 {new Date(r.timestamp).toLocaleString()}
            </span>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => exportTXT(reports)} style={{ marginRight: "10px" }}>
          📄 {t("exportTXT")}
        </button>
        <button onClick={() => exportJSON(reports)}>
          🧾 {t("exportJSON")}
        </button>
      </div>
    </div>
  )
}
