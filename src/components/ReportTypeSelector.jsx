import React from "react"
import { t } from "../i18n"

export default function ReportTypeSelector({ selectedType, setSelectedType }) {
  const types = [
    { emoji: "🚗", key: "dangerousDriving" },
    { emoji: "🅿️", key: "illegalParking" },
    { emoji: "🧍", key: "violenceHarassment" },
    { emoji: "🏢", key: "corruptionPublicService" }
  ]

  return (
    <div style={{ marginBottom: "20px" }}>
      <p style={{ fontSize: "18px" }}>{t("selectReportType")}</p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        {types.map(({ emoji, key }) => (
          <button
            key={key}
            onClick={() => setSelectedType(t(key))}
            style={{
              backgroundColor: selectedType === t(key) ? "#CC7722" : "#333",
              color: "white",
              border: "none",
              padding: "12px 18px",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
              minWidth: "200px",
            }}
          >
            {emoji} {t(key)}
          </button>
        ))}
      </div>

      {selectedType && (
        <button
          onClick={() => setSelectedType("")}
          style={{
            marginTop: "15px",
            backgroundColor: "#666",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          ❌ {t("clearSelection")}
        </button>
      )}
    </div>
  )
}
