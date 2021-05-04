import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #2acfcf;
  border: none;
  border-radius: 5rem;
  color: #fff;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 1.5rem auto 0 auto;
  padding: 1.5rem 2.8rem;
  text-align: center;

  :active {
    transform: translateY(4px);
  }

  :hover {
    background-color: #9be3e2;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    transform: translateY(-3px);
  }
  
`;

function ButtonRounded(props) {
  return (
    <Button>{props.text}</Button>
  );
}

export default ButtonRounded;