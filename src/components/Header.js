import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../images/logo.svg';
import Menu from './Menu';

const desktopSize = `800px`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #232127;
  background-color: #fff;
  max-width: 1034px;
  padding: 2% 5%;

  @media only screen and (min-width: 1160px) { 
    margin: 0 auto;
    padding: 2% 0;
  }

`;

const LogoContainer = styled.h1`
  margin: 0;

  @media only screen and (min-width: ${desktopSize}) {
    margin-top: 5px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      
      <Menu />       
    </StyledHeader>
  );
}

export default Header;