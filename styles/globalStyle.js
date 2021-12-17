import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        font-size: 100%;
        --font-medium: 400;
        --width: 600px;

        @media (max-width: 800px) {
            
        }
    }

    body.light{
        --color: #cccfd4;
        --text-color: #717989;
        --main-color: #2A364E;
        --highlight-color: #4191FD;
        --sub-color: #E7E9EB;
        --bg-color: #ffffff;
        --card-color: #F8F8F8;
    }

    body.dark{
        --color: #1d1d1d
    }

    html, body, #__next {
    min-height: 100vh;
    position: relative;
    background-color: var(--bg-color);
  }
`;

export default GlobalStyle;
