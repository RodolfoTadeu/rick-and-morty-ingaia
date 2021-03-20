import styled from "styled-components";
import { title } from "../../mixins/mixins";

export const InformationWrapper = styled.div`
  
  h2 {
    color: #ccc;
    ${title};
    margin-bottom: 1.7rem;
  }

  > span{
    color: var(--grey-dark);
    font-size: 1.4rem;
    font-family: var(--font-family);
  }

  h3 {
    color: var(--white);
    font-size: 2.8rem;
    font-family: var(--font-family);
    font-weight: 400;
  }

  p {
    color: var(--grey-light);
    font-size: 1.8rem;
    font-family: var(--font-family);
    margin-bottom: 1.2rem;
    line-height: 1;
  }

  > span {
    margin-top: 1.7rem;
  }

  div{
    svg {
      color: var(--iconModal);
      margin-right: 1.1rem;                 
    }

    span {
      color: green;
      font-size: 1.4rem;
      font-family: var(--font-family);
      color: var(--grey-dark)
    }
  }
`;
