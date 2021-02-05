import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    html, body {
        font-family: 'Merriweather Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: #000000;
        color: #333333;
        font-size: 16px;
    }

    h2, h3, p, button, a {
        font-family: 'Rubik';
    }
`;
