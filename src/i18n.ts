let currentLang = "en"
let currentTranslations = {}

export async function loadLanguage(lang) {
  try {
    const data = await import(`./lang/${lang}.json`)
    currentLang = lang
    currentTranslations = data.default

    localStorage.setItem("lang", lang)
    window.dispatchEvent(new Event("language-changed"))
    return currentTranslations
  } catch (e) {
    const fallback = await import("./lang/en.json")
    currentLang = "en"
    currentTranslations = fallback.default

    localStorage.setItem("lang", "en")
    window.dispatchEvent(new Event("language-changed"))
    return currentTranslations
  }
}

export async function getInitialLanguage() {
  const saved = localStorage.getItem("lang")
  return saved || "en"
}

export function t(key) {
  return currentTranslations[key] || key
}
