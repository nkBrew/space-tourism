import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Icon from '../assets/shared/logo.svg';
import CloseIcon from '../assets/shared/icon-close.svg';

const Nav = styled.nav`
  background: hsl(0, 0%, 100%, 0.1);
  width: 60%;
  backdrop-filter: blur(1rem);

  @media (max-width: 400px) {
    height: 100vh;
    /* width: 60vw; */
    position: fixed;
    width: 100%;
    inset: 0 0 0 30%;
    /* background: none; */
  }
`;

const NavUl = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 96px;
  /* padding-left: 100px; */

  gap: 3rem;
  @media (max-width: 400px) {
    height: 100vh;
    padding-top: 10rem;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavLink = styled.li`
  /* background: red; */
  > a {
    font-family: Barlow Condensed;
    color: white;
    font-size: 16px;
    letter-spacing: 2.7px;
    text-decoration: none;
    > span {
      font-weight: bold;
      padding-right: 0.5rem;
    }
  }
`;

const CloseLi = styled.li`
  position: absolute;
  top: 2rem;
  right: 200px;

  @media (min-width: 400px) {
    display: none;
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <NavUl>
        <NavLink>
          <Link to="/">
            <span>00</span>HOME
          </Link>
        </NavLink>
        <NavLink>
          <Link to="/destination">
            <span>01</span>DESTINATION
          </Link>
        </NavLink>
        <NavLink>
          <Link to="/crew">
            <span>02</span>CREW
          </Link>
        </NavLink>
        <NavLink>
          <Link to="/technology">
            <span>03</span>TECHNOLOGY
          </Link>
        </NavLink>
        <CloseLi>
          <CloseIcon />
        </CloseLi>
        {/* <CloseIcon /> */}
      </NavUl>
    </Nav>
  );
};

export default NavBar;
