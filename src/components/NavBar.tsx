import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Icon from '../assets/shared/logo.svg';
import CloseIcon from '../assets/shared/icon-close.svg';

const Nav = styled.nav`
  background: hsl(0, 0%, 100%, 0.1);
  /* width: 60%; */
  backdrop-filter: blur(1rem);
  height: 96px;
  display: flex;
  align-items: center;
  @media (max-width: 400px) {
    display: ${({ show }: { show: boolean }) => (show ? 'flex' : 'none')};
    /* display: none; */
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    /* width: 60vw; */
    /* position: fixed; */
    /* width: 100%; */
    inset: 0 0 0 30%;
  }
`;

const NavUl = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;

  @media (max-width: 400px) {
    height: 100%;
    width: 100%;
    /* padding-top: 10rem; */
    flex-direction: column;
    justify-content: center;
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
    text-transform: uppercase;
    > span {
      font-weight: bold;
      padding-right: 0.5rem;
    }
  }
`;

interface NavBarProps {
  show: boolean;
}

const NavBar = ({ show }: NavBarProps) => {
  return (
    <Nav show={show}>
      <NavUl>
        <NavLink>
          <Link to="/">
            <span>00</span>Home
          </Link>
        </NavLink>
        <NavLink>
          <Link to="/destination">
            <span>01</span>Destination
          </Link>
        </NavLink>
        <NavLink>
          <Link to="/crew">
            <span>02</span>Crew
          </Link>
        </NavLink>
        <NavLink>
          <Link to="/technology">
            <span>03</span>Technology
          </Link>
        </NavLink>
      </NavUl>
    </Nav>
  );
};

export default NavBar;
