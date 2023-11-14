let btn = document.getElementById("loginBtn")
let userInput = document.getElementById("username")
let passInput = document.getElementById("password")

btn.addEventListener("click",function(e){

    e.preventDefault()

    jQuery.ajax({
        url: 'http://127.0.0.1:8003/api/v3/usuario/validar', 
        type: 'POST',
        data: {
            'username': userInput.value,
            'password': passInput.value,
            'tipo': "almacenero"
        },

        success: function(data) {
            window.location.href = "almacen.html"
            localStorage.setItem("token", data.user.token)
        },

        error: function(error){
            alert(error.responseJSON.message);
        } 

    });

})




