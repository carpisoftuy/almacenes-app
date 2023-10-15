let es = document.getElementById("es")
let en = document.getElementById("en")

//navbar
let txtInicio = document.getElementById("inicio")
let txtEnvio = document.getElementById("envios")
let txtContacto = document.getElementById("contacto")
let txtIdioma = document.getElementById("idioma")
let txtTema = document.getElementById("tema")
let txtContactenos = document.getElementById("contactenos")

//table
let txtBienvenido = document.getElementById("bienvenido")
let txtNroPaquete = document.getElementById("nroPaquete")
let txtDireccion = document.getElementById("direccion")
let txtDestinatario = document.getElementById("destinatario")
let txtBulto = document.getElementById("bulto")
let txtModificar = document.getElementsByClassName("modificar")
let txtNroBulto = document.getElementById("nroBulto")
let txtCamion = document.getElementById("camionAsignado")
let txtChofer = document.getElementById("choferAsignado")
let txtFecha = document.getElementById("fechaArmado")

//form
let txtAñadirPaquete = document.getElementById("añadirPaquete")
let txtPDireccion = document.getElementById("pDireccion")
let txtPDestinatario = document.getElementById("pDestinatario")
let txtPBultoAsignado = document.getElementById("pBultoAsignado")
let txtCrearPaquete = document.getElementById("crearPaquete")

//form
let txtAñadirBulto = document.getElementById("añadirBulto")
let txtCamionAsignado = document.getElementById("pCamion")
let txtChoferAsignado = document.getElementById("pChofer")
let txtPaquetesContenidos = document.getElementById("pPaquetes")
let txtCrearBulto = document.getElementById("crearBulto")


function traducirAIngles(){

    //navbar
    txtInicio.innerHTML = "Home"
    txtEnvio.innerHTML = "Shipments"
    txtContacto.innerHTML = "Contact"
    txtIdioma.innerHTML = "Language"
    txtTema.innerHTML = "Theme"
    txtContactenos.innerHTML = "Contact us"

    txtBienvenido.innerHTML = "Welcome storekeeper"
    txtNroPaquete.innerHTML = "Package number"
    txtDireccion.innerHTML = "Address"
    txtDestinatario.innerHTML = "Addressee"
    txtBulto.innerHTML = "Bulk"
    
    for (let i = 0; i < txtModificar.length; i++) {
        txtModificar[i].innerHTML = "Modify";
    }

    txtNroBulto.innerHTML = "Bulk number"
    txtCamion.innerHTML = "Assigned truck"
    txtChofer.innerHTML = "Assigned driver"
    txtFecha.innerHTML = "Created date"

    txtAñadirPaquete.innerHTML = "Add package"
    txtPDireccion.innerHTML = "Address"
    txtPDestinatario.innerHTML = "Addressee"
    txtPBultoAsignado.innerHTML = "Assigned Bulk"
    txtCrearPaquete.innerHTML = "Create package"

    txtAñadirBulto.innerHTML = "Add bulk"
    txtCamionAsignado.innerHTML = "Assigned truck"
    txtChoferAsignado.innerHTML = "Assigned driver"
    txtPaquetesContenidos.innerHTML = "Contained packages"
    txtCrearBulto = "Create bulk"
    

}

function traducirAEspanol(){

    //navbar
    txtInicio.innerHTML = "Inicio"
    txtEnvio.innerHTML = "Envios"
    txtContacto.innerHTML = "Contacto"
    txtIdioma.innerHTML = "Idioma"
    txtTema.innerHTML = "Tema"
    txtContactenos.innerHTML = "Contactenos"

    txtBienvenido.innerHTML = "Bienvenido Almacenero"
    txtNroPaquete.innerHTML = "nro paquete"
    txtDireccion.innerHTML = "Dirección"
    txtDestinatario.innerHTML = "Destinatario"
    txtBulto.innerHTML = "Bulto"
    
    for (let i = 0; i < txtModificar.length; i++) {
        txtModificar[i].innerHTML = "Modificar"; 
    }

    txtNroBulto.innerHTML = "nro Bulto"
    txtCamion.innerHTML = "Camion asignado"
    txtChofer.innerHTML = "Chofer asignado"
    txtFecha.innerHTML = "Fecha armado"

    txtAñadirPaquete.innerHTML = "Añadir paquete"
    txtPDireccion.innerHTML = "Direccion"
    txtPDestinatario.innerHTML = "Destinatario"
    txtPBultoAsignado.innerHTML = "Bulto Asignado"
    txtCrearPaquete.innerHTML = "Crear paquete"

    txtAñadirBulto.innerHTML = "Añadir bulto"
    txtCamionAsignado.innerHTML = "Camion asignado"
    txtChoferAsignado.innerHTML = "Chofer asignado"
    txtPaquetesContenidos.innerHTML = "Paquetes contenidos"
    txtCrearBulto = "Crear bulto"


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