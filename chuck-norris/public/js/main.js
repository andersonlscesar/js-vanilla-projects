window.addEventListener('load', () => {
    const chuck = document.querySelector('.chuck')
    setTimeout(() => {
        chuck.classList.add('chuck--hide')
    }, 5000)
})