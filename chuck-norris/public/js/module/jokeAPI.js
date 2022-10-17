export default function jokeAPI() {

    // The most configs to use it on fetch API

    const config = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    }

    // The url's to reseach for categories, query or generate a random joke

    const URL = {
        category: 'https://api.chucknorris.io/jokes/random?category={category}',
        query: 'https://api.chucknorris.io/jokes/search?query=',
        random: 'https://api.chucknorris.io/jokes/random'
    }

    const buttonSearch = document.querySelector('.form__button')
    const inputSearch = document.querySelector('.form__input')
    const jokeField = document.querySelector('.joke')
    const userEvents = ['click', 'touchend']

    // Loading the random joke when the document were completly loaded

    window.addEventListener('load', () => {
        generateRandomJoke(URL.random)
    })
 

    userEvents.forEach(user => {
        buttonSearch.addEventListener(user, (e) => {
            e.preventDefault()
            let value = inputSearch.value
            searchForAJoke(URL.query, value)
           
        })
    })

    async function generateRandomJoke(url) {
        const response = await fetch(url, config).then(response => response.json())
        let joke = response.value   
        let para = createHTMLElement(joke)
        jokeField.appendChild( para )
    }

    async function searchForAJoke(url, value) {
        let currentURL = url + value 
        const response = await fetch(currentURL, config).then(response => response.json())
        
        console.log(response)
    }


    function createHTMLElement(value) {
        let para = document.createElement('p')
        para.classList.add('joke__para')
        para.innerHTML = value
        return para
    }

    // async function getJoke()

}