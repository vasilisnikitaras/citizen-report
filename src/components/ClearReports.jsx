import React from "react"
import { t } from "../i18n"

export default function ClearReports() {
  const handleClear = () => {
    const confirmDelete = window.confirm(t("confirmClearReports"))
    if (!confirmDelete) return

    localStorage.removeItem("reports")

    // ενημερώνει το UI χωρίς refresh
    window.dispatchEvent(new Event("reports-cleared"))

    alert(t("allReportsCleared"))
  }

  return (
    <button
      onClick={handleClear}
      style={{
        marginTop: "20px",
        backgroundColor: "#C2272D",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "6px",
        cursor: "pointer"
      }}
    >
      🧹 {t("clearAllReports")}
    </button>
  )
}
