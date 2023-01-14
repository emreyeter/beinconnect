import React from 'react'
import { useLocation } from 'react-router-dom'
import ScreenView from '../../components/screen-view/ScreenView'
import { fakeProduct } from '../../faker/faker'
import { Category, Container, Description, ImageContainer, ModelTitle, RightContainer } from './Detail.styles'

type CardProps = typeof fakeProduct[number]

function Detail() {


    
    const {model, image, description, year, category} = useLocation().state as CardProps

    const modelTitle = `${model} (${year})`

  return (
    <ScreenView>
        <Container >
          <ImageContainer src={image} />
          <RightContainer>
            <ModelTitle text={modelTitle} />
            <Category text={category.name} />
            <Description text={description} />
          </RightContainer>
        </Container>

    </ScreenView>
  )
}

export default Detail