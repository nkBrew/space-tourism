import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import Icon from '../assets/shared/logo.svg';
import HamburgerIcon from '../assets/shared/icon-hamburger.svg';
import CloseIcon from '../assets/shared/icon-close.svg';
import { breakpoints } from './utilities/breakpoint';

const StyledHeader = styled.header`
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

  @media (max-width: ${breakpoints.lg}) {
    top: 0px;
    left: 5%;
  }

  @media (max-width: ${breakpoints.sm}) {
    top: 24px;
    left: 24px;
    right: 24px;
  }
`;

const IconWrapper = styled.div`
  flex: 1;
  @media (min-width: ${breakpoints.lg}) {
    position: relative;
    display: flex;
    align-items: center;
    &:after {
      content: '';
      color: red;
      background: hsl(0, 0%, 100%, 0.25);
      left: 150px;
      height: 1px;
      right: -10px;
      z-index: 1;
      position: absolute;
    }
  }
`;

const NavButton = styled.button`
  display: none;
  z-index: 9999;
  background: none;
  border: none;
  @media (max-width: ${breakpoints.sm}) {
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
