import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        font-size: 100%;
        --width: 800px;

        @media (max-width: 800px) {
            
        }
    }

    body.light{

    }

    body.dark{

    }

    body {
        background-color: #fff;
    }

    html, body, #__next {
    min-height: 100%;
  }
`;

export default GlobalStyle;
