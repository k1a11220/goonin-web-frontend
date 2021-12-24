import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ToggleContainer = styled.span``;

const ThemeToggle = () => {
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    document.body.className = activeTheme;
    window.localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);
  return (
    <ToggleContainer activeTheme={activeTheme}>
      {/* <button
    //   aria-label={`Change to ${inactiveTheme} mode`}
    //   title={`Change to ${inactiveTheme} mode`}
    //   type="button"
    //   onClick={() => setActiveTheme(inactiveTheme)}
    // >
    //   <span>Toggle</span>
    // </button> */}
    </ToggleContainer>
  );
};

export default ThemeToggle;
