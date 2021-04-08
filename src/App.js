import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Navigation, Pagination, Controller} from 'swiper'
import 'swiper/swiper-bundle.css'
import { useState } from 'react'

SwiperCore.use( [Navigation, Pagination, Controller] )

function App() {

  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [mainSwiper, setMainSwiper] = useState(null)

  const slides = []
  const thumbs = []
  for(let i=1; i<=10; i++) {
    (new Image()).src = `https://picsum.photos/id/${i}/1000/880` // preload images
    thumbs.push(      
      <SwiperSlide key={`thumb-${i}`}>
        <img src={`https://picsum.photos/id/${i}/200/100`} alt={`Thumb ${i}`} />
      </SwiperSlide>
    )
    slides.push(      
      <SwiperSlide key={`slide-${i}`}>
        <img src={`https://picsum.photos/id/${i}/1000/880`} alt={`Imagen ${i}`} />
      </SwiperSlide>
    )
  }

  return (
    <div>
      <div style={{width: '1024px'}}>
        <Swiper
          id="main"
          spaceBetween={0}
          slidesPerView={1}
          onSwiper={setMainSwiper}
          controller={{control: thumbsSwiper}}
          navigation
          pagination
        >
          {slides}
        </Swiper>
        <Swiper
          id="thumbs"
          onSwiper={setThumbsSwiper}
          controller={{control: mainSwiper}}
          spaceBetween={5}
          slidesPerView={5}          
          navigation
          pagination
        >
          {thumbs}
        </Swiper>
      </div>
    </div>
  );
}

export default App;
