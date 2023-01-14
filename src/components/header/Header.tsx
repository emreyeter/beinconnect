import React from 'react'
import { Body, Container, HeaderText } from './Header.styles'

function Header() {
  return (
    <Container>
        <Body>
            <HeaderText text='Header' />
        </Body>
    </Container>
  )
}

export default Header