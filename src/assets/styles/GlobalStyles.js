import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* scrollbar-width: none */
}
body {
    height: 100vh;
    overflow: ${({ isScrollable }) => (isScrollable ? "visible" : "hidden")};
    background-color: #c1c9d0;
}

#root {
    position: relative;
    max-width: 2100px;
    margin:0 auto;
    overflow: hidden;
}
::-webkit-scrollbar { 
    /* display: none;  */
}


`;

export default GlobalStyle;
