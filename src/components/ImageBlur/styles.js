import styled from 'styled-components';

export const Img = styled.img`
  
    width: 38rem;
    display: grid;
    grid-column: 1/2;
    grid-row: 1/3;
    border-radius: 2rem 0 0 2rem;
    z-index: -2;

  @media only screen and (max-width: 980px) {  
    border-radius: 2rem 2rem 0 0;   
    width: 100%; 
    height: 6rem;
  }
`;

export const Overlay = styled.div`
  width: 38.5rem;
  backdrop-filter: blur(25px);
  background: rgba(0, 0, 0, 0);
  height: 68rem;
  display: grid;
  grid-column: 1/2;
  grid-row: 1/3;
  border-radius: 2rem 0 0 2rem;
  z-index: -1;

  @media only screen and (max-width: 560px) { 
    border-radius: 2rem 2rem 0 0;
    width: 100%;      
    height: 7rem;
  }
`;