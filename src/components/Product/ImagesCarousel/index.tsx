import React from 'react'
import { CarouselProvider, ImageWithZoom, Slide, Slider } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

interface ImagesCarouselParams {
  images: string[]
}

const ImagesCarousel = ({ images }: ImagesCarouselParams) => {
  return (
    <CarouselProvider
      visibleSlides={1}
      totalSlides={images.length}
      step={images.length}
      naturalSlideWidth={100}
      naturalSlideHeight={100}
      hasMasterSpinner={true}>
      <Slider>
        {images.map((image, idx) => (
          <Slide index={idx} key={idx}>
            <ImageWithZoom src={image} />
          </Slide>
        ))}
      </Slider>
    </CarouselProvider>
  )
}

export default ImagesCarousel
