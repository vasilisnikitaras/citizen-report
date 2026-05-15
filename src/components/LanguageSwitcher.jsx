import React, { useState, useEffect } from "react"
import { loadLanguage, getInitialLanguage } from "../i18n"

export default function LanguageSwitcher() {
  const [lang, setLang] = useState("en")

  useEffect(() => {
    getInitialLanguage().then((lng) => {
      setLang(lng)
      loadLanguage(lng)
    })
  }, [])

  const changeLang = (lng) => {
    setLang(lng)
    loadLanguage(lng)
  }

  return (
    <div style={{ marginBottom: "15px" }}>
      <select
        value={lang}
        onChange={(e) => changeLang(e.target.value)}
        style={{
          padding: "6px 10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          cursor: "pointer",
        }}
      >
        <option value="en">🇬🇧 English</option>
        <option value="el">🇬🇷 Ελληνικά</option>
        <option value="fr">🇫🇷 Français</option>
        <option value="es">🇪🇸 Español</option>
        <option value="ru">🇷🇺 Русский</option>
        <option value="zh">🇨🇳 中文</option>
        <option value="ar">🇸🇦 العربية</option>
        <option value="hi">🇮🇳 हिन्दी</option>
      </select>
    </div>
  )
}
