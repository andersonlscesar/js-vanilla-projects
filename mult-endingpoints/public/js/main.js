(() => {
    'use strict'

    const buttonsContainer = document.querySelector('.buttons')
    const list = document.querySelector('.list') 

    // Differents endpoints together 

    const urls = [
        {
            'url':      'https://www.discoveryvip.com/shared/books2.json',
            'title':    'Books',
            'array':    'books'
        },

        {
            'url':      'https://www.discoveryvip.com/shared/people.json',
            'title':    'Friends',
            'array':    'people'
        },

        {
            'url':      'https://www.discoveryvip.com/shared/coin.json',
            'title':    'BitCoin',
            'array':    'data'
        }
    ]

    const config = {
        method: 'GET',
        header: {
            'Content-type': 'application/json'
        }
    }
 

    urls.forEach(url => {
        const btn = document.createElement('button')
        btn.innerText = url.title
        buttonsContainer.appendChild( btn )
    })


    const buttons = document.querySelectorAll('.buttons button')

    buttons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            searchData(urls[index])
        })
    })


    function searchData(obj) {
        fetch(obj.url, config).then(response => {
            if(response.status === 200) {
                return response.json()
            }           
        } )
        .then(json => {
            maker(json[obj.array])
        } )        
    }

    function maker(array) {
        list.innerHTML = ''
        array.forEach(element => {
            const listInformation = document.createElement('div')
            listInformation.classList.add('list__information')
            list.appendChild(listInformation)

            const entries = Object.entries(element)
            for(const obj of entries) {
                listInformation.innerHTML += `${obj[0]} ${obj[1]}`
            }            
        })
    }
})()