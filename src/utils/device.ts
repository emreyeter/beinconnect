import { SwiperOptions } from "swiper"

export const DEVICE_BREAKPOINTS = {
    XS: 0,
    SM: 576,
    MD: 768,
    LG: 992,
    XL: 1200,
    XXL: 1400
}

interface Breakpoints {
    [width: number]: SwiperOptions;
    [ratio: string]: SwiperOptions;
  }
    

export const SLIDE_BREAKPOINTS: Breakpoints = {
    [DEVICE_BREAKPOINTS.XS]: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 10,
    },
    [DEVICE_BREAKPOINTS.SM]: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 10,
    },
    [DEVICE_BREAKPOINTS.MD]: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 10,
    },
    [DEVICE_BREAKPOINTS.XL]: {
        slidesPerView: 6,
        slidesPerGroup: 6,
        spaceBetween: 10,
    },
}
