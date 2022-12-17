"use client";

import "./globals.css";
import { ReactNode, useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDark() {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("isDark", JSON.stringify(!isDarkMode));
  }

  useEffect(() => {
    const userTheme = JSON.parse(localStorage.getItem("isDark") ?? "false");
    setIsDarkMode(userTheme);
  }, []);

  return (
    <html>
      <head>
        <title>Vincent Haryadi</title>
        <meta
          name="description"
          content="Personal website of Vincent Haryadi"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" href="./favicon.ico" />
      </head>
      <body className={isDarkMode ? "dark" : ""}>
        <Navbar toggleDark={toggleDark} />
        {children}
      </body>
    </html>
  );
}
