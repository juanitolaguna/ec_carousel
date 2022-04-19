export default class Carousel {

    #cards = [];
    #carousel = null;
    head = null;
    #range = null

    constructor(range, head) {
        this.#range = range;
        this.head = head;
        this.#getContainer();
        this.events();
    }

    events() {
        this.#carousel.addEventListener("click", this.moveLeft.bind(this));
    }


    #getContainer() {
        this.#carousel = document.getElementById('carousel-row');
    }

    addCard(card) {
        this.#cards.push(card);
        return this;
    }

    draw() {
        let lastNode = this.head;
        let counter = 0;

        while (lastNode.getNext()) {
            const child = lastNode.create();
            this.#carousel.appendChild(child);

            if (counter < this.#range) {
                lastNode.visible();
            }

            lastNode = lastNode.getNext();
            counter++;
        }
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.getNext()) {
                lastNode = lastNode.getNext()
                console.log(lastNode.getTitle())
            }
        }
        return lastNode;
    }

    getLastVisible() {
        let lastNode = this.head;

        while (lastNode.isVisible() && lastNode.getNext()) {
            console.log(lastNode.getTitle())
            lastNode = lastNode.getNext()
        }

        return lastNode;
    }


    moveLeft() {
        const first = this.head;
        first.invisible();
        first.removeFromDom();

        this.head = this.head.getNext();

         const last = this.getLast()
        
         // This line ⚡
        last.addNext(first);
        // this.getLastVisible().visible();
    }
}   