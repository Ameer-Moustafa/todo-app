import { useEffect, useState } from "react";

export default function Header() {
  // variable to load preference from localstorage if available
  const darkMode = JSON.parse(localStorage.getItem("darkMode")) || false;
  // A state variable to keep track of whether the application is in light or dark mode
  const [isDark, setIsDark] = useState(darkMode);

  // Variable to select our application body for styling
  const application = document.querySelector("body");

  // Logic to apply different styles depending on preference
  if (isDark) {
    application.setAttribute("data-theme", "dark");
  } else {
    application.setAttribute("data-theme", "light");
  }

  // useEffect to save preference to localStorage when our state variable is changed
  useEffect(
    () => localStorage.setItem("darkMode", JSON.stringify(isDark)),
    [isDark]
  );

  return (
    <header>
      <h1>TODO</h1>
      <img
        className="mode-icon"
        src={isDark ? "/sun.svg" : "/moon.svg"}
        alt={isDark ? "The sun" : "The moon"}
        onClick={() => setIsDark(!isDark)}
      />
    </header>
  );
}
