import React, { useEffect, useState } from "react";
import RadioBtn from "./more/radioBtn";

const ThemeToggle = () => {
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    document.body.className = activeTheme;
    window.localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);
  return (
    <>
      <RadioBtn
        lable={"밝은 테마"}
        onClick={() => setActiveTheme("light")}
        isChecked={activeTheme === "light" ? true : false}
      />
      <RadioBtn
        lable={"어두운 테마"}
        onClick={() => setActiveTheme("dark")}
        isChecked={activeTheme === "dark" ? true : false}
      />
    </>
  );
};

export default ThemeToggle;
