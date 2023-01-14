import React from 'react'
import { fakeProduct } from '../../faker/faker'
import { CardBottom, CardDescription, CardDescriptionContainer, CardDescriptionYear, CardHeader, CardTop, Container } from './Card.styles'

import StarRatings from 'react-star-ratings'
import { useNavigate } from 'react-router-dom'

type CardProps = typeof fakeProduct[number]

function Card(props : CardProps) {

const {image, model, rating, year,description} = props

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/movie-info`, {
            state: props
        })
    }

  return (
    <Container onClick={handleClick} style={{backgroundImage : `url(${image})`}} >

        <CardDescriptionContainer >
            <CardTop>
                <CardHeader text={model} />
                <CardDescriptionYear text={year.toString()} />
            </CardTop>
            <CardBottom>
                <StarRatings 
                    numberOfStars={5}
                    rating={rating}
                    starDimension="16px"
                    starSpacing='0px'
                    starRatedColor="yellow"
                    />
                <CardDescription text={description} />
            </CardBottom>
        </CardDescriptionContainer>
    </Container>
  )
}

export default Card