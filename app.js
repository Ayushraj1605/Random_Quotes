var joke = document.getElementById("jokes");
getJokes();
var btn = document.getElementById("btn").addEventListener("click", getJokes);


function getJokes() {
    fetch("https://type.fit/api/quotes")
        .then(res => res.json())
        .then(data => {
            var r = Math.floor(Math.random() * data.length);
            jokes.innerHTML = `"${data[r].text}"`;
        })
}
