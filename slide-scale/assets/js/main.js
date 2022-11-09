"use strict";
class SlideScale {
    images;
    rightButton;
    leftButton;
    counter = 0;
    constructor(images, rightButton, leftButton) {
        this.images = images;
        this.rightButton = rightButton;
        this.leftButton = leftButton;
        this.createListener();
    }
    next() {
        this.counter++;
        if (this.counter === this.images.length)
            this.counter = this.images.length - 1;
        this.images[this.counter].classList.add('active');
        this.images[this.counter].classList.remove('hide');
    }
    previous() {
        if (this.counter > 0) {
            this.images[this.counter].classList.add('hide');
            this.images[this.counter].classList.remove('active');
            this.counter--;
        }
    }
    createListener() {
        this.rightButton.addEventListener('click', () => {
            this.next();
        });
        this.leftButton.addEventListener('click', () => {
            this.previous();
        });
    }
}
const images = document.getElementsByClassName('slide__img');
const rightButton = document.querySelector('.controls__right');
const leftButton = document.querySelector('.controls__left');
const slideScale = new SlideScale(images, rightButton, leftButton);
