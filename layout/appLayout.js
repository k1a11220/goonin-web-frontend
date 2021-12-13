import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import ThemeContext from "../store/themeContext";
import GlobalStyle from "../styles/globalStyle";
import styledTheme from "../styles/theme";
import dynamic from "next/dynamic";
import client from "../api/apollo";
import { ApolloProvider } from "@apollo/client";
import { Container } from "../styles/styles";

const ThemeToggle = dynamic(() => import("../components/themeToggle"), {
  ssr: false,
});

const AppLayout = ({ children }) => {
  const [theme, setTheme] = useState(null);
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={styledTheme}>
        <ThemeContext.Provider value={theme}>
          <GlobalStyle />
          <ThemeToggle />
          <Container>{children}</Container>
        </ThemeContext.Provider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default AppLayout;
