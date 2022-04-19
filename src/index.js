import Carousel from "./carousel";
import Card from "./card";


const head = new Card('https://random.imagecdn.app/100/100','title');


const carousel = new Carousel(5, head);

carousel.head
.setNext(new Card('https://random.imagecdn.app/100/100','title1'))
.setNext(new Card('https://random.imagecdn.app/100/100','title2'))
.setNext(new Card('https://random.imagecdn.app/100/100','title3'))
.setNext(new Card('https://random.imagecdn.app/100/100','title4'))
.setNext(new Card('https://random.imagecdn.app/100/100','title5'))
.setNext(new Card('https://random.imagecdn.app/100/100','title6'))
.setNext(new Card('https://random.imagecdn.app/100/100','title7'))
.setNext(new Card('https://random.imagecdn.app/100/100','title8'))
.setNext(new Card('https://random.imagecdn.app/100/100','title9'))
.setNext(new Card('https://random.imagecdn.app/100/100','title10'))
.setNext(new Card('https://random.imagecdn.app/100/100','title11'))
.setNext(new Card('https://random.imagecdn.app/100/100','title12'));

carousel.draw();