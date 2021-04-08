import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Navigation, Pagination} from 'swiper'
import 'swiper/swiper-bundle.css'
import { useState } from 'react'

SwiperCore.use( [Navigation, Pagination] )

function App() {

  const [imagen, setImagen] = useState('https://picsum.photos/id/1/1000/880')

  const slides = []
  for(let i=1; i<=10; i++) {
    (new Image()).src = `https://picsum.photos/id/${i}/1000/880` // preload images
    slides.push(
      <SwiperSlide key={`slide-${i}`}>
        <img src={`https://picsum.photos/id/${i}/200/100`} alt={`Imagen ${i}`} onClick={ (e) => setImagen(`https://picsum.photos/id/${i}/1000/880`)} />
      </SwiperSlide>
    )
  }

  return (
    <div>
      <img src={imagen} alt="imagen-principal" />

      <div style={{width: '1024px'}}>
        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          slidesPerGroup={5}
          navigation
          pagination
          loop={true}
          loopFillGroupWithBlank={true}
          onSlideChange={ s => console.dir(s) }
        >
          {slides}
        </Swiper>
      </div>
    </div>
  );
}

export default App;
