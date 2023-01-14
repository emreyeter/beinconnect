import React from 'react'
import { SwiperSlide } from 'swiper/react'
import { fakeProduct } from '../../faker/faker'
import Card from '../card/Card'

interface SlidesProps {
    category : typeof fakeProduct[number]['category']
}

function Slides(props: SlidesProps) {

    const {category} = props

    const filtered = fakeProduct.filter(product => product.category.id === category.id)

    return filtered.map((product, index) => {
            return (
              <SwiperSlide 
                key={index}
                virtualIndex={index} 
                >
                <Card {...product} />
              </SwiperSlide>
            )
    })
}

export default Slides