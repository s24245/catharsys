let messageAmount = document.querySelector(".messages__inner-data-bottom-messages-counter")
let messages = document.querySelectorAll(".messages__inner-blocks-block") 
let messagesCount = messages.length.toString();

messageAmount.innerHTML = messagesCount;

