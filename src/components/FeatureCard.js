import React from 'react';
import styled from 'styled-components';

const desktopSize = `1034px`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 5px;
  margin: 0 auto;
  margin-bottom: -15px;
  max-width: 325px;
  padding: 45px;

  @media only screen and (min-width: ${desktopSize}) {
    margin: 0;
    width: 350px;
    padding: 35px;
  }

`;

const CardIcon = styled.div`
  background-color: #3b3054;
  border-radius: 50%;
  height: 90px;
  margin: 0 auto;
  margin-top: -90px;
  padding: 25px 0;
  text-align: center;
  width: 90px;

  @media only screen and (min-width: ${desktopSize}) {
    margin: -80px 0 0 0;
  }
`;

const CardHeader = styled.h3`
  color: #35323e;
  font-size: 2rem;
  margin: 2.2rem auto;
  padding: 1rem;
  text-align: center;

  @media only screen and (min-width: ${desktopSize}) {
    padding: 0;
    text-align: left;
  }
`;

const CardText = styled.p`
  color: #bfbfbf;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.6;
  text-align: center;

  @media only screen and (min-width: ${desktopSize}) {
    text-align: left;
  }
`;

function FeatureCard({ icon, title, text, position }) {

  return (
    <Card className={position}>      
      <CardIcon><img src={icon}/></CardIcon>
      <CardHeader>{title}</CardHeader>
      <CardText>{text}</CardText>
    </Card>
  );
}

export default FeatureCard;