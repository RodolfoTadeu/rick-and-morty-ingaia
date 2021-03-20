import styled from "styled-components";
import { title } from "../../mixins/mixins";
 
export const Information = styled.div`
  display: grid;
  grid-column: 3/12;
  grid-row: 2/8;
  flex-direction: column;
  justify-content: center;
  align-self: end;
  width: 50rem;

  @media only screen and (max-width: 980px) {   
    display: block;
    grid-column: 1/4;
    grid-row: 2/8;
    width:38.3rem;
    margin: 6rem 0;
    padding: 0 2rem;
  }
 
  h2 {
    ${title};
  }
 
  p {
    color: #d3d3d3;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 1.6rem;
    margin-top: 9px;
  }
`;