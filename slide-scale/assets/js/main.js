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
        let imgs = Array.from(this.images);
        imgs[this.counter].classList.add('active');
        imgs[this.counter].classList.remove('hide');
    }
    previous() {
        let imgs = Array.from(this.images);
        if (this.counter > 0) {
            imgs[this.counter].classList.add('hide');
            imgs[this.counter].classList.remove('active');
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
const images = document.querySelectorAll('.slide__img');
const rightButton = document.querySelector('.controls__right');
const leftButton = document.querySelector('.controls__left');
const slideScale = new SlideScale(images, rightButton, leftButton);
