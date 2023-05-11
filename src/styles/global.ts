import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body {
        background-color: #f7f6f3;
        color: ${({ theme }) => theme.palette.text.primary};
    }

    h1, h2, h3, h4 {
        color: ${({ theme }) => theme.palette.common.black}
    }
    
    button {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
`;

export default GlobalStyle;
