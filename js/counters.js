
api = axios.create({
    baseURL: 'https://catharsys.staging.f4dev.me/'
})

api.get('/thoughts/')
.then((response) => {
    if(!response.data.error) {
            let messageAmount = document.querySelector(".messages__inner-data-bottom-messages-counter")
            let messages = document.querySelectorAll(".messages__inner-blocks-block") 
            const thoughts = response.data.data // An array of thought objects

            for(const thought of thoughts) {
                let amountOfMessages = thoughts.length
                amountOfMessages.toString()

                messageAmount.innerHTML = amountOfMessages;
            }
        }
    })
    .catch((error) => {
        console.error(error)
    })
