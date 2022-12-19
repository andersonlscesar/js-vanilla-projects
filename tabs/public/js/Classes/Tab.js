export class Tab {
    constructor() {
        this.links = document.querySelectorAll('.list__link');
        this.sections = document.querySelectorAll('.section');
        this.cover = document.querySelector('.cover');
        this.configure();
        this.sections[0].classList.add('section--active');
        this.links[0].classList.add('list__link--active');
        this.setCoverParams(this.links[0]);
    }
    configure() {
        this.links.forEach((link, index) => {
            link.addEventListener('click', () => { this.onClickEvent(link, index); });
        });
    }
    onClickEvent(link, index) {
        this.sections.forEach(section => section.classList.remove('section--active'));
        this.links.forEach(l => l.classList.remove('list__link--active'));
        this.sections[index].classList.add('section--active');
        link.classList.add('list__link--active');
        this.setCoverParams(link);
    }
    setCoverParams(link) {
        this.cover.style.width = `${link.offsetWidth}px`;
        this.cover.style.height = `${link.offsetHeight}px`;
        this.cover.style.top = `${link.offsetTop}px`;
        this.cover.style.left = `${link.offsetLeft}px`;
    }
}
