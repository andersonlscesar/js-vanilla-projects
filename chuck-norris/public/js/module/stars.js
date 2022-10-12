export default function stars() {
    const body = document.body

    let randomNumber = (max, min) => {
        return Math.floor(Math.random() * ( max - min ) + min)
    }

    for(let i = 0; i <= 500; i++) {
        const star = document.createElement('span')
        let measurement = randomNumber(2, 8)
        star.style.top = `${randomNumber(1, 100)}%`
        star.style.left = `${randomNumber(1, 100)}%`
        star.style.height = `${measurement}px`
        star.style.width = `${measurement}px`
        star.style.animationDelay = `.${10 + i}s`
        star.classList.add('star')
        body.appendChild( star )
    }
   
}