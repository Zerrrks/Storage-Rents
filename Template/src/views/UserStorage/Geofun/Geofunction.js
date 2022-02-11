const Geocodio = require('geocodio-library-node');
const geocoder = new Geocodio('7f919baa291d25f6a558211155f21b6dd6b6522');
// const geocoder = new Geocodio('7f919baa291d25f6a558211155f21b6dd6b6522', 'api-hipaa.geocod.io'); // optionally overwrite the API hostname

geocoder
  .geocode('75 S Cassingham Road, Columbus, OH')
  //.reverse([39.9612, -82.9988])
  .then(response => {
    console.log(response);
    console.log ("lat","lng");
    })
  

    /*
    response => {
      "input": {
        "address_components": {
          "number": "1109",
          "predirectional": "N",
          "street": "Highland",
          "suffix": "St",
          "formatted_street": "N Highland St",
          "city": "Arlington",
          "state": "VA",
          "country": "US"
        },
        "formatted_address": "1109 N Highland St, Arlington, VA"
      },
      "results": [
        {
          "address_components": {
            "number": "1109",
            "predirectional": "N",
            "street": "Highland",
            "suffix": "St",
            "formatted_street": "N Highland St",
            "city": "Arlington",
            "county": "Arlington County",
            "state": "VA",
            "zip": "22201",
            "country": "US"
          },
          "formatted_address": "1109 N Highland St, Arlington, VA 22201",
          "location": {
            "lat": 38.886672,
            "lng": -77.094735
          },
          "accuracy": 1,
          "accuracy_type": "rooftop",
          "source": "Arlington"
        },
        {
          "address_components": {
            "number": "1109",
            "predirectional": "N",
            "street": "Highland",
            "suffix": "St",
            "formatted_street": "N Highland St",
            "city": "Arlington",
            "county": "Arlington County",
            "state": "VA",
            "zip": "22201",
            "country": "US"
          },
          "formatted_address": "1109 N Highland St, Arlington, VA 22201",
          "location": {
            "lat": 38.886665,
            "lng": -77.094733
          },
          "accuracy": 1,
          "accuracy_type": "rooftop",
          "source": "Virginia Geographic Information Network (VGIN)"
        }
      ]
    }
    */
  .catch(error => {
    console.error(error);
  });
