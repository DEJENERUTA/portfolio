/* import React, { useState, useEffect } from "react";
 import { MdDarkMode } from "react-icons/md"; 
import { createContext } from "react";
import ReactSwitch from "react-switch";
export const ThemeContext = createContext(null);
const LightmodeDarkmode = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div className="switch">
          <form> {theme === "light" ? "Light Mode" : "Dark Mode"}</form>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};
 const [theme, setTheme] = useState("dark");
  const [icon, setIcon] = useState(<MdDarkMode />);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setIcon(<MdDarkMode />);
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setTheme("light");
      setIcon(<MdDarkMode />);
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="theme">
      <button onClick={toggleTheme}>{icon}</button>
    </div>
  );
}; 

export default LightmodeDarkmode;
 */
