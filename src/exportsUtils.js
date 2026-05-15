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
