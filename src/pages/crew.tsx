import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { useCrew } from '../hooks/use-crew';
import DesktopImage from '../assets/crew/background-crew-desktop.jpg';
import TabletImage from '../assets/crew/background-crew-tablet.jpg';
import MobileImage from '../assets/crew/background-crew-mobile.jpg';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const CrewContentContainer = styled.div`
  margin: 0 15%;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const CrewHeader = styled.div`
  font-family: Barlow Condensed;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 4.725px;
  text-transform: uppercase;
  color: #ffffff;
  > span {
    font-weight: bold;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 4.725px;
    mix-blend-mode: normal;
    opacity: 0.25;
  }
`;

const CrewDetailsContainer = styled.div`
  padding-top: 10%;
  display: flex;
  gap: 3rem;
  height: 100%;
`;

const CrewInnerDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1 50%;
`;

const RoleHeading = styled.div`
  font-family: Bellefair;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 37px;
  text-transform: uppercase;

  color: #ffffff;

  mix-blend-mode: normal;
  opacity: 0.5;
`;

const NameHeading = styled.div`
  font-family: Bellefair;
  font-style: normal;
  font-weight: normal;
  font-size: 56px;
  line-height: 64px;
  text-transform: uppercase;

  color: #ffffff;
`;

const CrewDetailsP = styled.p`
  font-family: Barlow;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;
  flex-basis: 40%;
  color: #d0d6f9;
`;

const GatsbyImageContainer = styled.div`
  flex: 1 50%;
  position: relative;
`;

const GatsbyImageWrapper = styled.div`
  /* width: 30%; */
  z-index: -1000;
  position: absolute;
  bottom: 0;
`;

const CrewCircle = styled.div<CrewCircleProps>`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #ffffff;
  opacity: ${({ selected }) => (selected ? 1 : 0.17)};
  /* flex: 1 auto; */
  transition: 0.5s;
  :hover {
    opacity: 0.5;
    transition: 0.5s;
  }
`;

const CrewBar = styled.div`
  display: flex;
  gap: 2rem;
`;

interface CrewCircleProps {
  selected: boolean;
  onClick: () => void;
}

const backgroundImages = { desktop: DesktopImage, tablet: TabletImage, mobile: MobileImage };

const Crew = () => {
  const [selected, setSelected] = useState('Douglas Hurley');
  const crew = useCrew();
  const crewMan = crew[selected];

  const renderCrewCircles = () => {
    return Object.values(crew).map((c) => (
      <CrewCircle key={'crew-circle-' + c.name} selected={selected === c.name} onClick={() => setSelected(c.name)} />
    ));
  };

  return (
    <Layout currentPage="Crew" images={backgroundImages}>
      <CrewContentContainer>
        <CrewHeader>
          <span>02</span> Meet your Crew
        </CrewHeader>
        <CrewDetailsContainer>
          <CrewInnerDetailsContainer>
            <RoleHeading>{crewMan.role}</RoleHeading>
            <NameHeading>{crewMan.name}</NameHeading>
            <CrewDetailsP>{crewMan.bio}</CrewDetailsP>
            <CrewBar>{renderCrewCircles()}</CrewBar>
          </CrewInnerDetailsContainer>
          <GatsbyImageContainer>
            <GatsbyImageWrapper>
              <GatsbyImage image={getImage(crewMan.images.webp)!} alt="none" />
            </GatsbyImageWrapper>
          </GatsbyImageContainer>
        </CrewDetailsContainer>
      </CrewContentContainer>
    </Layout>
  );
};

export default Crew;
