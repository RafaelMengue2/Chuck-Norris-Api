
document.querySelector("button").onclick=()=>{
    fetch("https://api.chucknorris.io/jokes/random")
    .then(
        function(advice){
            return advice.json()
        }
    )
    .then(
        function(res){
            let display = document.querySelector("#result h3")
            display.innerHTML = res.value
        }
    );
}
    
