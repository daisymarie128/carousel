import Carousel from './modules/carousel/carousel';

const images = [
  'http://www.fillmurray.com/g/500/300',
  'http://www.fillmurray.com/g/600/300',
  'http://www.fillmurray.com/g/800/300'
]

const myCarousel = new Carousel(500, images);

myCarousel.init()

