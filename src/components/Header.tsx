import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import Icon from '../assets/shared/logo.svg';
import HamburgerIcon from '../assets/shared/icon-hamburger.svg';
import CloseIcon from '../assets/shared/icon-close.svg';

const StyledHeader = styled.header`
  /* background: blue; */
  /* padding-left: 55px; */
  /* padding-top: 40px; */
  position: relative;
`;

const InnerContainer = styled.div`
  position: absolute;
  top: 40px;
  left: 55px;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 400px) {
    /* display: contents; */
    top: 24px;
    left: 24px;
    right: 24px;

    /* flow-direction: column; */
    /* justify-content: flex-start; */
    /* align-items: flex-start; */
  }
`;

const StyledIcon = styled(Icon)`
  @media (max-width: 400px) {
    /* position: absolute; */
    /* top: 24px;
    left: 24px; */
  }
`;

const IconWrapper = styled.div`
  /* position: relative;
  flex: 2;
  display: flex;
  align-items: center; */
  @media (max-width: 400px) {
    position: absolute;
    top: 24px;
    left: 24px;
  }
  &:after {
    /* content: '';
    background: hsl(0, 0%, 100%, 0.25);
    width: 70%;
    left: 150px;
    height: 1px;
    right: -20px;
    z-index: 1;
    position: absolute; */
  }
`;

const NavButton = styled.button`
  display: none;
  z-index: 9999;
  background: none;
  border: none;
  @media (max-width: 400px) {
    display: flex;
  }
`;

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <StyledHeader>
      <InnerContainer>
        <StyledIcon />
        <NavButton onClick={() => setShow(!show)}>{show ? <CloseIcon /> : <HamburgerIcon />}</NavButton>
        <NavBar show={show} />
      </InnerContainer>
    </StyledHeader>
  );
};

export default Header;
