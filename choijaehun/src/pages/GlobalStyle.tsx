import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

 @font-face {
    font-family: 'HSGooltokki';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2210-2@1.0/HSGooltokki.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
 body{   
    font-family: 'HSGooltokki';
    background-color: #fdfdfd;
 }
`;

export default GlobalStyle;
