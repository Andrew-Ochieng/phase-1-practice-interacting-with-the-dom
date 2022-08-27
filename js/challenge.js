// timer
// counter 
const counter = document.getElementById('counter');
let counterTimer = 0;

setInterval(() => {
    counter.innerHTML = counterTimer++;
}, 1000);

// manually increment/ decrement counter
let minus = document.getElementById('minus')
let plus = document.getElementById('plus')
let heart = document.getElementById('heart')
let pause = document.getElementById('pause')

minus.addEventListener('click', () => {
    counterTimer--;
    updateTimer()
})

plus.addEventListener('click', () => {
    counterTimer++;
    updateTimer()
})

const updateTimer = () => {
    counter.innerHTML = counterTimer;
}


// count number of likes
heart.addEventListener('click', () => {
    let likes = document.getElementById('likes')

    likes.innerHTML += `<li>has been liked .... times</li>`

})



// add comment
const commentForm = document.getElementById('comment-form')

commentForm.addEventListener('submit', (e) => {
    e.preventDefault()

    submitForm()

})


const submitForm = () => {
    let commentInput = document.getElementById('comment-input')
    let list = document.getElementById('list');

    if (commentInput.value !== "") {
        list.innerHTML += `<li>${commentInput.value}</li>`
        // reset form
        commentForm.reset()
    } else {
        console.log("Please fill the input!")
    }
}









