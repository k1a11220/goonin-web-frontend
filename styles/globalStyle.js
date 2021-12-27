import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        font-size: 100%;
        --font-medium: 400;
        --width: 600px;
        --component-gap: 16px;
        --border-radius: 20px;
        --border-radius-sm: 10px;
        --border-radius-md: 18px;
        --padding: 24px;

        @media (max-width: 800px) {
            
        }
    }

    body.light{
        --color: #cccfd4;
        --text-color: #717989;
        --main-color: #2A364E;
        --highlight-color: #4191FD;
        --btn-color: #2A364E;
        --sub-color: #E7E9EB;
        --bg-color: #ffffff;
        --card-color: #F8F8F8;
        --border-color: #f2f3f5;
        --unactive-color: #cccfd4;
        --active-color: #2A364E;
    }

    body.dark{
        --color: #9E9EA4;
        --text-color: #9E9EA4;
        --main-color: #E4E4E5;
        --highlight-color: #4191FD;
        --btn-color: #2A364E;
        --sub-color: #272727;
        --bg-color: #1d1d1d;
        --card-color: #292929;
        --border-color: #2C2C2C;
        --unactive-color: #9E9EA4;
        --active-color: #ffffff;
    }

    html, body, #__next {
    min-height: 100vh;
    position: relative;
    background-color: var(--bg-color);
  }
`;

export default GlobalStyle;
