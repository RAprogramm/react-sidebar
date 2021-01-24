import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 28px;
  font-family: Caveat;
  text-shadow: 2px 2px 1px #632ce4;

  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
    text-shadow: 4px 4px 3px #632ce4;
    transition: 300ms;
  }
`

const SidebarLabel = styled.span`
  margin-left: 18px;
`

const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 4rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 25px;
  font-family: Caveat;
  text-shadow: 2px 2px 1px #632ce4;
  transition: 500ms;

  &:hover {
    background: linear-gradient(to right, #632ce4, #ee82ee);
    cursor: pointer;
    transition: 300ms;
    text-shadow: 2px 2px 2px black;
  }
`

const DropdownMenu = ({ menuElement }) => {
  const [dropdown, setDropdown] = useState(false)

  const showDropdownMenu = () => setDropdown(!dropdown)

  return (
    <>
      <SidebarLink
        to={menuElement.path}
        onClick={menuElement.dropdownMenu && showDropdownMenu}
      >
        <div>
          {menuElement.icon}
          <SidebarLabel>{menuElement.title}</SidebarLabel>
        </div>
        <div>
          {menuElement.dropdownMenu && dropdown
            ? menuElement.iconOpened
            : menuElement.dropdownMenu
            ? menuElement.iconClosed
            : null}
        </div>
      </SidebarLink>
      {dropdown &&
        menuElement.dropdownMenu.map((dropElement, index) => {
          return (
            <DropdownLink to={dropElement.path} key={index}>
              <SidebarLabel>{dropElement.title}</SidebarLabel>
            </DropdownLink>
          )
        })}
    </>
  )
}

export default DropdownMenu
