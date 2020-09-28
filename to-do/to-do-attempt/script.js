const addItem = () => {
    let li = document.createElement("li")
    let input = document.getElementById("userInput").value
    let txt = document.createTextNode(input)
    li.appendChild(txt)
    if (input == ''){
        alert("you must write something!")
    } else {
        document.getElementById("myUL").appendChild(li)
    }
}