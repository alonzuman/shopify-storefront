import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { menuItems } from '../../constants'
import useScrollPosition from '../../hooks/useScrollPosition';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  padding: 0 16px;
  background-color: ${p => p.backgroundColor};
  z-index: 9;
  width: 100%;
  transition: background-color .5s ease-in-out;
`

const NavMenu = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0;
`

const NavItem = styled.li`
  list-style: none;
  padding: 16px 32px;
`

const Nav = () => {
  const { scrollPosition } = useScrollPosition();

  return (
    <NavContainer backgroundColor={scrollPosition === 0 ? 'transparent' : 'white'}>
      <NavMenu>
        {menuItems.map((v, i) => (
          <NavItem key={i}>
            <NavLink to={v.path}>
              {v.label}
            </NavLink>
          </NavItem>
        ))}
      </NavMenu>
    </NavContainer>
  )
}

export default Nav
