export class ImageZoom {

    /**
     * 
     * @param { HTMLImageElement } image 
     * @param { HTMLDivElement } viewer 
     * @param { HTMLDivElement } containerImage
     */

    constructor(image,  containerImage) {
        this.image = image        
        this.containerImage = containerImage
    }

    #setLens(lens) {
        this.lens = lens
    }

    #getLens() {
        return this.lens
    }

    #setViewer(viewer) {
        this.viewer = viewer
    }

    #getViewer() {
        return this.viewer
    }

    // Initialize the functionality's image class

    active() {
        const viewer = document.querySelector('.viewer') 
        
        this.image.addEventListener('mouseover', () => {    
            this.#setViewer(viewer)
            this.#onMouseOver()
            const lens = document.querySelector('.lens')            
            this.#setLens(lens)
        })

        this.image.addEventListener('mouseleave', () => {        
            this.#onMouseLeave()
        })

        this.image.addEventListener('mousemove', (e) => {
            this.#onMouseMove(e)
        })       
    }

    /**
     * This function measure up the zoom in in the viewer
     */

    #setBackgroundImage(centerX, centerY) {
        const viewer = this.#getViewer()
        const srcElement = this.image.src
        const { width: lensWidth, height: lensHeight } = this.#getLens().getBoundingClientRect()
        const { width: viewerWidth, height: viewerHeight } = this.#getViewer().getBoundingClientRect()
        const { width: imageWidth, height: imageHeight } = this.image.getBoundingClientRect()
        const sizeBgImageX = viewerWidth / lensWidth
        const sizeBgImageY = viewerHeight / lensHeight
        viewer.style.backgroundImage = `url(${srcElement})`
        viewer.style.backgroundSize = `${imageWidth * sizeBgImageX}px ${imageHeight * sizeBgImageY}px`
        viewer.style.backgroundPosition  = `-${sizeBgImageX * centerX}px -${sizeBgImageY * centerY}px`        
    }

  

    /**
     * This function sets the event for the viewer element
     * @param {HTMLDivElement} viewer 
     */

    #onMouseOver() {
        const viewer = this.#getViewer()
        viewer.style.display = 'block'       
        const lens = this.#createLens()
        this.containerImage.appendChild( lens )
    }

    /**
     * When the cursor's mouse leaves these element will be removed
     * @param { HTMLDivElement } viewer 
     * @param { HTMLSpanElement } lens 
     */

    #onMouseLeave() {
        const viewer = this.#getViewer()
        viewer.style.display = 'none'
        const lens = this.#getLens()
        lens.remove()
    }

    /**
     * It makes the lens starting following the cursor's mouse
     * @param { Object } e 
     */

    #onMouseMove(e) {
        const lens = this.#getLens()
        const { paramX, paramY } = this.#getCursorPosition(e)
        const [ centerX, centerY ] = [ paramX - lens.clientWidth / 2 , paramY - lens.clientHeight / 2 ]
        lens.style.top = `${centerY}px`
        lens.style.left = `${centerX}px`
        this.#setBackgroundImage(centerX, centerY)
    }

    /**
     * it Creates the element that indicates wich area should be zoomed in
     * @returns { HTMLSpanElement }
     */

    #createLens() {
        const lens = document.createElement('span')
        lens.classList.add('lens')
        return lens
    }

    #getCursorPosition(e) {
        const { clientX, clientY } = e
        const { top, left } = this.image.getBoundingClientRect()
        const paramX = clientX - left 
        const paramY = clientY - top 

        return {
            paramX, 
            paramY
        }
    }
}