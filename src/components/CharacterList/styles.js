import styled from 'styled-components';

export const CharacterListWrapper = styled.section`  
  
  //background: blueviolet;
  //width: 100%; 
  max-width: 144rem;
  //padding: 0 3.2rem;
  margin: 0 auto;
  text-align: center;
/* 
  @media only screen and (max-width: 860px) {
    padding: 0;
  }

  @media only screen and (max-width: 500px) {
    max-width: 100%;
  } */
  
`;

export const CharacterListContainer = styled.ul`

  max-width: 97.8rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-template-rows: repeat(5, 1fr);
  gap: 2.4rem;
  margin: 0 auto;

  @media only screen and (max-width: 600px) {
    max-width: 60%;
    justify-items: center;
  }

  /* max-width: 97.8rem;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto; */

`;

