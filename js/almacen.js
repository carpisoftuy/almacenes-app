const URL = "http://127.0.0.1:8001/api/v2";


function asignarBulto(id_paquete, id_bulto){

    console.log("merca")

    jQuery.ajax({  
        url: 'http://127.0.0.1:8001/api/v2/asignar/paquetes/', 
        type: 'POST',
        data: {
            'id_paquete': id_paquete,
            'id_bulto': id_bulto,
        },
        
        success: function(data) {  
            alert("Pronto");
        },

        error: function(){
            alert("Credenciales invalidas");
        } 
    
    });

}

function eliminarPaquete(id_paquete){

    jQuery.ajax({  
        url: 'http://127.0.0.1:8001/api/v2/paquetes/'+id_paquete, 
        type: 'DELETE',
        
        success: function() {  
            alert("Pronto");
        },

        error: function(){
            alert("Credenciales invalidas");
        } 
    
    });


}

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

        if(element.almacen == undefined){
            element.almacen = {
                id: "",
                direccion: "No esta en un almacen"
            }
        }



        tabla_paquete.innerHTML += `
        
                <tr>
                    <td>${element.id}</td>
                    <td>${element.ubicacion.direccion}</td>
                    <td>${element.almacen.direccion}</td>
                    <td>${element.bulto}</td>
                    <td><a href="#" class="modificar">modificar</a></td>
                    <td><select id="select${element.id}" class="selectAsignarBulto"></select></td>
                    <td><button class="btnAsignarBulto" onclick="asignarBulto(${element.id}, document.getElementById('select${element.id}').value)">Asignar</button></td>
                    <td><button class="btnEliminar" onclick="eliminarPaquete(${element.id})">Eliminar</button></td>
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
let inputPeso = document.getElementById("inputPeso")
let inputVolumen = document.getElementById("inputVolumen")
let crearPaquete = document.getElementById("crearPaquete")

let select2 = document.getElementById("selectAlmacenes2")
let select3 = document.getElementById("selectAlmacenes3")
let selectAlmacenOrigen = document.getElementById("selectAlmacenOrigen")




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

        inputDireccion.classList.add("required")
        inputCodigo.classList.add("required")
        selectAlmacen.classList.remove("required")

    }

    if(opcionSeleccionada == "recoger"){
        pDireccion.classList.add("d-none")
        inputDireccion.classList.add("d-none")
        pCodigo.classList.add("d-none")
        inputCodigo.classList.add("d-none")
        pAlmacen.classList.remove("d-none")
        selectAlmacen.classList.remove("d-none")

        inputDireccion.classList.remove("required")
        inputCodigo.classList.remove("required")
        selectAlmacen.classList.add("required")
    }

})

//agregar almacenes al frontend del select almacen

fetch(URL+"/almacenes")

.then(response => {
    if (!response.ok) {
    throw new Error('La solicitud no se pudo completar.');
    }
    return response.json();
})

.then(almacenes => {   
    
    //select almacen lo llamamos antes

    console.log(almacenes)

    almacenes.forEach(element => {
    
        selectAlmacen.innerHTML += `


        <option value="${element.id}">${element.id}: ${element.direccion}, ${element.codigo_postal}</option>
        
        `

        select2.innerHTML += `
        
        <option value="${element.id}">${element.id}: ${element.direccion}, ${element.codigo_postal}</option>
        
        `

        select3.innerHTML += `
        
        <option value="${element.id}">${element.id}: ${element.direccion}, ${element.codigo_postal}</option>
        
        `

        selectAlmacenOrigen.innerHTML += `
        
        <option value="${element.id}">${element.id}: ${element.direccion}, ${element.codigo_postal}</option>
        
        `

    });


})

.catch(error => {
    console.error('Error al consultar la API:', error);
});

crearPaquete.addEventListener("click", function(e){

    e.preventDefault()

    let pesoIngresado = inputPeso.value
    let volumenIngresado = inputVolumen.value
    let direccion = inputDireccion.value
    let codigo = inputCodigo.value
    let almacen = selectAlmacen.value
    let almacenOrigen = selectAlmacenOrigen.value

    if(select.value == "entregar"){

         let coordenadas = {}

            var geocoder = new google.maps.Geocoder();

            geocoder.geocode({ 'address': direccion, 'componentRestrictions': { 'postalCode': codigo } }, function(results, status) {
                if (status === 'OK') {
                    coordenadas.latitud = results[0].geometry.location.lat();
                    coordenadas.longitud = results[0].geometry.location.lng();

                    console.log(coordenadas)
                    datos_push_paquete = {
                        tipo: "entregar",
                        peso: pesoIngresado,
                        volumen: volumenIngresado,
                        direccion: direccion,
                        codigo_postal: codigo,
                        latitud: coordenadas.latitud,
                        longitud: coordenadas.longitud,
                        almacen_origen: almacenOrigen
                    }

                    jQuery.ajax({  
                        url: 'http://127.0.0.1:8001/api/v2/paquetes/', 
                        type: 'POST',
                        data: datos_push_paquete,
                        
                        success: function(data) {  
                            alert("Pronto");
                        },
                
                        error: function(data){
                            alert("Credenciales invalidas");
                        } 
                    
                    });

                    } else {
                        console.error('Geocodificación fallida: ' + status);
                    }
                
            })


    }else{

        datos_push_paquete = {
            tipo: "recoger",
            peso: pesoIngresado,
            volumen: volumenIngresado,
            almacen_destino: almacen,
            almacen_origen: almacenOrigen
        }

        jQuery.ajax({  
            url: 'http://127.0.0.1:8001/api/v2/paquetes/', 
            type: 'POST',
            data: datos_push_paquete,
            
            success: function(data) {  
                alert("Pronto");
            },
    
            error: function(data){
                alert("Credenciales invalidas");
            } 
        
        });
        
    }

    console.log(datos_push_paquete)
});


//crear bulto

let btnBulto = document.getElementById("crearBulto")

btnBulto.addEventListener("click", function(e){

    almacen_destino_bulto = select2.value 
    almacen_origen_bulto = select3.value

    data_push_bulto = {
        volumen: 0,
        peso: 0,
        almacen_origen: almacen_origen_bulto,
        almacen_destino: almacen_destino_bulto
    }

    e.preventDefault();

    jQuery.ajax({  
        url: 'http://127.0.0.1:8001/api/v2/bultos/', 
        type: 'POST',
        data: data_push_bulto,
        
        success: function(data) {  
            alert("Pronto");
            window.location.reload()
        },

        error: function(){
            alert("Credenciales invalidas");
        } 
    
    });

})

//poblar tabla bultos

fetch(URL+"/bultos")

.then(response => {
    if (!response.ok) {
    throw new Error('La solicitud no se pudo completar.');
    }
    return response.json();
})

.then(bultos => { 


    console.log(bultos)

    let tablaBulto = document.getElementById("bodyTablaBultos")

    bultos.forEach(function(element){

        tablaBulto.innerHTML += `
        
                <tr>
                    <td>${element.id}</td>
                    <td>${element.direccion_destino}, ${element.codigo_postal_destino}</td>
                    <td>${element.direccion_actual}, ${element.codigo_postal_actual}</td>
                    <td>${element.fecha_armado}</td>
                    <td><a href="#" class="modificar">modificar</a></td>
                </tr>
        
        `

    })


    

})

//mostrar en select todos los bultos

fetch(URL+"/bultos")

.then(response => {
    if (!response.ok) {
    throw new Error('La solicitud no se pudo completar.');
    }
    return response.json();
})

.then(bultos => {   
    
    //select almacen lo llamamos antes

    console.log(bultos)

    let selectAsignarBultos = document.getElementsByClassName("selectAsignarBulto")

    console.log(selectAsignarBultos)

    bultos.forEach(element => {

        for (let i = 0; i < selectAsignarBultos.length; i++) {
            let selectActual = selectAsignarBultos[i];
            selectActual.innerHTML += `
            
            <option value="${element.id}">${element.id}: ${element.fecha_armado}</option>
            
            `
        }

    });


})

.catch(error => {
    console.error('Error al consultar la API:', error);
});



