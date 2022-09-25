const url = 'https://www.discoveryvip.com/shared/test1.json'

const buttonLoadUsers = document.querySelector('.load-users')
const userEvents = ['click', 'touchend']
const list = document.querySelector('.list')
const loading = document.querySelector('.loading')

userEvents.forEach(user => {
    buttonLoadUsers.addEventListener(user, listUsers, { once: true })
})

 function listUsers(e) {
    e.preventDefault()
    loading.style.display = 'flex'
     fetch(url)
    .then(response => {
        if(response.status === 200) return response.json()
            
    })
    .then(json => {
        renderUsers(json) 
    })    
}

function renderUsers(users) {
    users.forEach(user => {
        const div = document.createElement('div')
        div.classList.add('list__information')
        div.innerHTML = `  <h2 class="information__name">${user.name.first.toLowerCase()}</h2>
        <p>${user.location.city.toLowerCase()} ${user.location.country.toLowerCase()}</p>`
        list.appendChild( div )
        loading.style.display = null
    })  
}
