let getMovie = () => {
    axios.get("https://ghibliapi.herokuapp.com/films")
    .then(response => console.log(response.data[1].title))
    .catch(err => console.log(err))
}
let btn = document.getElementById("btn")
btn.addEventListener("click", getMovie)