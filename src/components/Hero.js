import React from 'react';
import styled from 'styled-components';
import WorkingImage from '../images/illustration-working.svg';
import ButtonRounded from '../components/button';

const desktopSize = `700px`;

const HeroContainer = styled.section`
  ${'' /* border:2px solid green; */}
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 0;

  @media only screen and (min-width: ${desktopSize}) { 
    flex-direction: row-reverse;
    justify-content: flex-end;
    margin-bottom: 100px;    
    max-width: 1035px;
    padding: 5% 0 0 5%;    
  }

  @media only screen and (min-width: 1150px) {
    margin: 0 auto 100px auto;
    padding: 0;
  }

  @media only screen and (min-width: 1200px) { 
    margin-bottom: 250px;
  }
`;

const HeroTextContainer = styled.div`
  ${'' /* border: 2px solid blue; */}
  padding: 0 5%;
  text-align: center;
  margin-bottom: 125px;

  @media only screen and (min-width: ${desktopSize}) { 
    margin-bottom: 25px;
    margin-top: 80px;
    padding: 0 5% 0 0;
    text-align: left;
    width: 50%;
  }

  @media only screen and (min-width: 900px) {
    margin-bottom: 150px;
  }
`;

const HeroHeader = styled.h2`
  color: #35323e;
  font-size: 4.2rem;
  font-weight: 700;
  margin: 0 auto;
  max-width: 420px;
  text-align: center;

  @media only screen and (min-width: ${desktopSize}) {
    font-size: 4rem;
    margin: 1rem 0 0 0;
    text-align: left;
  }

  @media only screen and (min-width: 1100px) {
    font-size: 5.6rem;
    font-weight: 700;
  }
`;

const HeroContent = styled.p`
  color: #9e9aa7;
  font-size: 1.8rem;
  line-height: 1.5;
  max-width: 520px;
`;

const HeroPicture = styled.div`
  background-image: url(${WorkingImage});
  background-repeat: no-repeat;
  background-size: 125%;
  height: 400px;
  margin-left: 5%;

  @media only screen and (min-width: 500px) {
    background-size: 115%;
  }

  @media only screen and (min-width: 550px) {
    background-size: 110%;
    padding-bottom: 0;
    height: 475px;
  }

  @media only screen and (min-width: ${desktopSize}) {  
    height: 400px;
    position: absolute;
    right: 0;
    width: 50%;
    margin-top: 50px;
  }

  @media only screen and (min-width: 1200px) {
    background-size: 110%;
    height: 600px;
  }
  @media only screen and (min-width: 1440px) {
    background-size: 100%;
    height: 600px;
  }

`;

function Hero() {
  return (
    <HeroContainer>
      <HeroPicture />

      <HeroTextContainer>
        <HeroHeader>More than just shorter links</HeroHeader>
    
        <HeroContent>
          Build your brand’s recognition and get detailed insights on how your links are performing.
        </HeroContent>

        <ButtonRounded text="Get Started">Get Started</ButtonRounded>
      </HeroTextContainer>      
    </HeroContainer>
  );
}

export default Hero;