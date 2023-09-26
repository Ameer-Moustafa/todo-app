import { useEffect, useState } from "react";

export default function Header() {
  const darkMode = JSON.parse(localStorage.getItem("darkMode")) || false;
  const [isDark, setIsDark] = useState(darkMode);
  const application = document.querySelector("body");

  if (isDark) {
    application.setAttribute("data-theme", "dark");
  } else {
    application.setAttribute("data-theme", "light");
  }

  useEffect(
    () => localStorage.setItem("darkMode", JSON.stringify(isDark)),
    [isDark]
  );

  return (
    <header>
      <h1>TODO</h1>
      <img
        className="mode-icon"
        src={isDark ? "src/assets/sun.svg" : "src/assets/moon.svg"}
        alt={isDark ? "The sun" : "The moon"}
        onClick={() => setIsDark(!isDark)}
      />
    </header>
  );
}
