let messageStranger = document.querySelector("#messageStranger")
let submitStranger = document.querySelector("#submitStranger")
let testNumStranger = document.querySelector("#testNumStranger")


const api = axios.create({
    baseURL: 'https://catharsys.staging.f4dev.me/'
})

console.log(api)


submitStranger.addEventListener("click", (e)=> {
    e.preventDefault()
    
    api.post('/thoughts/', {
        code: testNumStranger.value,
        published: true,
        text: messageStranger.value
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