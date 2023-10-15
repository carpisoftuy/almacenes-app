let es = document.getElementById("es")
let en = document.getElementById("en")

//navbar
let txtInicio = document.getElementById("inicio")
let txtSobreNosotros = document.getElementById("sobre-nosotros")
let txtEnvio = document.getElementById("envios")
let txtContacto = document.getElementById("contacto")
let txtIdioma = document.getElementById("idioma")
let txtTema = document.getElementById("tema")
//homepage
let txtLema = document.getElementById("lema")
let txtQuienesSomos = document.getElementById("quienes-somos")
let txtInfo = document.getElementById("info")
let txtContactenos = document.getElementById("contactenos")


function traducirAIngles(){

    //navbar
    txtInicio.innerHTML = "Home"
    txtSobreNosotros.innerHTML = "About us"
    txtEnvio.innerHTML = "Shipments"
    txtContacto.innerHTML = "Contact"
    txtIdioma.innerHTML = "Language"
    txtTema.innerHTML = "Theme"
    //homepage
    txtLema.innerHTML = "Joining paths, building trust"
    txtQuienesSomos.innerHTML = "¿Who are we?"
    txtInfo.innerHTML = "At Quick Carry we take care of making sure your orders reach any corner of the country where you are."
    txtContactenos.innerHTML = "Contact us"

}

function traducirAEspanol(){

    //navbar
    txtInicio.innerHTML = "Inicio"
    txtSobreNosotros.innerHTML = "Sobre Nosotros"
    txtEnvio.innerHTML = "Envios"
    txtContacto.innerHTML = "Contacto"
    txtIdioma.innerHTML = "Idioma"
    txtTema.innerHTML = "Tema"
    //homepage
    txtLema.innerHTML = "Uniendo caminos, construyendo confianza"
    txtQuienesSomos.innerHTML = "¿Quienes somos?"
    txtInfo.innerHTML = "En Quick Carry nos encargamos de hacer que tus pedidos lleguen a cualquier rincon del pais en donde te encuentres."
    txtContactenos.innerHTML = "Contactenos"

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