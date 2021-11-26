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
  /* margin: 25px; */
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 112px;
  /* height: 100%; */
  color: #d0d6f9;
  h2 {
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    text-transform: uppercase;
    margin: 0;
  }
  h1 {
    font-family: Bellefair;
    text-transform: uppercase;
    font-style: normal;
    font-weight: normal;
    font-size: 80px;
    line-height: 100px;
    margin: 16px 0 16px 0;
    color: #ffffff;
  }
  p {
    font-family: Barlow;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    margin: 0 1.5rem;
  }
`;

const IndexPageContent = () => {
  return (
    <ContentContainer>
      <div>
        <h2>So, you want to travel to</h2>
        <h1> Space</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of
          on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
        </p>
      </div>
    </ContentContainer>
  );
};

const IndexPage = () => {
  return (
    <div>
      <Layout images={images}>
        <IndexPageContent />
      </Layout>
    </div>
  );
};

export default IndexPage;
