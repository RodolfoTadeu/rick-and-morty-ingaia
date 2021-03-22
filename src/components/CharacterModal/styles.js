import styled from "styled-components";
import { title } from "../../mixins/mixins";
 
export const Information = styled.div`

    grid-row: 1/4;
    align-self: center;
    grid-column: 4/5;
    justify-self: center;
    padding: 0 2rem; 

  @media only screen and (max-width: 560px) {   
    grid-row: 3/5;
    align-self: center;
    grid-column: 1/3;
    justify-self: center;
    padding: 0 2rem;
  }
 
  h2 {
    ${title};
  }
 
  p {
    color: var(--grey-light);
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 1.6rem;
    margin-top: 9px;
  }
`;