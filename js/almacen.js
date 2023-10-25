const URL = "http://127.0.0.1:8000/api/v2";

//mostrar todos los paquetes
fetch(URL+"/paquetes")

.then(response => {
    if (!response.ok) {
    throw new Error('La solicitud no se pudo completar.');
    }
    return response.json();
})

.then(paquetes => {   
    
    tabla_paquete = document.getElementById("table-paquete")

    console.log(paquetes)

    paquetes.forEach(element => {
    
        if(element.ubicacion == undefined){
            element.ubicacion = {direccion: "No asignada"}
        }

        if(element.bulto == undefined){
            element.bulto =  "No asignado"
        }

        tabla_paquete.innerHTML += `
        
                <tr>
                    <td>${element.id}</td>
                    <td>${element.ubicacion.direccion}</td>
                    <td>${element.bulto}</td>
                    <td><a href="#" class="modificar">modificar</a></td>
                </tr>
        
        `

    });


})

.catch(error => {
    console.error('Error al consultar la API:', error);
});


let select = document.getElementById("recogerEntregar")
let pDireccion = document.getElementById("pDireccion")
let inputDireccion = document.getElementById("inputDireccion")
let pCodigo = document.getElementById("pCodigo")
let inputCodigo = document.getElementById("inputCodigo")
let pAlmacen = document.getElementById("pAlmacen")
let selectAlmacen = document.getElementById("selectAlmacen")
let opcionSeleccionada;


select.addEventListener("change", function(){

    opcionSeleccionada = select.value
    console.log(opcionSeleccionada)   

    if(opcionSeleccionada == "entregar"){
        pDireccion.classList.remove("d-none")
        inputDireccion.classList.remove("d-none")
        pCodigo.classList.remove("d-none")
        inputCodigo.classList.remove("d-none")
        pAlmacen.classList.add("d-none")
        selectAlmacen.classList.add("d-none")
    }

    if(opcionSeleccionada == "recoger"){
        pDireccion.classList.add("d-none")
        inputDireccion.classList.add("d-none")
        pCodigo.classList.add("d-none")
        inputCodigo.classList.add("d-none")
        pAlmacen.classList.remove("d-none")
        selectAlmacen.classList.remove("d-none")
    }

})

