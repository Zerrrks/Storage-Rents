const Geocodio = require('geocodio-library-node');
const geocoder = new Geocodio('7f919baa291d25f6a558211155f21b6dd6b6522');
// const geocoder = new Geocodio('7f919baa291d25f6a558211155f21b6dd6b6522', 'api-hipaa.geocod.io'); // optionally overwrite the API hostname

geocoder
  .geocode('75 South Cassingham Rd, Columbus, OHIO')
  //.reverse([39.9612, -82.9988])
  
  .then(response => {
    if (response.results.length > 0){
    console.log(response.results[1].location.lat, response.results[1].location.lng);
    }
  })
  .catch(error => {
    console.error(error);
  });
