function obtenerLatitudLongitud(direccion) {
    // Crear una instancia de un objeto Geocoder
    var geocoder = new google.maps.Geocoder();
  
    // Llamar al método geocode con la dirección
    geocoder.geocode({ 'address': direccion }, function(results, status) {
      if (status === 'OK') {
        // Si la geocodificación es exitosa, puedes obtener la latitud y longitud
        var latitud = results[0].geometry.location.lat();
        var longitud = results[0].geometry.location.lng();
        console.log('Latitud: ' + latitud);
        console.log('Longitud: ' + longitud);
      } else {
        // Si la geocodificación falla, muestra un mensaje de error
        console.error('Geocodificación fallida: ' + status);
      }
    });
  }
  
  // Llamar a la función con la dirección que deseas geolocalizar
  obtenerLatitudLongitud('1600 Amphitheatre Parkway, Mountain View, CA');

  