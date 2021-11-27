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

  @media (max-width: 768px) {
    top: 0px;
  }

  @media (max-width: 400px) {
    /* display: contents; */
    top: 24px;
    left: 24px;
    right: 24px;
  }
`;

const IconWrapper = styled.div`
  @media (min-width: 769px) {
    position: relative;
    width: 100%;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    &:after {
      content: '';
      color: red;
      background: hsl(0, 0%, 100%, 0.25);
      /* width: 70%; */
      left: 150px;
      height: 1px;
      right: -10px;
      z-index: 1;
      position: absolute;
    }
  }
`;

const StyledIcon = styled(Icon)`
  @media (max-width: 400px) {
    /* position: absolute; */
    /* top: 24px;
    left: 24px; */
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

interface HeaderProps {
  currentPage: string;
}

const Header = ({ currentPage }: HeaderProps) => {
  const [show, setShow] = useState(false);
  return (
    <StyledHeader>
      <InnerContainer>
        {/* <StyledIcon /> */}
        <IconWrapper>
          <Icon />
        </IconWrapper>
        <NavButton onClick={() => setShow(!show)}>{show ? <CloseIcon /> : <HamburgerIcon />}</NavButton>
        <NavBar currentPage={currentPage} show={show} />
      </InnerContainer>
    </StyledHeader>
  );
};

export default Header;
