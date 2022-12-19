export class Tab {
    
    private links = document.querySelectorAll('.list__link');
    private sections = document.querySelectorAll('.section');
    private cover = <HTMLDivElement> document.querySelector('.cover');

    constructor() {
        this.configure();      
        this.sections[0].classList.add('section--active');
        this.links[0].classList.add('list__link--active');   
        this.setCoverParams( <HTMLAnchorElement>this.links[0]);
    }

    private configure() {
        this.links.forEach((link, index) => {
            link.addEventListener('click', () => { this.onClickEvent(<HTMLAnchorElement>link, index) });
        });

    }

    private onClickEvent(link: HTMLAnchorElement, index: number) {
        this.sections.forEach(section => section.classList.remove('section--active'));
        this.links.forEach(l => l.classList.remove('list__link--active'));
        this.sections[index].classList.add('section--active');
        link.classList.add('list__link--active');
        this.setCoverParams(link);
    }   
    
    private setCoverParams(link: HTMLAnchorElement) {
        this.cover.style.width = `${link.offsetWidth}px`;
        this.cover.style.height = `${link.offsetHeight}px`;        
        this.cover.style.top = `${link.offsetTop }px`;       
        this.cover.style.left = `${link.offsetLeft}px`;        
    }

}