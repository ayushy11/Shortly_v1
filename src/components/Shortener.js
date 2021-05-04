import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import MobileBackground from '../images/bg-shorten-mobile.svg';
import DesktopBackground from '../images/bg-shorten-desktop.svg';
import ShortenedUrl from './ShortenedUrl';

const desktopSize = `700px`;

const ShortenerContainer = styled.div`
  ${'' /* border:2px solid orange; */}
  background-color: #3b3054;
  background-image: url(${MobileBackground});
  background-position: top right;
  background-repeat: no-repeat;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: -160px auto ;
  padding: 2rem 0;
  text-align: center;
  
  @media only screen and (min-width: ${desktopSize}) {
    background-image: url(${DesktopBackground});
    background-position: top left;
    background-size: cover;
    height: 168px;
    max-width: 1034px;    
  }
`;

const ShortenerForm = styled.form`
  ${'' /* border: 2px solid red; */}
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding: 0;

  @media only screen and (min-width: ${desktopSize}) {
    align-items: top;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 5%;
  }
`;

const ShortenerFieldContainer = styled.div`
  ${'' /* border: 2px solid white; */}
  margin: 0;
  padding: 0;
  width: 100%;
  
  @media only screen and (min-width: ${desktopSize}) {
    height: 50px;
  }
`;

const ShortenerInput = styled.input`
  border: none;
  text-decoration: none;
  outline: none;
  border-radius: 5px;
  color: #3b3054;
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  margin: 1rem;
  padding: 0.8rem;
  width: 80%;

  :focus{
    transition: box-shadow 0.2s ease-in;
    box-shadow: 1px 0px 0px 6px rgb(133, 108, 192);
  }

  @media only screen and (min-width: ${desktopSize}) {
    margin: 0;
    width: 100%;
  }
`;

const ShortenerButtonContainer = styled.div`
  ${'' /* border: 2px solid greenyellow; */}
  margin: 0;
  padding: 0;
  width: 100%;

  @media only screen and (min-width: ${desktopSize}) {
    height: 50px;
    margin: 0;
    width: 35%;
  }
`;

const ShortenerButton = styled.button`
  background-color: #2acfcf;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 1.8rem;
  font-weight: 800;
  margin: 1rem;
  padding: 0.8rem;
  width: 80%;

  :active {
    transform: translateY(4px);
  }

  :hover {
    background-color: #9be3e2;
    cursor: pointer;
  }

  :focus{
    transition: box-shadow 0.2s ease-in;
    box-shadow: 1px 0px 0px 6px #a6eded;
  }

  @media only screen and (min-width: ${desktopSize}) {
    margin: 0;
  }
`;

const UrlContainer = styled.div`
  ${'' /* border: 2px solid violet; */}
  max-height: 500px;
  margin-top: 18rem;
  margin-bottom: -180px;

  @media only screen and (min-width: ${desktopSize}) {
    padding: 1rem;
  }
`;

function Shortener() {   
    const baseUrl = 'https://api.shrtco.de/v2';
    const [input, setInput] = useState('');
    const [links, setLinks] = useState([]);

    const handleButton = async (event) => {
        event.preventDefault();
        async function fetchData() {
            const request = await axios.get(`${baseUrl}/shorten?url=${input}`);
            // console.log(request);
            const results = request.data.result;
            setLinks((oldstate) => [results, ...oldstate]);
            return request;
        }
        fetchData();
        setInput('');
    };
    console.log(links);

    return (
        <>
            <ShortenerContainer>
                <ShortenerForm >
                    <ShortenerFieldContainer>
                        <ShortenerInput
                            value={input}                            
                            onChange={e => setInput(e.target.value)}
                            id="shortenerUrl"
                            type="text"
                            placeholder="Shorten a link here..."
                        />                        
                    </ShortenerFieldContainer>
                    <ShortenerButtonContainer>
                        <ShortenerButton type="submit" onClick={handleButton}>Shorten It!</ShortenerButton>
                    </ShortenerButtonContainer>
                </ShortenerForm>
            </ShortenerContainer>

            <UrlContainer>
            {
                links != null &&
                links.map((link) => (
                    <ShortenedUrl
                        key={link.code}
                        originalUrl={link.original_link}
                        shortenedUrl={link.full_short_link}
                    />
                ))
            }
            </UrlContainer>

        </>
    );
}

export default Shortener;