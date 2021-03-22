import styled from "styled-components";

export const ModalContainerOverlay = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.85); 
  position: fixed;
  overflow: auto;
  z-index: 1;
  animation: fadeInRight 1s;
  animation-delay: .2s;
  animation-fill-mode: backwards;  
  top: 0;
  bottom: 0;
  display: grid;
  justify-content: center;
  align-content: center;
 
  @keyframes fadeInRight {
    from {
      opacity: 0;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }


  .animate__fadeInRight {
    -webkit-animation-name: fadeInRight;
    animation-name: fadeInRight;
  }

  svg {
    color: var(--white);
  }
`;

export const ModalContainer = styled.div`
  display:grid;
  height: 68rem;
  max-width: 103.4rem;
  grid-template-columns: repeat(3,1fr);
  border: 2px solid #161616;
  margin: 0 auto;
  border-radius: 1.6rem; 
  background: rgba(0, 0, 0, 0.8);
  z-index: -3;

  @media only screen and (max-width: 560px) {
    grid-template-columns: 1fr;
    height: auto;
    margin: 2rem;
    row-gap: 3rem;
  }

  @media only screen and (max-width: 800px) {
    margin-top: 30rem;
}

.closeModal {    
    display: grid;
    grid-column: 1/2;
    z-index: 1;
    grid-row: 1/2;
    margin: 2rem 3rem;
    @media only screen and (max-width: 560px) {
      display: none;
    }
  }

  .closeModalIcon {
    animation: moveInRight .8s ease-in-out 2s;        
    animation-timing-function: ease-out;
    animation-fill-mode: backwards;

    display: grid;
    grid-column: 1/2;
    z-index: 1;
    grid-row: 1/2;
    margin-top: -13rem;  

    @media only screen and (max-width: 1440px) {
      display: none;
    }

    @media only screen and (max-width: 980px) {
      display: grid;
    }
  }  

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

  .image-modal {
    width: 389px;

  }


    
`;

