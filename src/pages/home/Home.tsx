import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import ScreenView from '../../components/screen-view/ScreenView'
import Swipeable from '../../components/swiper/Swipeable'

const Home = () => {
  return (
   <ScreenView>
        <Carousel />
        <Swipeable/>
   </ScreenView>
  )
}

export default Home