import './carousel.scss';

export default class Carousel {
  constructor(height = 500, images = []) {
    this._carousel = {
      currentImage: 0,
      imageElements: []
    };

    this.timeLast = 0;
    this.elements = [];
    this.images = images;
    this.height = height;
    this.current = 0;
    this.time = 0;
  }

  init() {
    const { height } = this;
    const container = document.getElementById('container');
    const carouselDiv = document.createElement('div');
    const nextBtn = document.createElement('div');
    const prevBtn = document.createElement('div');

    carouselDiv.className = 'o-carousel';
    carouselDiv.style.height = `${height}px`;
    nextBtn.className = 'carousel__next--button';
    prevBtn.className = 'carousel__prev--button';

    container.append(carouselDiv);
    carouselDiv.append(prevBtn);
    carouselDiv.append(nextBtn);

    nextBtn.addEventListener('click', () => {
      this.next();
    });

    prevBtn.addEventListener('click', () => {
      this.prev();
    });

    this.carouselDiv = carouselDiv;
    this.createImages();
  }

  createImages() {
    const { images, elements } = this;
    for (let index = 0; index < images.length; index++) {
      let imageSrc = images[index];

      const carouselImage = document.createElement('div');
      carouselImage.className = 'carousel__image';
      carouselImage.style.backgroundImage = `url(${imageSrc})`;

      this.carouselDiv.append(carouselImage);
      if (index !== 0) carouselImage.classList.add('hide');

      elements.push(carouselImage);
    }

    this.loop();
  }

  next() {
    const { images, elements } = this;

    if (this._ra) {
      cancelAnimationFrame(this._ra);
    }

    const previousImage = elements[this.current];
    this.current = this.current + 1;

    if (this.current > images.length - 1) this.current = 0;
    const currentImageElement = elements[this.current];
    previousImage.classList.add('hide');
    currentImageElement.classList.remove('hide');

    this._ra = requestAnimationFrame(now => this.loop(now));
  }

  prev() {
    const { images, elements } = this;

    if (this._ra) cancelAnimationFrame(this._ra);
    const previousImage = elements[this.current];
    this.current = this.current - 1;

    if (this.current < 0) this.current = images.length - 1;
    const currentImageElement = elements[this.current];
    previousImage.classList.add('hide');
    currentImageElement.classList.remove('hide');
    this._ra = requestAnimationFrame(now => this.loop(now));
  }

  set imageElements(value) {
    this._carousel.imageElements = value;
  }

  set currentImage(value) {
    this._carousel.current = value;
  }

  loop(now) {
    const { images, timeLast } = this;

    if (!images) return;

    if (now - timeLast >= 5.5 * 1000) {
      this.timeLast = now;
      this.next();
    }

    this._ra = requestAnimationFrame(now => this.loop(now));
  }
}
