import styled from "styled-components";
import { border } from "../../mixins/mixins";

export const Input = styled.input`
  ${border};
  margin-right: 1.6rem;
  padding: 0 0 0 1.4rem;

  &::placeholder {
    color: var(--grey-middle);
  }
`;
