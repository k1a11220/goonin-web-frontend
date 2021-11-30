import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        font-size: 100%;
        --width: 800px;

        @media (max-width: 800px) {
            
        }
    }

    body.light{
        --color: #ffffff
    }

    body.dark{
        --color: #1d1d1d
    }

    html, body, #__next {
    min-height: 100%;
  }
`;

export default GlobalStyle;
