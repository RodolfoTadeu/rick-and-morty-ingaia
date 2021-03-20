import styled from "styled-components";

export const ModalContainerOverlay = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.95); 
  position: fixed;
  overflow: hidden;
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
  max-width: 103.4rem;
  height: 68rem;
  display:grid;
  grid-template-columns: repeat(12,1fr);
  grid-template-rows: repeat(8, 1fr);
  width: 100%;
  margin: 0 auto;
  border: 1px solid #161616;
  border-radius: 16px; 

  @media only screen and (max-width: 980px) {
    grid-template-columns: 1fr;
    grid-template-rows:  7rem repeat(5, 10rem);;
    height: auto;
  }

  .modal {    
    display: grid;
    grid-column: 1/2;
    z-index: 1;
    grid-row: 1/2;
    margin: 2rem 3rem;
    @media only screen and (max-width: 980px) {
      display: none;
    }
  }

  .closeModal {
    animation: moveInRight .8s ease-in-out 2s;        
    animation-timing-function: ease-out;
    animation-fill-mode: backwards;

    display: grid;
    grid-column: 1/2;
    z-index: 1;
    grid-row: 1/2;
    margin: 2rem 3rem;  

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

