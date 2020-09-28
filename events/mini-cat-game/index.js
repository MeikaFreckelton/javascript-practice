/*
//  Identify the elements

*/
let jump = document.getElementById("jump")
let mvRight = document.getElementById("right")
let mvLeft = document.getElementById("left")
let cat = document.getElementById("cat-pic")
cat.style.left = '50px'

// let moveRight = (item, distance) => {
//     item.style.left = parseInt(item.style.left) + distance + "px"
// }

let moveRight = () => {
    cat.style.left = parseInt(cat.style.left) + 50 + 'px'
}

let moveLeft = () => {
    cat.style.left = parseInt(cat.style.left) + -50 + 'px'
}

// let bounce = () => {

// }

jump.addEventListener("click", () => {
    cat.classList.add("bounce")
    setTimeout(() => {cat.classList.remove("bounce")}, 1200)
    
    
    console.log(cat.classList)
})

// let moveLeft = () => {
//     cat.style.right = parseInt(cat.style.right) + 50 + 'px'
// }

mvLeft.addEventListener("click", moveLeft)

mvRight.addEventListener("click", moveRight)

// eventHandlerFunction : callback func when event happens
// targetElement.addEventListener("event", eventHandlerFunction)

//add event listeners & Functions
// add event listeners to all buttons 
// functions for three different btns
// left - change current axis to the left - using pageX/Y? or screenX/Y?

// right - ^ vice versa
// jump - move axis slightly up and then down again - timed ?
// document.getElementById("cat-pic").style.left = "200px"


