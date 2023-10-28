async function obtenerLatitudLongitud(direccion, codigo_postal) {
    let latitud;
    let longitud;
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({ 'address': direccion, 'componentRestrictions': { 'postalCode': codigo_postal } }, function(results, status) {
        if (status === 'OK') {
            latitud = results[0].geometry.location.lat();
            longitud = results[0].geometry.location.lng();
        } else {
            console.error('Geocodificación fallida: ' + status);
        }
        
    });

    return {
        latitud: latitud,
        longitud: longitud
    }
}
