import styled from 'styled-components';

export const Li = styled.li`

  animation: bottomInUp .5s;
  animation-duration: .5s;
  animation-fill-mode: backwards;
  transition: all .2s ease;  


  li.dead {    
    background: red;
    border: 5px solid red
  }

  &:hover {
    transform: scaleX(1.1) scaleY(1.2);
  }

  &:active {
    box-shadow: 0px 0px 5px 5px var(--green);
    border: 3px solid var(--green); 
  }

  @keyframes bottomInUp{
    0%{
      transform: translateY(3rem);
      opacity: 0;
    }

    100%{
      transform: translateY(0);
      opacity: 1;
    }
  }

  border: 2px solid var(--border);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-decoration: none;
  width: 22.4rem;   
  cursor: pointer;

  img {
    transition: all .4s ease;
  }

  div {
    padding: 0.7rem 1.3rem;
    backdrop-filter: blur(3px);
    background: rgba(0, 0, 0, 0.5);
    text-align: left;
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
  @media only screen and (max-width: 550px) {
    width: 30rem;
  }

 
`;
