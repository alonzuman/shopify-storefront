import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { footerData } from '../../constants'
import Typography from '../atoms/Typography'

const FooterContainer = styled.footer`
  display: flex;
  padding: 16px;
  background-color: #fafafa;
`

const FooterMenu = styled.div`
  padding: 8px 16px;
`

const MenuItems = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
`

const MenuItem = styled.li`
  list-style: none;
  margin-bottom: 8px;
`

const Footer = () => {
  return (
    <FooterContainer>
      {footerData?.menus?.map((v, i) => (
        <FooterMenu>
          <Typography variant='h3'>{v.name}</Typography>
          <MenuItems>{v?.links?.map((v, i) => (
            <Link to={v.path}>
              <MenuItem >{v.name}</MenuItem>
            </Link>
          ))}
          </MenuItems>
        </FooterMenu>
      ))}
    </FooterContainer>
  )
}

export default Footer
