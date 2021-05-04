import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const desktopSize = `700px`;

const ShortenedLinkBox = styled.div`
  ${'' /* border: 2px solid blue; */}
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  max-width: 1034px;

  @media only screen and (min-width: ${desktopSize}) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px auto;
    padding: 1rem 2.5%;
  }

`;

const OriginalLink = styled.p`  
  color: #3b3054;
  font-size: 1.6rem;
  margin: 0;
  padding: 15px 15px 10px 15px;
  overflow: scroll;
  -ms-overflow-style: none;  
  scrollbar-width: none; 

  ::-webkit-scrollbar{
    display: none;
  }

  @media only screen and (min-width: ${desktopSize}) {
    border-bottom: none;
    padding: 0;
  }
`;

const ShortenedLink = styled.p`
  background-color: #fff;
  border: none;
  color: #2acfcf;
  font-size: 1.6rem;
  margin: 0;
  padding: 15px;
`;

const CopyLinkContainer = styled.div`
  margin: 0;
  padding: 0;

  @media only screen and (min-width: ${desktopSize}) {
    align-items: center;
    display: flex;
    flex-direction: row;
  }
`;

const CopyButtonContainer = styled.div`
  padding-bottom: 15px;

  @media only screen and (min-width: ${desktopSize}) {
    padding: 0;
  }
`;

const CopyButton = styled.button`
  background-color: #2acfcf;
  border: none;
  border-radius: 5px;
  color: #fff;
  display: block;
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0 auto;
  padding: 10px;
  text-align: center;
  width: 92%;

  :active {
    transform: translateY(4px);
  }

  :hover {
    background-color: #9be3e2;
    cursor: pointer;
  }

  @media only screen and (min-width: ${desktopSize}) {
    min-width: 120px;
    padding: 8px 20px;
    width: 100%;
  }
`;

function ShortenedUrl({ originalUrl, shortenedUrl }) {
  const [copySuccess, setCopySuccess] = useState('Copy');
  const copyLink = useRef(null);

  function copyToClipboard() {
    setCopySuccess('Copied!');
    copyLink.current.classList.add('copied');
  };

  return (
    <ShortenedLinkBox>
      <OriginalLink>{originalUrl}</OriginalLink>

      <CopyLinkContainer>

        <ShortenedLink>{shortenedUrl}</ShortenedLink>
        <CopyButtonContainer>

          <CopyToClipboard
            text={shortenedUrl}
            onCopy={() => copyToClipboard()}>
            <CopyButton ref={copyLink}>{copySuccess}</CopyButton>
          </CopyToClipboard>

        </CopyButtonContainer>

      </CopyLinkContainer>

    </ShortenedLinkBox>
  );
}

export default ShortenedUrl;