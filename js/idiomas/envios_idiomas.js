let es = document.getElementById("es")
let en = document.getElementById("en")

//navbar
let txtInicio = document.getElementById("inicio")
let txtEnvio = document.getElementById("envios")
let txtContacto = document.getElementById("contacto")
let txtIdioma = document.getElementById("idioma")
let txtTema = document.getElementById("tema")
let txtContactenos = document.getElementById("contactenos")

let txtRastreo = document.getElementById("rastreo")
let txtTextoRastreo = document.getElementById("texto-rastreo")
let txtCodigoTxt = document.getElementById("codigo-txt")
let txtNoPuede = document.getElementById("no-puede")
let txtEnviar = document.getElementById("btn-rastreo")



function traducirAIngles(){

    //navbar
    txtInicio.innerHTML = "Home"
    txtEnvio.innerHTML = "Shipments"
    txtContacto.innerHTML = "Contact"
    txtIdioma.innerHTML = "Language"
    txtTema.innerHTML = "Theme"
    txtContactenos.innerHTML = "Contact us"

    txtRastreo.innerHTML = "TRACK YOUR SHIPMENT"
    txtTextoRastreo.innerHTML = "Enter your shipping code on your shipping receipt stored in your email"
    txtCodigoTxt.innerHTML = "Track code:"
    txtNoPuede.innerHTML = `Can't track your order? <a id="click" href="./contacto.html">Click here</a>` 
    txtEnviar.innerHTML = "Track"

}

function traducirAEspanol(){

    //navbar
    txtInicio.innerHTML = "Inicio"
    txtEnvio.innerHTML = "Envios"
    txtContacto.innerHTML = "Contacto"
    txtIdioma.innerHTML = "Idioma"
    txtTema.innerHTML = "Tema"
    txtContactenos.innerHTML = "Contactenos"

    txtRastreo.innerHTML = "RASTREE SU ENVÍO"
    txtTextoRastreo.innerHTML = "Ingrese su código de envio en su comprobante de envio alojado en su email"
    txtCodigoTxt.innerHTML = "Código de rastrero:"
    txtNoPuede.innerHTML = `¿No puede rastrear su pedido? <a id="click" href="./contacto.html">Click aqui</a>`
    txtEnviar.innerHTML = "Rastrear"

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