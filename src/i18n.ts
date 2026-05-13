import en from "./lang/en.json";
import el from "./lang/el.json";
import fr from "./lang/fr.json";

const translations: Record<string, any> = { en, el, fr };

// GEO-IP LANGUAGE DETECTION
export async function detectGeoLanguage(): Promise<string> {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();

    const country = data.country_code as string;

    const countryToLang: Record<string, string> = {
      GR: "el",
      CA: "fr",
      FR: "fr",
      US: "en",
      GB: "en",
      ES: "es",
      DE: "de",
      IT: "it",
      PT: "pt",
      RO: "ro",
      TR: "tr",
      SA: "ar"
    };

    return countryToLang[country] || "en";
  } catch {
    return "en";
  }
}

export async function getInitialLanguage(): Promise<string> {
  const saved = localStorage.getItem("lang");
  if (saved && translations[saved]) return saved;

  const geoLang = await detectGeoLanguage();
  if (translations[geoLang]) return geoLang;

  const browserLang = navigator.language.split("-")[0];
  if (translations[browserLang]) return browserLang;

  return "en";
}

export function getTranslations(lang: string) {
  return translations[lang] || translations["en"];
}
