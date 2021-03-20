import styled from 'styled-components';

export const Overlay = styled.div`

  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index:10;
  backdrop-filter: blur(30px);

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      border: 2px solid #606060;
      border-radius: 8px;
    }

    span {
      color: #ffffff;
      font-family: var(--font-family);
      font-size: 2.4rem;
      margin-top: 3rem;
    }
  }


`;