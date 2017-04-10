"use strict";
import './carousel.scss';

export default class Carousel {
    constructor(options) {
        super(state);
        this.state = options;
        this.state.imageElements = [];
        this.state.currentImage = 0;
        this.state.time = 0;
        this.state.last = 0;
    }

    init() {
        const carouselDiv = document.createElement('div');
        const nextBtn = document.createElement('div');
        const prevBtn = document.createElement('div');
        carouselDiv.className = 'o-carousel';
        nextBtn.className = 'carousel__next--button';
        prevBtn.className = 'carousel__prev--button';
        const container = document.getElementById('container');
        container.append(carouselDiv);
        container.append(nextBtn);
        container.append(prevBtn);

        nextBtn.addEventListener('click', () => {
            console.log('next');
        })
        prevBtn.addEventListener('click', () => {
            console.log('prev');
        })

        this.carouselDiv = carouselDiv;
        this.createImages();
        this.loop();
    }

    createImages() {
        const { images, imageElements } = this.state;
        for (let index = 0; index < images.length; index++) {
            let imageSrc = images[index];
            const carouselImage = document.createElement('div');
            carouselImage.className = 'carousel__image';
            carouselImage.style.backgroundImage = `url(${imageSrc})`;
            this.carouselDiv.append(carouselImage);
            if (index !== 0) carouselImage.classList.add('hide');

            imageElements.push(carouselImage);
        }
    }

    next() {
        const { currentImage, images, imageElements } = this.state;

        const previousImage = imageElements[currentImage];
        this.state.({currentImage: currentImage + 1});

        if(currentImage > images.length) this.setState({currentImage: 0});
        currentImageElement = imageElements[currentImage];
        previousImage.classList.add('hide');
        currentImageElement.classList.remove('hide');
    }

    prev() {
        const { currentImage, images, imageElements } = this.state;

        previousImage = imageElements[currentImage];
        this.setState({currentImage: currentImage + 1});

        if(currentImage > images.length) this.setState({currentImage: 0});
        currentImageElement = imageElements[currentImage];
        previousImage.classList.add('hide');
        currentImageElement.classList.remove('hide');
    }

    set state(args) {
        const { state} = this;
        this.state = {
            ...args
        };
    }

    handleAnimation(e) {
        this.loop();
	}

    loop() {
        const { images, time, last } = this.state;
		if (!images) return;

        const now = time;
        console.log('ttt-----', this)
        
		if (time - last >= 3.5 * 1000) {
            console.log('this.last', last)
		}
			this.next();

		requestAnimationFrame(() => this.loop(now));
    }
}