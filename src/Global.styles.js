import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{ margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    /* overflow: hidden; */
  }
  body {
    /* overflow: hidden;
    */
  }

  &:root{
    --primary-base:#049673;
    --primary-dark:#032019;
    --primary-light:#CDEAE3;  
    --primary-Dlight:#B7E2D8;
    --primary-deep:#008867;

    --secondary-base:#FFB900;

    --text-head:#201700;
    --text-para:#666155;
    --text-paralight:#7E7B72;

    --other-bgdark:#100C00;
    --other-strokedark:#666155;
    --other-bglight:#F3F3F3;
    --other-strokelight:#CAC5BA;
    
    
  }
`;

export default GlobalStyles;
