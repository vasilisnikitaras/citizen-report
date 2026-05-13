import { useEffect, useState } from "react";
import { getInitialLanguage, getTranslations } from "./i18n";

function App() {
  const [lang, setLang] = useState<string>("en");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function init() {
      const detected = await getInitialLanguage();
      setLang(detected);
      setLoading(false);
    }
    init();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const t = getTranslations(lang);

  const changeLang = (newLang: string) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <div style={{ padding: 20 }}>
      {/* Language Switcher */}
      <div style={{ marginBottom: 20 }}>
        <button onClick={() => changeLang("el")}>🇬🇷</button>
        <button onClick={() => changeLang("en")}>🇬🇧</button>
        <button onClick={() => changeLang("fr")}>🇫🇷</button>
      </div>

      {/* Login UI */}
      <h1>{t.loginTitle}</h1>
      <input placeholder={t.username} />
      <button>{t.loginButton}</button>
    </div>
  );
}

export default App;
