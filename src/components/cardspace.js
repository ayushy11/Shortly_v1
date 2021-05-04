import React from 'react';
import styled from 'styled-components';

const desktopSize = `1034px`;

const Space = styled.div`
  background-color: #2acfcf;
  height: 100px;
  margin: 16px auto;
  width: 8px;

  @media only screen and (min-width: ${desktopSize}) {
    height: 8px;
    margin: 0;
    padding: 0;
    width: 30px;
  }
`;

function CardSpace() {  
  return (
    <Space />
  );
}

export default CardSpace;