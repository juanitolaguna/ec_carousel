import Carousel from "./carousel";
import Card from "../card/card";

export default class CarouselFactory {

    /**
     * @returns {Carousel}
     */
    static create(cItems) {
        const carousel = new Carousel();
        cItems.forEach((item, index) => {
            carousel.addCard(
                new Card(
                    item.imageLink,
                    item.title,
                    index,
                    item.link
                )
            )
        });

        return carousel;
    }
}