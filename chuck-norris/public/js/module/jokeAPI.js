export default function jokeAPI() {

    const config = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    }

    const URL = {
        category: 'https://api.chucknorris.io/jokes/random?category={category}',
        query: 'https://api.chucknorris.io/jokes/search?query={query}'
    }


    const buttonSearch = document.querySelector('.form__button')
    const inputSearch = document.querySelector('.form__input')
    const userEvents = ['click', 'touchend']
    console.log(inputSearch)

    userEvents.forEach(user => {
        buttonSearch.addEventListener(user, (e) => {
            e.preventDefault()
        })
    })

    // async function getJoke()

}