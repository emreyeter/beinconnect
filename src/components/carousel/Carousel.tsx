import React from 'react'
import { Grid, Autoplay, Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { fakeProduct } from '../../faker/faker'
import { Container, ImageContainer } from './Carousel.styles'

function Carousel() {
    
    const slides =  
         fakeProduct.slice(0,10).map((item,index) => {
            return (
                <SwiperSlide virtualIndex={index} key={index}>
                    <ImageContainer src={item.image_hq} />
                </SwiperSlide>
            )
        })
    

  return (
    <Container>

        <Swiper 
        modules={[Grid,Autoplay, Pagination,Navigation]}
        pagination={{clickable: true}}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            
        }}
        navigation={{enabled: true}}
        loop={true}
        >
            {slides}
        </Swiper>
    </Container>
  )
}

export default Carousel