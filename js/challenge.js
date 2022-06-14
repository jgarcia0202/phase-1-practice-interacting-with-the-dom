let counter = document.querySelector('#counter')
let minus = document.querySelector('#minus')
let plus = document.querySelector('#plus')
let pause = document.querySelector('#pause')
let heart = document.querySelector("#heart")
let commentForm = document.querySelector('#comment-form')
let count = 0
let internalID 
let clicked = 0

document.addEventListener('DOMContentLoaded',(e) => {
    internalID = setInterval(startCounter, 1000)
    pause.addEventListener('click', stopCounter)
    minus.addEventListener('click', e => {
        count --;
        updateCounter()
    })
    plus.addEventListener('click', e => {
        count ++
        updateCounter()
    })
    heart.addEventListener('click', likedCount)
    commentForm.addEventListener('submit', e => {
        e.preventDefault()
        let comment = document.querySelector('#comment-input').value
        let newComment = document.createElement('p')
        newComment.textContent = comment
        document.querySelector('#list').appendChild(newComment)
    })
    
})

const updateCounter = e => counter.textContent = count

const startCounter = e => {
count++
updateCounter()
}

const stopCounter = e => {
    if (internalID != null){
        pause.textContent = 'resume'
        clearInterval(internalID)
        internalID = null
        plus.disabled = true
        minus.disabled = true
        heart.disabled = true
    }
    else if(internalID == null){
        pause.textContent = 'pause'
        internalID = setInterval(startCounter, 1000)
        plus.disabled = false
        minus.disabled = false
        heart.disabled = false
    }
}
const likedCount = e => { 
    clicked ++
    console.log(`${count} was clicked ${clicked} times.`)
    
}
