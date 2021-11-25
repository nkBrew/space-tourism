import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import Icon from '../assets/shared/logo.svg';

const StyledHeader = styled.header`
  /* background: blue; */
  padding-left: 55px;
  padding-top: 40px;
`;

const InnerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooDiv = styled.div`
  position: relative;
  flex: 2;
  display: flex;
  align-items: center;
  &:after {
    /* content: ''; */
    background: hsl(0, 0%, 100%, 0.25);
    /* width: 70%; */
    left: 150px;
    height: 1px;
    right: -20px;
    z-index: 1;
    position: absolute;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <InnerHeader>
        <FooDiv>
          <Icon />
        </FooDiv>
        <NavBar />
      </InnerHeader>
    </StyledHeader>
  );
};

export default Header;
