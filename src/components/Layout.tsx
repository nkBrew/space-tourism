import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import DesktopImage from '../assets/home/background-home-desktop.jpg';
import Header from './Header';
import NavBar from './NavBar';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  min-height:100vh;
  font-family: Barlow;
  color:white;
  /* background-color: red; */
}
`;
interface LayoutProps {
  images: { desktop: string; mobile: string; tablet: string };
  children?: React.ReactNode;
}

const Background = styled.div<LayoutProps>`
  background: url(${DesktopImage}) no-repeat fixed center;
  background-size: cover;
  height: 100vh;

  @media (max-width: 800px) {
    background-image: url(${(props) => props.images.tablet});
    background-size: 100vw 100vh;
  }
  @media (max-width: 400px) {
    background-image: url(${(props) => props.images.mobile});
    background-size: 100vw 100vh;
  }
`;
const Layout = ({ images, children }: LayoutProps) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Background images={images}>
        <Header />
        {children}
      </Background>
    </React.Fragment>
  );
};

export default Layout;
