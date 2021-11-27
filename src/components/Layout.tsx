import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import DesktopImage from '../assets/home/background-home-desktop.jpg';
import Header from './Header';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  min-height:100vh;
  font-family: Barlow;
  color:white;
  /* background-color: red; */
}
`;

interface ImagesType {
  desktop: string;
  mobile: string;
  tablet: string;
}
interface LayoutProps {
  images: ImagesType;
  currentPage: string;
  children?: React.ReactNode;
}

interface BackgroundProps {
  images: ImagesType;
}

const Background = styled.div<BackgroundProps>`
  background: url(${({ images }) => images.desktop}) no-repeat fixed center;
  background-size: cover;
  height: 100vh;

  @media (max-width: 800px) {
    background-image: url(${({ images }) => images.tablet});
    /* background-size: 100vw 100vh; */
  }
  @media (max-width: 400px) {
    background-image: url(${({ images }) => images.mobile});
    /* background-size: 100vw 100vh; */
  }
`;
const Layout = ({ images, currentPage, children }: LayoutProps) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Background images={images}>
        <Header currentPage={currentPage} />
        {children}
      </Background>
    </React.Fragment>
  );
};

export default Layout;
