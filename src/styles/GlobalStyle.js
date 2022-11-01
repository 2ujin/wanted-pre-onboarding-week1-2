import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    @font-face {
        font-family: 'SpoqaHanSansNeo-Regular';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    html {
        height: initial;
    }
    body * {
        z-index: 1;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: #464646;
        font-family: 'SpoqaHanSansNeo-Regular';
    }
    
    input {
        width: 100%;
        border: 1px solid #cdcdcd;
        height: 50px;
        padding: 0 20px;
        margin-bottom: 10px;
        border-radius: 20px;
        font-size: 16px;
        box-sizing: border-box;
        color: #27282a;
    }

    a{
        text-decoration: none;
    }
    
    input:focus {
        color: black;
        outline: none;
    }
    
    textarea:focus {
        outline: none;
    }
    
    select:focus {
        outline: none;
    }
    
    button {
        color: white;
        background-color: #4b81e7;
        padding: 10px;
        border-radius: 20px;
        border: none;
        width: 100%;
    }

    /* 웹 */
    @media screen and (min-width: 769px) {
        body {
        .wrapper {
            margin: 0 auto;
            overflow: scroll;
            height: 100vh;
            max-width: 480px;
            -webkit-box-shadow: 0px 0px 22px -2px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 0px 0px 22px -2px rgba(0, 0, 0, 0.75);
            box-shadow: 0px 0px 22px -2px rgba(0, 0, 0, 0.75);
        }
        }

        .Wrapperwidth{
            /* width: 100%; */
            width: 480px;
        }
        .header{
            width: 480px;
        }
    }
    
    // 앱
    @media screen and (max-width: 768px) {
        body {
        overflow: hidden;
        margin: 0;
        padding: 0;
        .wrapper {
            height: 100vh;
            width: 100%;
            margin: 0 auto;
            overflow: scroll;
        }
        }
        .Wrapperwidth{
            width: 100%;
        }
        .top{
            width: 380px;
        }
    }
    
    .wrap {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
    }
    
    .padding {
        padding: 20px;
    }
  
`;

export default GlobalStyle;
