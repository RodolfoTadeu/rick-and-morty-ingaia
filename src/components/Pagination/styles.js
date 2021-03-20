import styled from 'styled-components';

export const List = styled.ul`

  display: flex;  
  align-items: center;
  justify-content: center;
  margin: 5rem 0;

  li {
    list-style: none;
    margin-left: 2rem;  
  }

  button {
    background-color: transparent;
    border: none;
    font-size: 2rem;
    font-family: var(--font-family);
    font-weight: 400; 
    display: flex;
    color: #3E3E3E;
    

    svg {
      font-size: 2.5rem;
    }
  }

  .pagination__item--active{
      color: #CBD736;
  }

  .active {
    color: #ffffff;
  }

  .disabled {
    opacity: 0.3;
  }
`;