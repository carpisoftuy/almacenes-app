let es = document.getElementById("es")
let en = document.getElementById("en")

//navbar
let txtInicio = document.getElementById("inicio")
let txtContacto = document.getElementById("contacto")
let txtIdioma = document.getElementById("idioma")
let txtTema = document.getElementById("tema")
let txtContactenos = document.getElementById("contactenos")

let txtContacto2 = document.getElementById("contacto2")
let txtNombre = document.getElementById("nombre")
let txtEmail = document.getElementById("email")
let txtMensaje = document.getElementById("mensaje")
let txtEnviar = document.getElementById("enviar")



function traducirAIngles(){

    //navbar
    txtInicio.innerHTML = "Home"
    txtContacto.innerHTML = "Contact"
    txtIdioma.innerHTML = "Language"
    txtTema.innerHTML = "Theme"
    txtContactenos.innerHTML = "Contact us"

    txtContacto2.innerHTML = "Contact"
    txtNombre.innerHTML = "Name"
    txtEmail.innerHTML = "Email"
    txtMensaje.innerHTML = "Message"
    txtEnviar.innerHTML = "Send"
}

function traducirAEspanol(){

    //navbar
    txtInicio.innerHTML = "Inicio"
    txtContacto.innerHTML = "Contacto"
    txtIdioma.innerHTML = "Idioma"
    txtTema.innerHTML = "Tema"
    txtContactenos.innerHTML = "Contactenos"

    txtContacto2.innerHTML = "Contacto"
    txtNombre.innerHTML = "Nombre"
    txtEmail.innerHTML = "Email"
    txtMensaje.innerHTML = "Mensaje"
    txtEnviar.innerHTML = "Enviar"

}

es.addEventListener("click", function(){
    localStorage.setItem("idioma", "es")
    traducirAEspanol()
})

en.addEventListener("click", function(){
    localStorage.setItem("idioma", "en")
    traducirAIngles()
})

idioma = localStorage.getItem("idioma")

if(idioma == "es"){
    traducirAEspanol()
}

if(idioma == "en"){
    traducirAIngles()
}