import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body{
    max-width: 1366px;
    margin: 0 auto;
    line-height: 1.5;
    font-family: monospace;
    font-size: 18px;
    background-color: hsl(0, 0%, 95%);
    color: hsl(260, 8%, 14%);
    overflow-x: hidden;
}
a{
    text-decoration: none;
}
li{
    list-style: none;
}
footer{
    width: 100vw
}
`;
