import Card from './Card'
import { Swiper, SwiperSlide } from 'swiper/react'
import './carousel.css'
import 'swiper/css'
import { Autoplay, FreeMode } from 'swiper'

const Carousel = ({ data, speed }) => {
  return <Swiper
    modules={[Autoplay, FreeMode]}
    spaceBetween={30}
    autoplay={{
      delay: 0,
      disableOnInteraction: false,
      stopOnLastSlide: false,
      enabled: true,
    }}
    freeMode={{
      sticky: false,
      minimumVelocity: 0.2,
      enabled: true,
    }}
    slidesPerView={3}
    slidesPerGroup={1}
    direction='vertical'
    loop={true}
    speed={speed}
  >
    {data.map((item, index) =>
      <SwiperSlide key={index + item.label}>
        <Card src={item.imageUrl} label={item.label} slug={item.slug} />
      </SwiperSlide>
    )}
  </Swiper >
}

export default Carousel