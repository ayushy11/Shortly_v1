import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../images/logo1.svg';
import { ReactComponent as IconFacebook } from '../images/icon-facebook.svg';
import { ReactComponent as IconTwitter } from '../images/icon-twitter.svg';
import { ReactComponent as IconPinterest } from '../images/icon-pinterest.svg';
import { ReactComponent as IconInstagram } from '../images/icon-instagram.svg';

const desktopSize = `900px`;

const StyledFooter = styled.footer`
  background-color: #232127;
  margin: 0;
  padding: 5%;
  text-align: center;
`;

const FooterInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1034px;

  @media only screen and (min-width: ${desktopSize}) { 
    align-items: flex-start;
    flex-direction: row;
  }
`;

const LogoHolder = styled.div`
  color: #fff;
  margin: 4.5rem 0;  

  @media only screen and (min-width: ${desktopSize}) {
    margin: 18px;
  }
`;

const List = styled.ul`
  font-size: 1.6rem;
  color: #bfbfbf;
  list-style-type: none;
  margin: 0 0 2rem 0;
  padding: 0;

  li {
    margin: 1.5rem 0;
    
    a:link, a:visited {
      color: #bfbfbf;
      text-decoration: none;
    }

    a:hover, a:active {
      color:  #2acfcf;
    }
  }

  @media only screen and (min-width: ${desktopSize}) {
    margin: 0;
    text-align: left;
  }
`;

const FooterHeader = styled.h3`
  text-align: center;
  font-size: 1.6rem;
  color: #fff;
  margin: 0
  padding: 3rem 0 1.5rem 0;

  @media only screen and (min-width: ${desktopSize}) {
    text-align: left;
    padding: 0 0 1.5rem 0;
  }
`;

const FooterMenus = styled.div`
  @media only screen and (min-width: ${desktopSize}) {
    display: flex;  
    justify-content: space-around;
    width: 75%;
  }
`;

const IconList = styled.ul`
  align-items: center;
  color: #fff;
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 5rem auto 0 auto;
  padding: 0;

  li {
    margin: 0 1.5rem;
  }

  svg :hover {
    color: #2acfcf;
    cursor: pointer;
  }

  @media only screen and (min-width: 800px) {
    align-items: flex-start;
    margin: 18px;
    padding: 0;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <FooterInfo>
        <LogoHolder>
          <Logo />
        </LogoHolder>

        <FooterMenus>
          <div>
            <FooterHeader>Features</FooterHeader>
            <List>
              <li><a href="/">Link Shortening</a></li>
              <li><a href="/">Branded Links</a></li>
              <li><a href="/">Analytics</a></li>
            </List>
          </div>
          <div>
            <FooterHeader>Resources</FooterHeader>
            <List>
              <li><a href="/">Blog</a></li>
              <li><a href="/">Developers</a></li>
              <li><a href="/">Support</a></li>
            </List>
          </div>
          <div>
            <FooterHeader>Company</FooterHeader>
            <List>
              <li><a href="/">About</a></li>
              <li><a href="/">Our Team</a></li>
              <li><a href="/">Careers</a></li>
              <li><a href="/">Contact</a></li>
            </List>
          </div>
          <IconList>
            <li><IconFacebook /></li>
            <li><IconTwitter /></li>
            <li><IconPinterest /></li>
            <li><IconInstagram /></li>
          </IconList>
        </FooterMenus>

      </FooterInfo>
    </StyledFooter>
  );
}

export default Footer;