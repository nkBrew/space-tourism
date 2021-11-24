import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Icon from '../assets/shared/logo.svg';

const Nav = styled.nav``;

const NavUl = styled.ul`
  background-color: blue;
  display: flex;
`;

const NavLink = styled.li`
  background-color: red;
  flex: 1;
  list-style-type: none;
  > a {
    font-size: 16px;
    font-family: Barlow Condensed;
    color: #ffffff;
    text-decoration: none;
    letter-spacing: 2.7px;
    > span {
      font-weight: bold;
      margin-inline-end: 0.5em;
    }
  }
`;

const Logo = styled.li`
  flex: 3;
`;

const NavBar = () => {
  return (
    <React.Fragment>
      <div>
        <Nav>
          <NavUl>
            <Logo>
              <Icon />
            </Logo>
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
          </NavUl>
        </Nav>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
