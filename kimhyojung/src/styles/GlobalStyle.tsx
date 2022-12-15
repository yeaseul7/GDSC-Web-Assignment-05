import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
   
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    @font-face {
        font-family: 'LINESeedfont';
        src: url('/fonts/LINESeedKR-Bd.ttf');
    }
    
    body{
        margin:0;
        padding:0;
        font-family:'LINESeedfont';
        box-sizing: border-box;
        background-color: #0e0e0e;
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }
    
`;

export default GlobalStyle;
