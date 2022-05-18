

const api = axios.create({
    baseURL: 'https://catharsys.staging.f4dev.me/'
})

let allThoughtsArr = api.get('/thoughts/')
.then((response) => {
    if(!response.data.error) {
        const thoughts = response.data.data // An array of thought objects

        for(const thought of thoughts) {
            // console.log(`Thought with text "${thought.text}"`)

            let newArr = [];

            for (let i = 0; i < thoughts.length; i++) {
                newArr.push(thoughts[i])
            }
            // console.log(newArr)
        }
    }
})
.catch((error) => {
    console.error(error)
})


let messagesInnerBlocks = document.querySelector(".messages__inner-blocks")



