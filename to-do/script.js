// let form = document.getElementById("form")
// let listItems = document.getElementById("list")

// create close button + append to each list item
let nodeList = document.getElementsByTagName("LI") // capture all li items
for (let i = 0; i < nodeList.length; i++) {
    let span = document.createElement("SPAN")
    let txt = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(txt)
    nodeList[i].appendChild(span)
}

// click close btn to hide current list item : 
let close = document.getElementsByClassName("close")
for (let i = 0; i < close.length; i++){
    close[i].onclick = function() {
        let div = this.parentElement
        div.style.display = "none"
    }
}

// add a checked symbol when clicking on list item
let list = document.querySelector('ul')
list.addEventListener("click", function(event) {
    if (event.target.tagName == 'LI') {
        event.target.classList.toggle('checked')
    }
}, false)



// create new list item when add button is clicked :
const addItem = () => {
    let li = document.createElement("li") // creating li 
    let input = document.getElementById("userInput").value // capturing input
    let t = document.createTextNode(input) // creating txt from input
    li.appendChild(t) // append txt to li
    if (input == ''){ 
        alert("You must write something :/") // validate input
    } else {
        document.getElementById("myUL").appendChild(li) // append li to the ul in html
    }
    document.getElementById("userInput").value = "" //

    let span = document.createElement("SPAN")
    let txt = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(txt)
    li.appendChild(span)

    for(let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement
            div.style.display = "none"
        }
    }

}