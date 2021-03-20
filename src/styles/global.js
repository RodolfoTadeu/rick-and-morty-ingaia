import { createGlobalStyle } from 'styled-components';

import background from '../assets/background.svg';

export default createGlobalStyle`
*,
*::after,
*::before{
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

:root {
  --background: #1E1E1E;
  --green: #CBD736;
  --grey-light: #D3D3D3;
  --grey-middle: #9F9F9F;
  --grey-dark: #8C8C8C;
  --border: #606060;
  --iconModal: #7B7B7B;
  --white: #ffffff;

  --font-family: Nunito



}

html{
  /*font-size: 1rem = 10px 10px/16 = 62.5 */
  font-size: 62.5%;
  transition: all 0.2s ease;

  @media only screen and (max-width: 1024px) {
    font-size: 50%;
  }

  @media only screen and (max-width: 1250px) {
    font-size: 50%;
  }
}

body{
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  background: var(--background) url(${background}) no-repeat;
  background-position: center;
  background-position-y: top;  
}

button {
  cursor: pointer;
}

/* #root {
  max-width: 144rem;
  //padding: 0 3.2rem;
  margin: 0 auto;

  @media only screen and (max-width: 860px) {
    padding: 0;
  }

  @media only screen and (max-width: 500px) {
    max-width: 100%;
  }
} */

`;
