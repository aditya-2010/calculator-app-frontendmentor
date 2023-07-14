import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("dark");

  useEffect(
    function () {
      document.documentElement.setAttribute("color-scheme", theme);
    },
    [theme]
  );

  function handleChange(e) {
    setTheme(e.target.value);
  }

  return (
    <div className="theme-switcher" aria-label="theme switcher">
      <span className="theme">THEME</span>
      <div class="tw-toggle">
        <label htmlFor="dark">1</label>
        <input
          checked={theme === "dark"}
          type="radio"
          name="toggle"
          value="dark"
          id="dark"
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="light">2</label>
        <input
          checked={theme === "light"}
          type="radio"
          name="toggle"
          value="light"
          id="light"
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="violet">3</label>
        <input
          checked={theme === "violet"}
          type="radio"
          name="toggle"
          value="violet"
          id="violet"
          onChange={(e) => handleChange(e)}
        />

        <span></span>
      </div>
    </div>
  );
}
