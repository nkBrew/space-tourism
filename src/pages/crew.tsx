import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { useCrew } from '../hooks/use-crew';
import DesktopImage from '../assets/crew/background-crew-desktop.jpg';
import TabletImage from '../assets/crew/background-crew-tablet.jpg';
import MobileImage from '../assets/crew/background-crew-mobile.jpg';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { breakpoints } from '../components/utilities/breakpoint';

const CrewContentContainer = styled.div`
  margin: 0 15%;
  display: flex;
  flex-direction: column;
  height: 100%;
  @media (max-width: ${breakpoints.lg}) {
    /* overflow: hidden; */
  }

  @media (max-width: ${breakpoints.sm}) {
    margin: 0 5%;
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
  @media (max-width: ${breakpoints.sm}) {
    text-align: center;
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
  @media (max-width: ${breakpoints.sm}) {
    gap: 1rem;
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

  /* justify-content: space-between; */
  @media (max-width: ${breakpoints.lg}) {
    gap: 0.5rem;
    > * {
      text-align: center;
    }
    flex: 0 0 40%;
  }

  @media (max-width: ${breakpoints.sm}) {
    order: 2;
    justify-content: flex-start;
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
  @media (max-width: ${breakpoints.sm}) {
    order: 1;
    font-size: 16px;
    line-height: 18px;
  }
`;

const NameHeading = styled.div`
  font-family: Bellefair;
  font-style: normal;
  font-weight: normal;
  font-size: 56px;
  line-height: 64px;
  text-transform: uppercase;
  flex: 0;

  color: #ffffff;
  @media (max-width: ${breakpoints.lg}) {
    font-size: 40px;
    line-height: 46px;
  }
  @media (max-width: ${breakpoints.sm}) {
    order: 2;
    font-size: 24px;
    line-height: 28px;
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
    flex: 0 0 40%;
    margin: 0;
  }
  @media (max-width: ${breakpoints.sm}) {
    order: 3;
    font-size: 15px;
    line-height: 25px;
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
  @media (max-width: ${breakpoints.sm}) {
    height: 15px;
    width: 15px;
  }
`;

const CrewBar = styled.div`
  display: flex;
  gap: 2rem;
  flex: 0 1;
  @media (max-width: ${breakpoints.lg}) {
    justify-content: center;
  }

  @media (max-width: ${breakpoints.sm}) {
  }
`;

interface CrewCircleProps {
  selected: boolean;
  onClick: () => void;
}

const GatsbyImageContainer = styled.div`
  flex: 1 0 40%;
  position: relative;

  @media (max-width: ${breakpoints.sm}) {
    flex: 0 0 40%;
    border-bottom: 1px solid #383b4b;
  }
`;

const GatsbyImageWrapper = styled.div<GatsbyImageWrapperProps>`
  /* width: 30%; */
  position: absolute;
  bottom: 0;
  /* width: 600px; */
  @media (max-width: ${breakpoints.lg}) {
    /* position: static; */
    /* width: 100%; */
    /* bottom: -20px; */
    /* top: -50px; */
    width: ${({ height, width }) => (width / height) * 44 + 'vh'};
    /* height: 500px; */

    left: 0;
    right: 0;
    margin: 0 auto;
  }

  @media (max-width: ${breakpoints.sm}) {
    bottom: 0;
    width: ${({ height, width }) => (width / height) * 33 + 'vh'};
    order: 1;
  }
`;
interface GatsbyImageWrapperProps {
  width: number;
  height: number;
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
  const image = getImage(crewMan.images.webp);
  console.log(image?.height);
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
            {image && (
              <GatsbyImageWrapper height={image.height} width={image.width}>
                <GatsbyImage image={image} alt="none" />
              </GatsbyImageWrapper>
            )}
          </GatsbyImageContainer>
        </CrewDetailsContainer>
      </CrewContentContainer>
    </Layout>
  );
};

export default Crew;
