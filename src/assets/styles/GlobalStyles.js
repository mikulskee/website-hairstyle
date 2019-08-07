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
    overflow: ${({ isScrollable }) => (isScrollable ? "visible" : "hidden")}
}

#root {
    overflow:hidden;
}
::-webkit-scrollbar { 
    /* display: none;  */
}


`;

export default GlobalStyle;
