import { useState } from "react"

interface Props {
  lang: string
  onChange: (lang: string) => void
}

export default function LanguageSwitcher({ lang, onChange }: Props) {
  const [open, setOpen] = useState(false)

  const languages = [
    { code: "el", label: "🇬🇷 Ελληνικά" },
    { code: "en", label: "🇬🇧 English" },
    { code: "fr", label: "🇫🇷 Français" }
  ]

  return (
    <div style={{ position: "absolute", top: 20, right: 20 }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          padding: "8px 12px",
          borderRadius: 8,
          background: "#ff8c00",
          color: "white",
          border: "none",
          fontSize: 16
        }}
      >
        🌐 {lang.toUpperCase()}
      </button>

      {open && (
        <div
          style={{
            marginTop: 8,
            background: "white",
            borderRadius: 8,
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            padding: 10
          }}
        >
          {languages.map((l) => (
            <div
              key={l.code}
              onClick={() => {
                onChange(l.code)
                setOpen(false)
              }}
              style={{
                padding: "6px 10px",
                cursor: "pointer",
                fontSize: 16
              }}
            >
              {l.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
