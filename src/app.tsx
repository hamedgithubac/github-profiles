import React, { useEffect, useState } from "react";
import "./a.sass";

type Theme = "dark" | "light";

const App = () => {
  const [theme, setTheme] = useState<Theme>("light");
  useEffect(() => {
    function themeInitializer() {
      const theme = localStorage.getItem("theme") as Theme | undefined;
      if (theme === "dark") {
        setTheme("dark");
        applyTheme("dark");
      }
    }
    themeInitializer();
  }, []);
  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const handleThemeChange = () => {
    document.documentElement.getAttribute("data-theme") === "dark"
      ? setTheme("light")
      : setTheme("dark");
  };
  const applyTheme = (theme: Theme) => {
    document.documentElement.setAttribute("data-theme", theme);
  };
  return (
    <div className="container">
      <div className="header">
        <h2>GitHub Profiles</h2>
        <i onClick={handleThemeChange}>sd</i>
      </div>

      <div className="content">
        <h4>Enter a GitHub username, to see the magic.</h4>
        <div className="search-wrapper">
          <label htmlFor="username">GitHub username</label>
          <input id="username" placeholder="@username" />
        </div>
      </div>
    </div>
  );
};
export default App;
