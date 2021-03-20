import styled from 'styled-components';
import { border } from './mixins';

export const Container = styled.div`

  text-align: center;
  margin-bottom: 10rem;

  img {
    margin: 3.8rem 0 7.4rem 0;
    animation: bounceInDown 1s;
    animation-delay: 1s;
    animation-fill-mode: backwards
  }

  @keyframes bounceInDown {
    from,
    60%,
    75%,
    90%,
    to {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -3000px, 0) scaleY(3);
      transform: translate3d(0, -3000px, 0) scaleY(3);
    }

    60% {
      opacity: 1;
      -webkit-transform: translate3d(0, 25px, 0) scaleY(0.9);
      transform: translate3d(0, 25px, 0) scaleY(0.9);
    }

    75% {
      -webkit-transform: translate3d(0, -10px, 0) scaleY(0.95);
      transform: translate3d(0, -10px, 0) scaleY(0.95);
    }

    90% {
      -webkit-transform: translate3d(0, 5px, 0) scaleY(0.985);
      transform: translate3d(0, 5px, 0) scaleY(0.985);
    }

    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes upInDown{
    0%{
        transform: translateY(-3rem);
        opacity: 0;
    }

    100%{
        transform: translateY(0);
        opacity: 1;
    }
  }
`;

export const Form = styled.form`
  text-align: center;

  input {
    ${border};
    margin-right: 1.6rem;
    padding: 0 0 0 1.4rem;

    &::placeholder {
      color: #9f9f9f;
    }
  }
  button {
    ${border};
    width: 8.4rem;
  }
`;


export const Repositories = styled.ul`
  max-width: 97.8rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;

  li {

    border: 2px solid #606060;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    overflow: hidden;
    text-decoration: none;
    width: 22.4rem;   
    margin-bottom: 2.4rem;
    cursor: pointer;


    img {
      transition: all .4s ease;
    }

    div {
      padding: 0.7rem 1.3rem;
      backdrop-filter: blur(3px);
    }

    strong {
      font-size: 2rem;
      font-family: var(--font-family);
      font-weight: 700;
      color: #ffffff;
    }

    p {
      font-family: var(--font-family);
      font-size: 1.2rem;
      color: #ffffff;
    }
}
`;




