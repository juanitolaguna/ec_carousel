import CarouselFactory from "./core/carousel/carousel-factory";

const carouselItems = window.cItems
const sliderOptions = window.sliderOptions

const carousel = CarouselFactory.create(carouselItems);
carousel.paint();

tns(sliderOptions);