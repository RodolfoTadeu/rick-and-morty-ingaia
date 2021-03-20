import styled from "styled-components";
import { title } from "../../mixins/mixins";

export const Wrapper = styled.div`
  
  @media only screen and (max-width: 980px) {   
    grid-column: 1/10;  
    grid-row: 4/8;
  }    

  h2 {
    ${title};
  }

  .aboutText {
    color: var(--grey-light);
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 1.6rem;
    margin-top: 9px;
  }
`;
