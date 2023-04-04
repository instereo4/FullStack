import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;

  }
  
  body {
    width: 100%;

    display: flex;
    justify-content: center;
    background-image: url("https://source.unsplash.com/random/1800×1400/?blur=10?nature");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%; 
  }
  
  h1 {
    font-weight: 600;
    color: transparent;
    font-size:40px;
    background-image: linear-gradient(45deg, #3D0125, #003345);
    background-position: 40% 50%;
    -webkit-background-clip: text;
    line-height:90px;
   letter-spacing: -2px;
   text-shadow: -3px -3px #FAF9F6;
  }
`;

export default Global;