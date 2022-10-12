(() => {
    'use-strict'

    const url = 'https://randomuser.me/api/'
    const config = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    }

    const userList = document.querySelector('.user')
    const form = document.querySelector('.form')

    form.addEventListener('submit', search)

    async function search(e) {
        e.preventDefault()
        const inputValue = document.querySelector('.form input[name="search"]').value
        const param = `${url}?results=${inputValue}`
        
        await fetch(param, config).then(response => {

            if(response.status === 200) {
                return response.json()
            }

            const style = 'color: #232323'
            userList.innerHTML = `<h1 style="${ style }" >Erro ao encontrar os dados</h1>`

        }).then(json => {
            accessData(json.results)
        })
    }

    /**
     * Percorre os dados
     * @param {JSON} data 
     */

    function accessData(data) {
        const information = Array.from(data)
        userList.innerHTML = ''
        information.forEach(info => {              
            listUsers(info)
        })
    }

    /**
     * Insere os dados no html
     *  @param {JSON} userInfo  
     */

    function listUsers(userInfo) {
        const div = document.createElement('div')
        const userEvents = ['click', 'touchend']

        userEvents.forEach(user => {
            div.addEventListener(user, (e) => {
                if (e.cancelable) e.preventDefault()
                openModal(div.innerHTML)
            })
        })

        div.classList.add('user__card')
        div.innerHTML = `
                        <img src="${ userInfo.picture.large }" alt="" class="card__img">
                        <div class="info">
                            <h2 class="card__name">${ userInfo.name.first } ${ userInfo.name.last }</h2>
                            <p class="card__email">${ userInfo.email }</p>
                            <p class="card__age">${ userInfo.dob.age }</p>
                        </div>      
        `
        userList.appendChild( div )
    }

    const modalContainer = document.querySelector('.container-modal')
    const modal = document.querySelector('.modal')
    const buttonCloseModal = document.createElement('button')
    buttonCloseModal.classList.add('modal__button')
    buttonCloseModal.innerText = 'Close'

    function openModal(userInfo) {
        modalContainer.classList.add('container-modal--active')
        modal.innerHTML = userInfo
        modal.appendChild( buttonCloseModal )
        modalContainer.addEventListener('transitionend', () => {            
            modal.classList.add('modal--active')
        })

    }

    buttonCloseModal.addEventListener('click', closeModal)

    function closeModal() {  
        modal.classList.add('modal--hide')   
        
        modal.addEventListener('animationend', () => {           
            console.log(true) 
            modal.classList.remove('modal--hide')            
            modal.classList.remove('modal--active')            
            modalContainer.classList.remove('container-modal--active')
        }, {once: true})
    }



})()