let messageStranger = document.querySelector("#messageStranger")
let submitStranger = document.querySelector("#submitStranger")
let testNumStranger = document.querySelector("#testNumStranger")

const api = axios.create({
    baseURL: 'https://catharsys.staging.f4dev.me/'
})

console.log(api)


submitStranger.addEventListener("click", ()=> {
    api.post('/thoughts/', {
        code: 1,
        published: false,
        text: "I love my mom"
    })
        .then((response) => {
            if(!response.data.error) {
                const thought = response.data.data
    
                console.log(`Thought with text "${thought.text}" created successfully`)
            }
        })
        .catch((error) => {
            console.error(error)
        })
})