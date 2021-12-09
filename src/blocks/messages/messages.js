
document.addEventListener('DOMContentLoaded', (e) => {
    let documentDate = document.querySelectorAll('.message__date')
    documentDate.forEach(date => date.innerHTML = getTime())

    function getTime() {
        let today = new Date();
        hours = today.getHours();
        minutes = today.getMinutes();

        if (hours < 10) hours = "0" + hours;

        if (minutes < 10) minutes = "0" + minutes;

        let time = hours + ":" + minutes;
        return time;
    }

    const userInput = document.querySelector('.message__input')
    const messageContent = document.querySelector('.message__content')
    const userBtn = document.querySelector('.message__btn')
    const messageBottom = document.querySelector('.message__form')


    userBtn.addEventListener('click', (e) => {
        e.preventDefault()
        sendMessage()
    })
    // userInput.addEventListener('click', (e) => {
    //     if (e.which == 13) {
    //         e.preventDefault()
    //         sendMessage()
    //     }
    // })

    function sendMessage() {
        if (userInput.value != 0) {
            messageContent.insertAdjacentHTML('beforeend', generateHtml(userInput.value, getTime()))
            userInput.value = ''
            scrollLogic()
        }
    }

    function generateHtml(text, date) {
        return `
        <div class="message__me new-message">
            <span>
                <p class="message__me-text">${text}</p>
                <p class="message__date">${date}</p>
            </span>
        </div>
        `
    }
    function scrollLogic() {
        let shouldScroll = messageContent.scrollTop + messageContent.clientHeight === messageContent.scrollHeight
        if (!shouldScroll) scrollToBottom()
    }

    function scrollToBottom() {
        messageContent.scrollTop = messageContent.scrollHeight
    }
    scrollToBottom()
})