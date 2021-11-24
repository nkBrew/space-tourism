import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Layout from '../components/Layout';
import DesktopImage from '../assets/home/background-home-desktop.jpg';
import MobileImage from '../assets/home/background-home-mobile.jpg';
import TabletImage from '../assets/home/background-home-tablet.jpg';

const images = { desktop: DesktopImage, mobile: MobileImage, tablet: TabletImage };
const IndexPage = () => {
  return (
    <div>
      <Layout images={images} />
    </div>
  );
};

export default IndexPage;
