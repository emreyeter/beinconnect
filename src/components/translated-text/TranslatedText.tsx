import React from 'react'
import { Container } from './TranslatedText.styles'


interface TranslatedTextProps {
    text: string
    className?: string
}


function TranslatedText(props : TranslatedTextProps) {
    const { text, className } = props
  return (
    <Container className={className}>{text}</Container>
  )
}

export default TranslatedText