import React from 'react'
import { Grid } from 'swiper'
import { Swiper } from 'swiper/react'
import { fakeCategory } from '../../faker/faker'
import { SLIDE_BREAKPOINTS } from '../../utils/device'
import Slides from '../sildes/Slides'
import { CategoryHeader } from './Swipeable.styles'

function Swipeable() {

  return (
    <>
        {
            fakeCategory.map((category, index) => {
                return (
                  <React.Fragment key={category.id}>
                    <CategoryHeader text={category.name} />
                    <Swiper
                    modules={[Grid]}
                    breakpoints={SLIDE_BREAKPOINTS}
                    >
                      {Slides({category})}
                    </Swiper>
                  </React.Fragment>
                )
              })
        }
    </>
  )
}

export default Swipeable