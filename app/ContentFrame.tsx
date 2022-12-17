import { ReactNode, useState } from "react";
import Navbar from "./Navbar";

export default function ContentFrame({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDark() {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("isDark", JSON.stringify(!isDarkMode));
  }

  let hasLocalThemeSetting = localStorage.getItem("isDark");
  if (hasLocalThemeSetting) {
    setIsDarkMode(JSON.parse(hasLocalThemeSetting));
  } else {
    setIsDarkMode(false);
  }
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Navbar toggleDark={toggleDark} />
      {children}
    </div>
  );
}
