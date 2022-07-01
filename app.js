let jokeText = document.querySelector(".joke__text");
const callButton = document.querySelector(".fetchJoke");


const fetchJoke = () => {
    fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    })
        .then(response => response.json()).then(result => {
            const { joke } = result
            // console.log(joke);
            jokeText.innerText = joke;
        });
    }

callButton.addEventListener("click", () => {
    fetchJoke();
});

