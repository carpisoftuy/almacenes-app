let dataGuardada = localStorage.getItem("paquete")

let data = JSON.parse(dataGuardada)[0]

console.log(data)

let codigo_postal = data.codigo_postal
let direccion = data.direccion
let peso = data.peso
let numero_seguimiento = data.id

let txtDireccion = document.getElementById('direccion')
let txtPeso = document.getElementById('peso')
let txtNumeroSeguimiento = document.getElementById('nro-seguimiento')

txtDireccion.innerHTML = direccion
txtPeso.innerHTML = peso + " KG"
txtNumeroSeguimiento.innerHTML = numero_seguimiento