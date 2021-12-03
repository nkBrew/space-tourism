import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { useCrew } from '../hooks/use-crew';
import DesktopImage from '../assets/crew/background-crew-desktop.jpg';
import TabletImage from '../assets/crew/background-crew-tablet.jpg';
import MobileImage from '../assets/crew/background-crew-mobile.jpg';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { breakpoints } from '../components/utilities/breakpoint';

const CrewContentContainer = styled.div`
  margin: 0 15%;
  display: flex;
  flex-direction: column;
  height: 100%;
  @media (max-width: ${breakpoints.lg}) {
    overflow: hidden;
  }
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

  @media (max-width: ${breakpoints.lg}) {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 3.375px;
    > span {
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 3.375px;
    }
  }
`;

const CrewDetailsContainer = styled.div`
  padding-top: 10%;
  display: flex;
  gap: 3rem;
  height: 100%;

  @media (max-width: ${breakpoints.lg}) {
    padding-top: 5%;
    flex-direction: column;
    /* justify-content: center; */
    /* align-self: center; */
  }
`;

const CrewInnerDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1 50%;
  > * {
    flex: 1;
  }

  @media (max-width: ${breakpoints.lg}) {
    gap: 0.5rem;
    > * {
      text-align: center;
    }
    flex: 0 auto;
  }
`;

const RoleHeading = styled.div`
  font-family: Bellefair;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 37px;
  text-transform: uppercase;
  flex: 0;
  color: #ffffff;

  mix-blend-mode: normal;
  opacity: 0.5;
  @media (max-width: ${breakpoints.lg}) {
    font-size: 24px;
    line-height: 28px;
  }
`;

const NameHeading = styled.div`
  font-family: Bellefair;
  font-style: normal;
  font-weight: normal;
  font-size: 56px;
  line-height: 64px;
  text-transform: uppercase;
  flex: 1 4;
  color: #ffffff;
  /* flex: 1; */
  @media (max-width: ${breakpoints.lg}) {
    font-size: 40px;
    line-height: 46px;
    flex: 0;
  }
`;

const CrewDetailsP = styled.p`
  font-family: Barlow;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;
  /* flex-basis: 40%; */
  flex: 2;
  color: #d0d6f9;
  @media (max-width: ${breakpoints.lg}) {
    font-size: 16px;
    line-height: 28px;
    flex: 0.5;
  }
`;

const GatsbyImageContainer = styled.div`
  flex: 1 50%;
  position: relative;
  /* @media (max-width: ${breakpoints.lg}) {
    position: static;
  } */
`;

const GatsbyImageWrapper = styled.div`
  /* width: 30%; */
  z-index: -1000;
  position: absolute;
  bottom: 0;
  width: 600px;
  @media (max-width: ${breakpoints.lg}) {
    /* position: static; */
    /* width: 100%; */
    /* bottom: -50px; */
    top: -50px;
    width: 400px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    /* height: 200px; */
    /* margin: auto; */
    /* margin-left: 15%; */
    /* margin-right: 15%; */
    /* padding: 20%; */
  }
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

  @media (max-width: ${breakpoints.lg}) {
    justify-content: center;
    flex: 0;
  }
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
            {/* <div style={{ overflow: 'hidden' }}> */}
            <GatsbyImageWrapper>
              <GatsbyImage image={getImage(crewMan.images.webp)!} alt="none" />
            </GatsbyImageWrapper>
            {/* </div> */}
          </GatsbyImageContainer>
        </CrewDetailsContainer>
      </CrewContentContainer>
    </Layout>
  );
};

export default Crew;
