// ===============================
// EXPORT TXT
// ===============================
export function exportTXT(reports) {
  if (!reports || reports.length === 0) {
    alert("No reports to export!")
    return
  }

  let content = "Citizen Report Export\n\n"

  reports.forEach((r, index) => {
    content += `Report #${index + 1}\n`
    content += `Type: ${r.type}\n`
    content += `Description: ${r.description}\n`
    content += `Location: ${r.location}\n`
    content += `Timestamp: ${r.timestamp}\n`
    content += `User: ${r.user || "Unknown"}\n`
    content += `-----------------------------\n`
  })

  const blob = new Blob([content], { type: "text/plain" })
  const link = document.createElement("a")
  link.href = URL.createObjectURL(blob)
  link.download = "reports.txt"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}



// ===============================
// EXPORT JSON
// ===============================
export function exportJSON(reports) {
  if (!reports || reports.length === 0) {
    alert("No reports to export!")
    return
  }

  const dataStr =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(reports, null, 2))

  const link = document.createElement("a")
  link.setAttribute("href", dataStr)
  link.setAttribute("download", "reports.json")
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}



// ===============================
// EXPORT CSV
// ===============================
export function exportCSV(reports) {
  if (!reports || reports.length === 0) {
    alert("No reports to export!")
    return
  }

  const header = ["Type", "Description", "Location", "Timestamp", "User"]

  const rows = reports.map((r) => [
    r.type,
    r.description,
    r.location,
    r.timestamp,
    r.user || "Unknown"
  ])

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
