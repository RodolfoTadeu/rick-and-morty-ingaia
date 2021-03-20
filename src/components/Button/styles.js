import styled from 'styled-components';
import { border } from '../../mixins/mixins';

export const ButtonStyle = styled.button`
  display:grid;
  align-items: center;
    ${border};
    width: 8.4rem;

    animation: moveInRight .8s ease-in-out 2s;        
    animation-timing-function: ease-out;
    animation-fill-mode: backwards;

  

    @keyframes moveInRight {
      0% {
          opacity: 0;
          transform: translateX(10rem);
      }    

      100% {
          opacity: 1;
          transform: translate(0);
      }
    }
`;