import React from "react";
import GlobalStyle from "../styles/globalStyle";
import BottomTabNav from "./navigation/BottomTabNav";

const AppLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
      <BottomTabNav />
    </>
  );
};

export default AppLayout;
