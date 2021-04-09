import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Navigation, Pagination, Thumbs, EffectFade} from 'swiper'
import 'swiper/swiper-bundle.css'
import { useState } from 'react'

SwiperCore.use( [Navigation, Pagination, Thumbs, EffectFade] )

function App() {

  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  const slides = []
  const thumbs = []
  for(let i=1; i<=10; i++) {
    (new Image()).src = `https://picsum.photos/id/${i}/1000/880` // preload images
    thumbs.push(      
      <SwiperSlide key={`thumb-${i}`}>
        <img src={`https://picsum.photos/id/${i}/200/100`} alt={`Thumb ${i}`} style={{cursor: 'pointer'}} />
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
          effect="fade"
          spaceBetween={0}
          slidesPerView={1}
          thumbs={{swiper: thumbsSwiper}}
          navigation
          pagination
        >
          {slides}
        </Swiper>
        <Swiper
          id="thumbs"
          onSwiper={setThumbsSwiper}
          watchSlidesVisibility
          watchSlidesProgress
          spaceBetween={5}
          slidesPerView={5}          
          navigation
        >
          {thumbs}
        </Swiper>
      </div>
    </div>
  );
}

export default App;
