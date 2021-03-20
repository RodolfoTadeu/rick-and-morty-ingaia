import styled from "styled-components";

export const Form = styled.form`
  text-align: center;
  animation: moveInLeft 1s ease;
  animation-delay: 1.5s;
  animation-fill-mode: backwards;  
  display: flex;
  justify-content: center;
  
  @keyframes moveInLeft{
    0%{
      transform: translate(-10rem);
      opacity: 0;
    }

    100%{
      transform: translate(0);
      opacity: 1;
    }
  }
`;
