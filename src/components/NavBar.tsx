import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background: hsl(0, 0%, 100%, 0.1);
  backdrop-filter: blur(1rem);
  height: 96px;
  display: flex;
  align-items: center;

  @media (min-width: 769px) {
    width: 100%;
    padding: 0 10vw 0 5vw;
  }

  @media (max-width: 400px) {
    display: ${({ show }: { show: boolean }) => (show ? 'flex' : 'none')};
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    inset: 0 0 0 30%;
  }
`;

const NavUl = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;
  height: 100%;

  @media (max-width: 400px) {
    height: 100%;
    width: 100%;
    padding-top: 15rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const NavLink = styled.li<NavLinkProps>`
  position: relative;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
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

  &:after {
    content: '';
    display: ${({ isOnPage }) => (isOnPage ? 'initial' : 'none')};
    position: absolute;
    background: #ffffff;
    width: 95%;
    height: 3px;
    bottom: 0;
  }

  @media (min-width: 400px) and (max-width: 768px) {
    span {
      display: none;
    }
  }

  @media (max-width: 400px) {
    &:after {
      bottom: -10px;
    }
    height: auto;
  }
`;

interface NavLinkProps {
  isOnPage: boolean;
}

interface NavBarProps {
  show: boolean;
  currentPage: string;
}

const LinkDetails = [
  { pageNumber: '00', title: 'home', link: '/' },
  { pageNumber: '01', title: 'destination', link: '/destination' },
  { pageNumber: '02', title: 'crew', link: '/crew' },
  { pageNumber: '03', title: 'technology', link: '/technology' },
];

const NavBar = ({ show, currentPage }: NavBarProps) => {
  console.log(currentPage);
  const renderNavLinks = () => {
    const navLinks: JSX.Element[] = [];
    return LinkDetails.map((ld) => (
      <NavLink isOnPage={currentPage == ld.title} key={'nav-' + ld.title}>
        <Link to={ld.link}>
          <span>{ld.pageNumber}</span>
          {ld.title}
        </Link>
      </NavLink>
    ));
  };
  return (
    <Nav show={show}>
      <NavUl>
        {renderNavLinks()}
        {/* <NavLink>
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
        </NavLink> */}
      </NavUl>
    </Nav>
  );
};

export default NavBar;
