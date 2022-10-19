const myBtn = document.querySelector('button')
const resContainer = document.querySelector('section')

const baseURL = 'https://swapi.dev/api/'

let str = () => {

    axios.get(baseURL + 'planets/?search=alderaan')
    .then ((response) => {
        // console.log(response.data.results[0].residents)
        for(let i = 0; i < response.data.results[0].residents.length; i++) {
            // Make a get request for each URL
            axios.get(response.data.results[0].residents[i])
            .then ((response) => {
                let theResidents = document.createElement('h2')
                theResidents.innerHTML = response.data.name
                document.getElementById('test').appendChild(theResidents)
            })
        }
    })
    .catch((err) => {
        console.log(err)
    })
}


myBtn.addEventListener('click', str)