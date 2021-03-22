import styled from 'styled-components';

export const Container = styled.div`

  border: 2px solid var(--border);
  border-radius: 8px;

  display: grid;
  flex-direction: column;
  overflow: hidden;
  text-decoration: none;
  width: 35rem;   
  height: 53rem;
  grid-column: 1/2;
  grid-row: 1/3;
  z-index: 1;
  margin-top: 10rem;
  margin-left: -9rem;
  transition: all .2s ease;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

  @media only screen and (max-width: 980px) {   
    margin-left: 0;
    justify-self: center;
  } 

  @media only screen and (max-width: 560px) {   
    width: 20rem;
    height: 20rem;
    margin-top: -10rem;
  }

  animation: moveInLeft .8s ease-in-out 2s;        
  animation-timing-function: ease-out;
  animation-fill-mode: backwards;
  
  @keyframes moveInLeft {
    0% {
        opacity: 0;
        transform: translateX(-10rem);
    }    

    100% {
        opacity: 1;
        transform: translate(0);
    }
  }

  img {
    width: 100%;   
    height:47rem; 
    grid-column: 1/3;
    grid-row: 1/2;
    @media only screen and (max-width: 560px) {   
      height: 14rem;
    }

  }

  div {
    padding: 0.7rem 1.3rem;
    backdrop-filter: blur(3px);
    background: rgba(0, 0, 0, 0.5);
    text-align: left;
    grid-column: 1/3;
    grid-row: 2/3;
  }

  strong {
    font-size: 2rem;
    font-family: var(--font-family);
    font-weight: 700;
    color: var(--white);
  }

  p {
    font-family: var(--font-family);
    font-size: 1.2rem;
    color: var(--white);
  }

  svg {
    color: red;
  }

`;
