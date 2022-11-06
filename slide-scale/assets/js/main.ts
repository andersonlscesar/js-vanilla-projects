type button = HTMLElement 
type NodeCollection = NodeList | HTMLCollection

class SlideScale {
    private images: NodeCollection
    private rightButton: button
    private leftButton: button
    private counter: number = 0

    constructor(images: NodeCollection, rightButton: button, leftButton: button ) {
        this.images         = images
        this.rightButton    = rightButton
        this.leftButton     = leftButton
        this.createListener()
    }

    private next() {
        this.counter++
        if(this.counter === this.images.length) this.counter = this.images.length - 1
        let imgs = Array.from(this.images)
        imgs[this.counter].classList.add('active')       
        imgs[this.counter].classList.remove('hide')       
    }

    private previous() {
        let imgs = Array.from(this.images)
        if(this.counter > 0) {
            imgs[this.counter].classList.add('hide') 
            imgs[this.counter].classList.remove('active') 
            this.counter--
        }
    }

    private createListener() {
        this.rightButton.addEventListener('click', () => {
            this.next()
        })

        this.leftButton.addEventListener('click', () => {
            this.previous()
        })
    }
}


const images = document.querySelectorAll('.slide__img')! as NodeCollection
const rightButton = document.querySelector('.controls__right')! as button
const leftButton = document.querySelector('.controls__left')! as button
const slideScale = new SlideScale(images, rightButton, leftButton)
