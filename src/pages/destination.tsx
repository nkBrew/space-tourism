import React from 'react';
import Layout from '../components/Layout';
import DesktopImage from '../assets/destination/background-destination-desktop.jpg';
import TabletImage from '../assets/destination/background-destination-tablet.jpg';
import MobileImage from '../assets/destination/background-destination-mobile.jpg';

const backgroundImages = { desktop: DesktopImage, tablet: TabletImage, mobile: MobileImage };

const Destination = () => {
  return <Layout currentPage="destination" images={backgroundImages}></Layout>;
};

export default Destination;
