import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';
import { breakpoints } from './utilities/breakpoint';

const GlobalStyle = createGlobalStyle<BackgroundProps>`
body {
  margin: 0;
  min-height:100vh;
  background: url(${({ images }) => images.desktop}) no-repeat center center fixed;
  background-size: cover;

  font-family: Barlow;
  color:white;
  @media (max-width: ${breakpoints.lg}}) {
    background-image: url(${({ images }) => images.tablet});
  }

  @media (max-width: ${breakpoints.sm}) {
    background-image: url(${({ images }) => images.mobile});
  }
}
html {
  min-height:100vh;
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
  height: 100vh;
  display: flex;
  flex-flow: column;
`;

const HeaderSpacer = styled.div`
  height: 20%;
  flex: 0 1 auto;

  @media (max-width: ${breakpoints.lg}) {
    height: 120px;
  }

  @media (max-width: ${breakpoints.sm}) {
    height: 80px;
  }
`;

const MainContent = styled.div`
  flex: 1 1 auto;
`;

const Layout = ({ images, currentPage, children }: LayoutProps) => {
  return (
    <React.Fragment>
      <GlobalStyle images={images} />
      <Header currentPage={currentPage} />
      <MainContainer>
        <HeaderSpacer />
        <MainContent>{children}</MainContent>
      </MainContainer>
    </React.Fragment>
  );
};

export default Layout;
