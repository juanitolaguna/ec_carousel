export default class Card {

    #link;
    #title;
    #domNode;
    #next;
    prev;

    constructor(link, title) {
        this.#link = link;
        this.#title = title;
    }

    create() {
        const card = document.createElement('div');
        card.classList.add('carousel-card');
        card.classList.add('col');
        card.style.display = 'none';

        const img = document.createElement('img');
        img.src = this.#link;

        const title = document.createElement('h2')
        title.innerText = this.#title;

        card.appendChild(img);
        card.appendChild(title);

        this.#domNode = card;
        return this.#domNode;
    }

    isVisible() {
        return this.#domNode.style.display == 'block';
    }

    getTitle() {
        return this.#title;
    }

    removeFromDom() {
        return this.#domNode.parentNode.removeChild(this.#domNode);
    }

    visible() {
        this.#domNode.style.display = 'block';
    }

    invisible() {
        this.#domNode.style.display = 'none';
    }

    getNext() {
        return this.#next;
    }

    setNext(next) {
        this.#next = next;
        return this.#next;
    }

    addNext(next) {
        this.#next = next;
    }
}