import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Layout from '../components/Layout';
import DesktopImage from '../assets/home/background-home-desktop.jpg';
import MobileImage from '../assets/home/background-home-mobile.jpg';
import TabletImage from '../assets/home/background-home-tablet.jpg';

const images = { desktop: DesktopImage, mobile: MobileImage, tablet: TabletImage };

const ContentContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #d0d6f9;
  flex-direction: row;
  padding-top: 40vh;
  margin: 0 5rem;

  > * {
    flex: 1;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    > div {
      max-width: 450px;
    }
  }

  h2 {
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 4.725px;
    text-transform: uppercase;
    margin: 0;
  }
  h1 {
    font-family: Bellefair;
    text-transform: uppercase;
    font-style: normal;
    font-weight: normal;
    font-size: 150px;
    line-height: 172px;
    margin: 16px 0 16px 0;
    color: #ffffff;
  }
  p {
    font-family: Barlow;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;
    text-align: center;
    margin: 0 1.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 20vh;
  }

  @media (max-width: 400px) {
    padding-top: 112px;
    flex-direction: column;
    margin: 0 0.5rem;

    h2 {
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 2.7px;
    }
    h1 {
      font-size: 80px;
      line-height: 100px;
    }
    P {
      font-size: 15px;
      line-height: 25px;
    }
  }
`;

const CircleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ExploreCircle = styled.div`
  height: 274px;
  width: 274px;
  border-radius: 50%;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10vh;

  div {
    font-family: Bellefair;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 37px;
    letter-spacing: 2px;
    color: #0b0d17;
  }

  @media (max-width: 400px) {
    height: 150px;
    width: 150px;
    margin-top: 6vh;
    div {
      text-align: center;
      font-family: Bellefair;
      font-style: normal;
      font-size: 20px;
      line-height: 23px;
      letter-spacing: 1.25px;
    }
  }
`;

const IndexPageContent = () => {
  return (
    <ContentContainer>
      <div>
        <div>
          <h2>So, you want to travel to</h2>
          <h1> Space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind
            of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>
      </div>
      <CircleWrapper>
        <ExploreCircle>
          <div>Explore</div>
        </ExploreCircle>
      </CircleWrapper>
    </ContentContainer>
  );
};

const IndexPage = () => {
  return (
    <div>
      <Layout currentPage="home" images={images}>
        <IndexPageContent />
      </Layout>
    </div>
  );
};

export default IndexPage;
