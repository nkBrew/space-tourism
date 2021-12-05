import React, { useEffect, useState } from 'react';
import useTechnology from '../hooks/use-technology';
import DesktopImage from '../assets/technology/background-technology-desktop.jpg';
import TabletImage from '../assets/technology/background-technology-tablet.jpg';
import MobileImage from '../assets/technology/background-technology-mobile.jpg';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { breakpoints, breakpointsNumerical } from '../components/utilities/breakpoint';
import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image';

const backgroundImages = { desktop: DesktopImage, tablet: TabletImage, mobile: MobileImage };

const TechnologyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  height: 100%;

  @media (max-width: ${breakpoints.lg}) {
    margin: 0;
  }
`;

const TechnologyDetailsContainer = styled.div`
  /* height: 100%; */
  display: flex;
  justify-content: space-between;
  > * {
    flex: 0 40%;
  }
  align-items: center;
  @media (max-width: ${breakpoints.lg}) {
    flex-direction: column;
  }
`;

const TechnologyInnerDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin-top: 8%;
  gap: 1rem;
  @media (max-width: ${breakpoints.lg}) {
    order: 2;
  }
`;

const PageHeading = styled.div`
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

const SubHeading = styled.div`
  font-family: Barlow Condensed;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;
`;

const MainHeading = styled.div`
  font-family: Bellefair;
  font-style: normal;
  font-weight: normal;
  font-size: 56px;
  line-height: 64px;
  text-transform: uppercase;
  flex: 0;
`;

const Paragraph = styled.p`
  font-family: Barlow;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;
  /* or 178% */

  color: #d0d6f9;
`;

const GatsbyImageContainer = styled.div`
  width: max-content;
  @media (max-width: ${breakpoints.lg}) {
    margin: 0;
    order: 0;
    width: 100%;
  }
`;

const GatsbyImageWrapper = styled.div`
  /* height: auto; */
  /* margin: 0; */
  /* width: 100%; */

  @media screen and (min-width: ${breakpoints.lg}) {
    /* width: 100%; */
    /* height: 310px; */

    .art-directed {
      width: 515px;
      height: 527px;
    }
  }
`;

interface TechCircleProps {
  selected: boolean;
  onClick: () => void;
}

const TechCircle = styled.div<TechCircleProps>`
  width: 80px;
  height: 80px;
  color: ${({ selected }) => (selected ? '#000000' : '#ffffff')};
  background-color: ${({ selected }) => (selected ? '#ffffff' : 'transparent')};
  border: 1px solid #ffffff25;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Bellefair;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  /* line-height: 37px; */
  /* letter-spacing: 2px; */
`;

const TechBar = styled.div`
  flex: 0 1;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  /* justify-content: space-between; */
  @media (max-width: ${breakpoints.lg}) {
    margin: 0;
    order: 1;
    flex-direction: row;
  }
`;

enum DEVICE {
  MOBILE,
  TABLET,
  DESKTOP,
}

const Technology = () => {
  const technologies = useTechnology();
  const [selected, setSelected] = useState('Launch vehicle');
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const device =
    screenWidth > breakpointsNumerical.lg
      ? DEVICE.DESKTOP
      : screenWidth > breakpointsNumerical.sm
      ? DEVICE.TABLET
      : DEVICE.MOBILE;

  const technology = technologies[selected];
  const imageType = device === DEVICE.DESKTOP ? technology.images.portrait : technology.images.landscape;

  const image = getImage(imageType);
  const images = withArtDirection(getImage(technology.images.landscape)!, [
    {
      media: '(min-width: 768px)',
      image: getImage(technology.images.portrait)!,
    },
  ]);

  const renderTechCircles = () => {
    return Object.values(technologies).map((t, i) => (
      <TechCircle key={'tech-circle-' + i} selected={t.name === selected} onClick={() => setSelected(t.name)}>
        {i}
      </TechCircle>
    ));
  };
  console.dir(images);
  return (
    <Layout images={backgroundImages} currentPage="technology">
      <TechnologyContainer>
        <PageHeading>
          <span>03</span> Space Launch 101
        </PageHeading>
        <TechnologyDetailsContainer>
          <TechBar>{renderTechCircles()}</TechBar>
          <TechnologyInnerDetailsWrapper>
            <SubHeading>The Technology...</SubHeading>
            <MainHeading>{technology.name}</MainHeading>
            <Paragraph>{technology.description}</Paragraph>
          </TechnologyInnerDetailsWrapper>
          {image && (
            <GatsbyImageContainer>
              <GatsbyImageWrapper>
                <GatsbyImage className="art-directed" image={images} alt="none" />
              </GatsbyImageWrapper>
            </GatsbyImageContainer>
          )}
        </TechnologyDetailsContainer>
      </TechnologyContainer>
    </Layout>
  );
};

export default Technology;
