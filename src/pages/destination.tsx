import React, { useState } from 'react';
import Layout from '../components/Layout';
import DesktopImage from '../assets/destination/background-destination-desktop.jpg';
import TabletImage from '../assets/destination/background-destination-tablet.jpg';
import MobileImage from '../assets/destination/background-destination-mobile.jpg';
import { useDestinations } from '../hooks/useDestinations';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const backgroundImages = { desktop: DesktopImage, tablet: TabletImage, mobile: MobileImage };

const DestinationContainer = styled.div`
  padding-top: 30vh;
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding-top: 12vh;
  }
  @media (max-width: 400px) {
    justify-content: center;
    align-items: center;
  }
`;

const DestinationContentContainer = styled.div`
  display: flex;

  gap: 10%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContentItem = styled.div`
  flex: 1;
  /* background: red; */
`;

const DestinationDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const DestinationHeading = styled.div`
  font-family: Barlow Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 34px;
  /* identical to box height */

  letter-spacing: 4.725px;
  color: #ffffff;
  > span {
    letter-spacing: 4.725px;
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.25;
  }
  text-transform: uppercase;

  @media (max-width: 400px) {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
  }
`;

const DestinationBar = styled.ul`
  width: 80%;
  display: flex;
  list-style-type: none;
  padding: 0;
  margin-bottom: 10%;
  @media (max-width: 768px) {
    margin-top: 50px;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 400px) {
    margin-top: 25px;
  }
`;
const DestinationBarItem = styled.li<DestinationBarItemProps>`
  flex: 1;
  font-family: Barlow Condensed;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;

  > span {
    position: relative;
    text-transform: uppercase;
    text-align: center;
    color: ${({ selected }) => (selected ? '#ffffff' : '#d0d6f9')};

    ::after {
      content: '';
      position: absolute;
      height: 3px;
      background: #ffffff;

      bottom: -15px;
      left: 0;
      right: 0;
      display: ${({ selected }) => (selected ? 'initial' : 'none')};
    }
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  @media (max-width: 400px) {
    font-size: 14px;
    line-height: 17px;

    letter-spacing: 2.3625px;
  }
`;

const GatsbyImageWrapper = styled.div`
  padding-top: 10%;

  @media (min-width: 400px) and (max-width: 768px) {
    padding-left: 15%;
    padding-right: 15%;
  }

  @media (max-width: 400px) {
    padding-left: 20%;
    padding-right: 20%;
  }
`;

const DestinationDetailsHeading = styled.div`
  font-family: Bellefair;
  font-style: normal;
  font-weight: normal;
  font-size: 100px;
  line-height: 115px;
  /* identical to box height */
  text-transform: uppercase;
  color: #ffffff;

  @media (max-width: 400px) {
    font-size: 56px;
    line-height: 64px;
  }
`;

const DetailsP = styled.p`
  font-family: Barlow;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;
  color: #d0d6f9;

  @media (max-width: 400px) {
    font-size: 15px;
    line-height: 25px;
    text-align: center;
  }
`;

const DetailsStatsContainer = styled.div`
  display: flex;
  margin-top: 50px;
  padding-top: 20px;
  border-top: 1px solid #383b4b;
  width: 100%;

  @media (max-width: 400px) {
    margin-top: 10px;
    flex-direction: column;
  }
`;
const DetailsStatsItem = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const DetailsStatsHeading = styled.div`
  font-family: Barlow Condensed;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  letter-spacing: 2.3625px;
  text-transform: uppercase;

  color: #d0d6f9;
`;

const DetailsStatsP = styled.p`
  font-family: Bellefair;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 32px;
  /* identical to box height */
  margin-top: 10px;
  text-transform: uppercase;

  color: #ffffff;
`;

interface DestinationBarItemProps {
  selected: boolean;
  onClick: () => void;
}

const Destination = () => {
  const [selected, setSelected] = useState('Moon');
  const destinations = useDestinations();
  const destination = destinations[selected];

  const renderDestinationBarItems = () => {
    return Object.values(destinations).map((d) => (
      <DestinationBarItem
        onClick={() => setSelected(d.name)}
        selected={d.name === selected}
        key={'destination-bar-' + d.name}
      >
        <span> {d.name}</span>
      </DestinationBarItem>
    ));
  };

  return (
    <Layout currentPage="destination" images={backgroundImages}>
      <DestinationContainer>
        <DestinationHeading>
          <span>01</span> Pick Your Destination
        </DestinationHeading>
        <DestinationContentContainer>
          <ContentItem>
            <GatsbyImageWrapper>
              <GatsbyImage image={getImage(destination.images.png)!} alt="Moon" />
            </GatsbyImageWrapper>
          </ContentItem>
          <ContentItem>
            <DestinationDetailsContainer>
              <DestinationBar>{renderDestinationBarItems()}</DestinationBar>
              <DestinationDetailsHeading>{destination.name}</DestinationDetailsHeading>
              <DetailsP>{destination.description}</DetailsP>
              <DetailsStatsContainer>
                <DetailsStatsItem>
                  <DetailsStatsHeading>Avg Distance</DetailsStatsHeading>
                  <DetailsStatsP> {destination.distance}</DetailsStatsP>
                </DetailsStatsItem>
                <DetailsStatsItem>
                  <DetailsStatsHeading>Est. Travel Time</DetailsStatsHeading>
                  <DetailsStatsP>{destination.travel}</DetailsStatsP>
                </DetailsStatsItem>
              </DetailsStatsContainer>
            </DestinationDetailsContainer>
          </ContentItem>
        </DestinationContentContainer>
      </DestinationContainer>
    </Layout>
  );
};

export default Destination;
