export default class Card {

    #imageLink;
    #title;
    #index;
    #link;
    #domNode;

    constructor(imageLink, title, index, link) {
        this.#imageLink = imageLink;
        this.#title = title;
        this.#index = index;
        this.#link = link;
    }

    create() {
        const card = document.createElement('div');
        card.classList.add('item');
        card.classList.add('item-' + this.#index);

        const img = document.createElement('img');
        //img.src = this.#imageLink;
        img.setAttribute('data-src', this.#imageLink);
        img.classList.add('img-fluid');
        img.classList.add('item-image');

        const title = document.createElement('h2')
        title.innerText = this.#title;
        title.classList.add('item-title')

        const link = document.createElement('a');
        link.classList.add('item-link');
        link.href = this.#link;

        card.appendChild(img);
        card.appendChild(title);

        link.appendChild(card)

        this.#domNode = link;
        return this.#domNode;
    }
}