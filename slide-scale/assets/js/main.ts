type button = HTMLImageElement 
type NodeCollection = NodeList | HTMLCollection

class SlideScale {
    private images: HTMLCollection
    private rightButton: button
    private leftButton: button
    private counter: number = 0

    constructor(images: HTMLCollection, rightButton: button, leftButton: button ) {
        this.images         = images
        this.rightButton    = rightButton
        this.leftButton     = leftButton
        this.createListener()
    }

    private next() {
        this.counter++
        if(this.counter === this.images.length) this.counter = this.images.length - 1
        this.images[this.counter].classList.add('active')       
        this.images[this.counter].classList.remove('hide')       
    }

    private previous() {
        if(this.counter > 0) {
            this.images[this.counter].classList.add('hide') 
            this.images[this.counter].classList.remove('active') 
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


const images = document.getElementsByClassName('slide__img')! as HTMLCollection
const rightButton = document.querySelector('.controls__right')! as button
const leftButton = document.querySelector('.controls__left')! as button
const slideScale = new SlideScale(images, rightButton, leftButton)
