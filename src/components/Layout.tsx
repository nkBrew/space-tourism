import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import DesktopImage from '../assets/home/background-home-desktop.jpg';
import Header from './Header';
import { breakpoints } from './utilities/breakpoint';

const GlobalStyle = createGlobalStyle<BackgroundProps>`
body {
  margin: 0;
  min-height:100vh;
  background: url(${({ images }) => images.desktop}) no-repeat center center fixed;
  background-size: cover;

  /* min-width:100vw;  */
  font-family: Barlow;
  color:white;
  /* background-color: red; */
  @media (max-width: 800px) {
    background-image: url(${({ images }) => images.tablet});
  }

  @media (max-width: 400px) {
    background-image: url(${({ images }) => images.mobile});
  }
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

const MainContainer = styled.div`
  /* padding-top: 200px; */
  height: 100vh;
  display: flex;
  flex-flow: column;
`;

const HeaderSpacer = styled.div`
  height: 200px;
  flex: 0 1 auto;

  @media (max-width: ${breakpoints.lg}) {
    height: 120px;
  }
`;

const MainContent = styled.div`
  flex: 1 1 auto;
`;

const Background = styled.div<BackgroundProps>`
  background: url(${({ images }) => images.desktop}) no-repeat center center fixed;
  /* position: absolute; */
  /* width: 100%; */
  /* height: 100%; */
  /* top: 0; */
  background-size: cover;
  /* height: 100vh; */

  @media (max-width: 800px) {
    background-image: url(${({ images }) => images.tablet});
    /* background-size: cover; */
    /* height: 100%; */
    /* width: 100vw; */
  }
  @media (max-width: 400px) {
    background-image: url(${({ images }) => images.mobile});
    /* background-size: cover; */
    /* height: 100%; */
  }
`;
const Layout = ({ images, currentPage, children }: LayoutProps) => {
  return (
    <React.Fragment>
      <GlobalStyle images={images} />
      {/* <Background images={images}> */}
      <Header currentPage={currentPage} />

      <MainContainer>
        <HeaderSpacer />
        <MainContent>{children}</MainContent>
      </MainContainer>

      {/* </Background> */}
    </React.Fragment>
  );
};

export default Layout;
