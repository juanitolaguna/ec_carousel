export default class Carousel {

    #cards = [];
    #carousel = null;

    constructor() {
        this.#getContainer();
    }

    #getContainer() {
        this.#carousel = document.getElementsByClassName('tns-slider')[0];
    }

    addCard(card) {
        this.#cards.push(card);
        return this;
    }

    paint() {
        this.#cards.forEach((card) => {
            const node = card.create();
            this.#carousel.appendChild(node);
        })
    }
}   