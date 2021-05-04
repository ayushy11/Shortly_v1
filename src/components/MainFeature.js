import React from 'react';
import styled from 'styled-components';
import Shortener from './Shortener';
import FeatureCard from './FeatureCard';
import CardSpace from './cardspace';
import IconBrand from './../images/icon-brand-recognition.svg';
import IconDetailed from './../images/icon-detailed-records.svg';
import IconFully from './../images/icon-fully-customizable.svg';

const desktopSize = `1034px`;

const FeatureSection = styled.section`
  background-color: #f5f5f5;
  ${'' /* background: linear-gradient(130deg, #ff7a18, #af002d 41.07%, #319197 76.05%); */}
  margin: 0;
  padding: 8rem 5%;
`;

const FeatureHeader = styled.h2`
  color:  #35323e;
  font-size: 2.8rem;
  font-weight: 700;
  letter-spacing: -2px;
  text-align: center;
  margin: 320px auto auto auto;

  @media only screen and (min-width: 500px) {
    font-size: 3.2rem;
    letter-spacing: 0.8px;
    margin: 320px auto 1.5rem auto;
  }  
`;

const FeatureText = styled.p`
  color: #9e9aa7;
  font-size: 1.6rem;
  line-height: 2;
  margin: 0 0 8.2rem 0;
  text-align: center;
  

  @media only screen and (min-width: 500px) {
    font-size: 1.8rem;
    max-width: 525px;
    margin: 0 auto;
    padding: 0 0 100px 0;
  }
`;

const CardContainer = styled.div`   
  ${'' /* border: 2px solid purple; */}
  padding-top: 60px; 

  @media only screen and (min-width: ${desktopSize}) {
    padding-top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -100px;
    width: 100%;
  }
`;

function MainFeature() {
  return (
    <FeatureSection>

      <Shortener />

      <FeatureHeader>Advanced Statistics</FeatureHeader>

      <FeatureText>
        Track how your links are performing across the web with our advanced statistics dashboard.
      </FeatureText> 

      <CardContainer>

      <FeatureCard
        icon={IconBrand}      
        title="Brand Recognition"
        text="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
      />

      <CardSpace />

      <FeatureCard
        icon={IconDetailed}
        title="Detailed Records"
        text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        position="card-2"        
      />

      <CardSpace />

      <FeatureCard
        icon={IconFully}
        title="Fully Customizable"
        text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
        position="card-3"        
      />
      </CardContainer>
    </FeatureSection>
  );
}

export default MainFeature;