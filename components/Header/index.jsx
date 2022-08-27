import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Container, Title, NavLinks, Ancora, Content, Menu, CloseSidebar, ContentTitle, SubTitle } from './style'

const Header = () => {
  const [sidebar, setSidebar] = useState(false)
  const { asPath } = useRouter()

  const showSiderbar = () => setSidebar(!sidebar)

  const activeLink = (path) =>{
    return asPath === `/${path}` ? 'active' : ''
  }

  return (
    <Container>
      <Content>
        <ContentTitle>
          <Title>
            Ivanilton Neto
          </Title>
          <SubTitle>
            Portfolio Pessoal
          </SubTitle>
        </ContentTitle>
        <Menu>
          <FaBars onClick={showSiderbar} />
        </Menu>
        <NavLinks sidebar={sidebar}>
          <CloseSidebar onClick={showSiderbar}><FaTimes /></CloseSidebar>
          <Link href="/">
            <Ancora className={activeLink('')} onClick={showSiderbar}>Home</Ancora>
          </Link>
          <Link href="projects">
            <Ancora className={activeLink('projects')} onClick={showSiderbar}>Projetos</Ancora>
          </Link>
          <Link href="contact">
            <Ancora className={activeLink('contact')} onClick={showSiderbar}>Contato</Ancora>
          </Link>
        </NavLinks>
      </Content>
    </Container>
  )
}

export default Header