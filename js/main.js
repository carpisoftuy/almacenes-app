let btn = document.getElementById("loginbtn")
let userInput = document.getElementById("username")
let passInput = document.getElementById("password")

btn.addEventListener("click",function(){
    
    const data = {
        username: userInput.value,
        password: passInput.value
    };

    const requestOptions = {

        method: 'POST',
        headers: {
        'Content-Type': 'application/json' 
         },
        body: JSON.stringify(data)

    }

    const URL_OBTENER_ID_USUARIO = "http://127.0.0.1:8000/api/v2/usuario/validar/"

    fetch(URL_OBTENER_ID_USUARIO)

    .then(response => response.json())
    .then(data =>{

        console.log(data)

    }) 

    const URL = "http://127.0.0.1:8000/api/v2/usuario/getRoles/13"

    fetch(URL)

    .then(response => response.json())
    .then(data =>{
        console.log(data)
    }) 

})




