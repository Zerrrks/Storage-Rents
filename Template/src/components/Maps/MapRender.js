import React, { useEffect, useState } from "react";
import axios from "axios";
const Geocodio = require('geocodio-library-node');
const geocoder = new Geocodio('4a594a77282b48723426a2294b545293364638b');
const MapRender = () => {

  const [data, setData] = useState([]);
  const [street_name, setStreet_Name] = useState([]);
  const [city_storage, setCity_Storage] = useState([]);
  const [country_storage, setCountry_Storage] = useState([]);
  const [location_name, setLocation_Name] = useState([]);
  //  const [storage, setStorage] = useState([]);
    useEffect(() => { 
        try {
        axios.get('http://localhost:5000/units/storage', { headers: { jwt_token: localStorage.token,}})
          .then((res) => {
            setData(res.data);
            console.log(res.data);
          }).catch((err) => {
            console.log(err)
          }) } catch (e) {
            console.log('error')
          }
      }, []);
    useEffect(() => {
        setLocation_Name(data.location_name);
        setStreet_Name(data.street_name);
        setCity_Storage(data.city_storage);
        setCountry_Storage(data.country_storage);
     });

      var lat = new Array();
      var lng = new Array();

      var addresses = [
        [location_name+", "+street_name+", "+city_storage+" "+country_storage]
      ]
      console.log(addresses);
      geocoder
      .geocode(addresses)
    //.reverse([39.9612, -82.9988])
    
      .then(response => {
        response.results.location.lat=lat;
        response.results.location.lng=lng;

      })
    
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
  [data.location_name, lat, lng, e]
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
 /*    //Table Marker Setup
  const marker = new google.maps.Marker[e]({
      position: Latlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: data.location_name,
    });


 //May not need content strings
 Marker 1    
    const contentString =
      '<div class="info-window-content"><h3><a className="locationoneLink" href="/admin/locationone">Open Garage</a></h3>' +
      "<img src = 'https://www.thespruce.com/thmb/OSikhwOUp996sGOElb_FwcgkwSs=/2576x2576/smart/filters:no_upscale()/upscale-residential-house-has-neat-garage-168531302-588389105f9b58bdb36b0226.jpg' style= 'height:150px;width:150px;'/></div>" +
      '<a href="mailto:JohnnySinner@storagerents.com">Contact Location</a>';
 
 //Table Marker Setup

      const infowindow = new google.maps.InfoWindow({
      [content]: [data.location_name + data.location_price + data.square_footage]
    });

*/
 //Table Marker Setup

 //   google.maps.event.addListener(marker, "click", function () {
   //   infowindow.open(map, marker);
   // });


  });
  
  return (
    <>
      <div style={{ height: `92.3vh` }} ref={mapRef}></div>
    </>
  );
};

export default MapRender;