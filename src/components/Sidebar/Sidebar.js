import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './SidebarData'
import DropdownMenu from './DropdownMenu'
import { IconContext } from 'react-icons/lib'

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: all 300ms ease-in;

  &:hover {
    font-size: 2.5rem;
    transition: all 300ms ease-out;
  }
`

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 400ms;
  z-index: 10;
`

const SidebarWrap = styled.div`
  width: 100%;
`

const NavTitle = styled.div`
  color: violet;
  font-family: Caveat;
  font-size: 3.5rem;
  position: absolute;
  right: 0;
  margin-right: 1rem;
  text-shadow: 1px 5px 5px #632ce4;
  transition: all 400ms ease-in;

  &:hover {
    text-shadow: 1px 5px 5px #ee82ee;
    transition: all 400ms ease-out;
  }
`

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <IconContext.Provider value={{ color: 'violet' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <NavTitle>Side Bar</NavTitle>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((menuElement, index) => {
              return (
                <DropdownMenu menuElement={menuElement} key={index} />
              )
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  )
}

export default Sidebar
