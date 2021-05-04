import React, { useRef } from 'react';
import styled from 'styled-components';

const desktopSize = `700px`;

const MenuContainer = styled.div`
  display: none;
  z-index: 1;
  left: 0;
  background-color: #3b3054; 
  border-radius: 10px;
  margin: 0 5%;
  position: absolute;
  text-align: center;
  top: 80px;
  width: 90%;

  @media only screen and (min-width: ${desktopSize}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: #fff;
    margin: 0 0 0 5rem;
    position: static;
  }

`;

const MenuList = styled.ul`
  margin: 2rem 0;
  padding: 0;
  font-size: 1.8rem;
  color: #fff;
  list-style-type: none;

  @media only screen and (min-width: ${desktopSize}) {
    display: flex;
    align-items: center;
    color: #bfbfbf;
    font-size: 1.6rem;
    margin: 0;
  }

`;

const MenuListItem = styled.li`
  padding: 1.6rem 0;
  
  a:link, a:visited {
    color: #fff;
    text-decoration: none;
  }

  a:hover, a:active {
    color: #fff;
    text-decoration: none;
  }

  @media only screen and (min-width: ${desktopSize}) {
    font-weight: 700;
    padding: 0 2.25rem 0 0;

    a:link, a:visited {
      color: #9e9aa7;
      text-decoration: none;
    }
  
    a:hover, a:active {
      color: #3b3054;
      text-decoration: none;
    }

    :last-of-type {
      padding: 0;
    }
  }
`;

const MenuDivider = styled.div`
  background-color: #bfbfbf;
  height: 1px;
  margin: 0 auto;
  width: 80%;
  
  @media only screen and (min-width: ${desktopSize}) {
    display: none;
  }
`;

const SignUpButton = styled.button`
  background-color: #2acfcf;
  border: none;
  border-radius: 5rem;
  color: #fff;
  font-size: 1.8rem;
  font-weight: 700;
  padding: 1.5rem 2.8rem;
  width: 80%;

  :active {
    transform: translateY(4px);
  }

  :hover {
    background-color: #51dbdb;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    transform: translateY(-3px);
  }

  @media only screen and (min-width: ${desktopSize}) {
    padding: 1rem 2rem;
    width: 100%;
  }
`;

const MenuButton = styled.button`
  background-color: #fff;
  border: none;
  color: #bfbfbf;
  cursor: pointer;
  font-size: 2rem;
  font-weight: 700;
  margin: -10px 0 0 0;
  padding: 0 10px;
  text-align: center;

  @media only screen and (min-width: ${desktopSize}) {
    display: none;
  }
`;

function Menu() {
  
  const menuVisible = useRef('');

  const showMenu = (e) => {
    menuVisible.current.classList.toggle('visible');
  }

  return (
    <>
    <MenuContainer ref={menuVisible}>
      <MenuList>
        <MenuListItem><a href="/features">Features</a></MenuListItem>
        <MenuListItem><a href="/pricing">Pricing</a></MenuListItem>
        <MenuListItem><a href="/resources">Resources</a></MenuListItem>
      </MenuList>

      <MenuDivider />

      <MenuList>
        <MenuListItem><a href="/login">Login</a></MenuListItem>
        <MenuListItem>
          <SignUpButton>Sign Up</SignUpButton>
        </MenuListItem>
      </MenuList>  
    </MenuContainer>

    <MenuButton onClick={showMenu}>☰</MenuButton>
    </>
  );
}

export default Menu;