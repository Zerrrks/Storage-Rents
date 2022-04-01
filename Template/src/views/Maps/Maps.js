import React, { useEffect, useState } from "react";
import axios from "axios";
const Geocodio = require('geocodio-library-node');
const geocoder = new Geocodio('7f919baa291d25f6a558211155f21b6dd6b6522');
const Maps = () => {

  const [data, setData] = useState([]);
 //  const [storage, setStorage] = useState([]);
  const [lat]= useState([]);
  const [lng]= useState([]);
 
  useEffect(() => { 
      try {
      axios.get('http://localhost:5000/units/storage', { headers: { jwt_token: localStorage.token,}})
        .then((res) => {
          setData(res.data);
        }).catch((err) => {
          console.log(err)
        })  

    geocoder
      .geocode[data.street_name+", "+data.city_storage+", "+data.country_storage+" "+data.postal_c]
    //.reverse([39.9612, -82.9988])

      .then(response => {
        [response.results[0].location.lat]=[lat];
        [response.results[0].location.lng]=[lng];
      })}
        catch (e) {
          console.log('error')
          }
      }, []);
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    let google = window.google;
    let map = mapRef.current;
    //Marker 1

    let lat1 = "39.9612"; 
    let lng1 = "-82.9988";

    const myLatlng = new google.maps.LatLng(lat1,lng1);
    //const Latlng = new google.maps.LatLng[lat,lng];
var locations = [
  [data.location_name, [lat], [lng], e]
];
    const mapOptions = {
      zoom: 11.4,
 //   center: avgLatLng
      center: myLatlng,
      scrollwheel: false,
      zoomControl: true,
      styles: [
        {
          featureType: "water",
          stylers: [{ saturation: 43 }, { lightness: -11 }, { hue: "#0088ff" }],
        },
        {
          featureType: "road",
          elementType: "geometry.fill",
          stylers: [
            { hue: "#ff0000" },
            { saturation: -100 },
            { lightness: 99 },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#808080" }, { lightness: 54 }],
        },
        {
          featureType: "landscape.man_made",
          elementType: "geometry.fill",
          stylers: [{ color: "#ece2d9" }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry.fill",
          stylers: [{ color: "#ccdca1" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#767676" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#ffffff" }],
        },
        { featureType: "poi", stylers: [{ visibility: "off" }] },
        {
          featureType: "landscape.natural",
          elementType: "geometry.fill",
          stylers: [{ visibility: "on" }, { color: "#b8cb93" }],
        },
        { featureType: "poi.park", stylers: [{ visibility: "on" }] },
        {
          featureType: "poi.sports_complex",
          stylers: [{ visibility: "on" }],
        },
        { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
        {
          featureType: "poi.business",
          stylers: [{ visibility: "simplified" }],
        },
      ],
    };

    map = new google.maps.Map(map, mapOptions);
    var infowindow = new google.maps.InfoWindow;

    var marker, e;
    
    for (e = 0; e < locations.length; e++) {  
        marker = new google.maps.Marker({
             position: new google.maps.LatLng(locations[e][1], locations[e][2]),
             map: map
        });
    
        google.maps.event.addListener(marker, 'click', (function(marker, e) {
             return function() {
                 infowindow.setContent(locations[e][0]);
                 infowindow.open(map, marker);
             }
        })(marker, e));
    }
    /*Table Marker Setup
  const marker = new google.maps.Marker[e]({
      position: Latlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: data.location_name,
    });


 //May not need content strings
 /*Marker 1    
    const contentString =
      '<div class="info-window-content"><h3><a className="locationoneLink" href="/admin/locationone">Open Garage</a></h3>' +
      "<img src = 'https://www.thespruce.com/thmb/OSikhwOUp996sGOElb_FwcgkwSs=/2576x2576/smart/filters:no_upscale()/upscale-residential-house-has-neat-garage-168531302-588389105f9b58bdb36b0226.jpg' style= 'height:150px;width:150px;'/></div>" +
      '<a href="mailto:JohnnySinner@storagerents.com">Contact Location</a>';
 
 //Table Marker Setup

      const infowindow = new google.maps.InfoWindow({
      [content]: [data.location_name + data.location_price + data.square_footage]
    });


 //Table Marker Setup

    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
*/

  });
  return (
    <>
      <div style={{ height: `92.3vh` }} ref={mapRef}></div>
    </>
  );
};

export default Maps;
