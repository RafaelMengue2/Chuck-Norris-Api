
document.querySelector("button").onclick=()=>{
    fetch("https://api.chucknorris.io/jokes/random").then(
        function(advice){
            return advice.json()
        }
    ).then(
        function(res){
            let tbody = document.querySelector("#users")
                    let tr = document.createElement("tr")
                    let tdJokes=document.createElement("td")
                    tdJokes.append(
                        document.createTextNode(res.value)
                    )
                    tr.append(tdJokes)
                    tbody.append(tr)

                }
            );
        }
    
