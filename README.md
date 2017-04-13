## Reusable Carousel

### Versions
- Node: 6.9.1
- NPM: 3.8.0
- Webpack: 2.2.1
- es2015

### Description
This is a work in progress for a reusable carousel. Built with ES6, the carousel is a basic full width of its container, with a customizable height. Pass it an array of images and it displays a carousel which plays on a 5.5 second interval and can be controlled by the UI arrows.

### Future Features
- Add customizable auto change speed
- Clickable index dots
- Added UI styles to choose from
- Rethink responsiveness for smaller devices

### Example implementation
0. First import the module.
1. Supply the height of the carousel you want.
2. Supply an array of the image syou want to use.
3. Call init on your Carousel when you want to initialize it.

```js
import Carousel from './modules/carousel/carousel';

const images = [
    'http://www.fillmurray.com/g/500/300',
    'http://www.fillmurray.com/g/600/300',
    'http://www.fillmurray.com/g/800/300'
]

const myCarousel = new Carousel(500, images);

myCarousel.init();
```

### Features
[NPM](#https://www.npmjs.com/)
[Webpack](#https://webpack.js.org/)
[Babel](#https://babeljs.io/)
[Webpack Dev Server](#https://webpack.github.io/docs/webpack-dev-server.html)
[SCSS]

### Start Development
0. run `npm install`<br>
1. run `npm run watch`<br>
2. point your browser to [localhost:8080](#http://localhost:8080/) (should open automatically)

### Run Production code
0. run `npm run production`<br> build code
1. run `npm start`<br>
2. point your browser to [localhost:8800](#http://localhost:8800/)

### NPM Tasks
- `npm run watch` Runs development server, with auto reloading.
- `npm run start` Runs local server with production build code. (currently not working, to be fixed)
- `npm run assets` Copy assets to the build folder
- `npm run production` Build production code.