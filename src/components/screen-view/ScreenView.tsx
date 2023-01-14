import React from 'react'
import Header from '../header/Header'
import { Container } from './ScreenView.styles'

interface ScreenViewProps {
    children: React.ReactNode
}

function ScreenView(props : ScreenViewProps) {
  return (
    <>
        <Header />
        <Container>
            {props.children}
        </Container>
    </>
  )
}

export default ScreenView