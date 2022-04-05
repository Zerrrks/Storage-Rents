/*import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
// @material-ui/core components
//import { makeStyles } from "@material-ui/core/styles";
//import InputLabel from "@material-ui/core/InputLabel";
// core components

//import CustomInput from "components/CustomInput/CustomInput.js";
//import Button from "components/CustomButtons/Button.js";
//import Card from "components/Card/Card.js";
//import CardHeader from "components/Card/CardHeader.js";
//import CardAvatar from "components/Card/CardAvatar.js";
//import CardBody from "components/Card/CardBody.js";
//import CardFooter from "components/Card/CardFooter.js";
//import { columns } from "components/StorageList/Column";
import MapRender from "components/Maps/MapRender.js";
//import LocationRoute from "./LocationRoute"

//import avatar from "assets/img/faces/marc.jpg";

//import { bugs, website, server } from "variables/general.js";

//import {
//  dailySalesChart,
//  emailsSubscriptionChart,
// completedTasksChart,
//} from "variables/charts.js";

//import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

//const useStyles = makeStyles(styles);


//const classes = useStyles();
    
function Maps () {
  const [data, setData] = useState([]);
  useEffect(() => { 
    try {
    axios.get('http://localhost:5000/maps/storage', { headers: { jwt_token: localStorage.token,}})
      .then((res) => {
        setData(res.data);
      }).catch((err) => {
        console.log(err)
      }) } catch (e) {
        console.log('error')
      }
  }, []);
    return (
     
      

              <Fragment>
                <MapRender data={data} />
              </Fragment>
      
      );
    }
export default Maps
*/
import React from "react";



const Maps = () => {
  const mapRef = React.useRef(null);
  React.useEffect(() => {
    let google = window.google;
    let map = mapRef.current;
    //Marker 1
    let lat = "39.071262"; 
    let lng = "-84.37574";
    //Marker 2
    let lat1 = "39.967511";
    let lng1 = "-82.922717";
    //Marker 3
    let lat2 = "39.306726";
    let lng2 = "-84.550003";
    //Marker 4
    let lat3 = "39.245728";
    let lng3 = "-84.372666";
    //Marker 5
    let lat4 = "39.081262";
    let lng4 = "-84.37584";
    let lat5 = "39.968482"; 
    let lng5 = "-82.93068";
    //Marker 2
    let lat6 = "39.306726";
    let lng6 = "-884.55003";
    //Marker 3
    let lat7 = "39.071252";
    let lng7 = "-884.37594";
    //Marker 4
    let lat8 = "39.228039";
    let lng8 = "-84.37347";
    //Marker 5
    let lat9 = "39.150829";
    let lng9 = "-84.519894";
    //center
    let lat11 = "39.6539"; 
    let lng11 = "-83.5632"; 
    const myLatlng = new google.maps.LatLng(lat,lng);
//  const myLatlng[e] = new google.maps.LatLng(lat[e],lng[e]);
    const myLatlng1 = new google.maps.LatLng(lat1,lng1);
    const myLatlng2 = new google.maps.LatLng(lat2,lng2);
    const myLatlng3 = new google.maps.LatLng(lat3,lng3);
    const myLatlng4 = new google.maps.LatLng(lat4,lng4);
    const myLatlng5 = new google.maps.LatLng(lat5,lng5);
    //  const myLatlng[e] = new google.maps.LatLng(lat[e],lng[e]);
        const myLatlng6 = new google.maps.LatLng(lat6,lng6);
        const myLatlng7 = new google.maps.LatLng(lat7,lng7);
        const myLatlng8 = new google.maps.LatLng(lat8,lng8);
        const myLatlng9 = new google.maps.LatLng(lat9,lng9);
    //center
    const myLatlng11 = new google.maps.LatLng(lat11,lng11);
/* Average LatLng for center
      var totalLat = 0;
      for(var i = 0; i < lat.length; i++) {
      totalLat += lat[i];
}
    var avgLat = totalLat / lat.length;

      var totalLng = 0;
      for(var i = 0; i < lng.length; i++) {
      totalLng += lng[i];
}
    var avgLng = totalLng / lng.length;
    const avgLatLng = new google.maps.LatLng(avgLat, avgLng);

*/
    const mapOptions = {
      zoom: 9,
//    center: avgLatLng
      center: myLatlng11,
      center1:myLatlng1,
      center2:myLatlng2,
      center3:myLatlng3,
      center4:myLatlng4,
      center6:myLatlng6,
      center5: myLatlng5,
      center7:myLatlng7,
      center8:myLatlng8,
      center9:myLatlng9,
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
//Table Marker Setup

//Marker 1
    const marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Full Attic",
    });
//Marker 2
    const marker1 = new google.maps.Marker({
      position: myLatlng1,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Garage",
    });
//Marker 3
    const marker2 = new google.maps.Marker({
      position: myLatlng2,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Cindy's Garage",
    });
//Marker 4    
    const marker3 = new google.maps.Marker({
      position: myLatlng3,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Finished Basement",
    });
//Marker 5    
    const marker4 = new google.maps.Marker({
      position: myLatlng4,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Basement Space",
    });
    const marker5 = new google.maps.Marker({
      position: myLatlng5,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Basement",
    });
//Marker 2
    const marker6 = new google.maps.Marker({
      position: myLatlng6,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Cindy's Barn",
    });
//Marker 3
    const marker7= new google.maps.Marker({
      position: myLatlng7,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Big Shed",
    });
//Marker 4    
    const marker8 = new google.maps.Marker({
      position: myLatlng8,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Trendy Shed",
    });
//Marker 5    
    const marker9 = new google.maps.Marker({
      position: myLatlng9,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Locked Garage",
    });
//May not need content strings
//Marker 1    
    const contentString =
      '<div class="info-window-content"><h3>Full Attic</h3>' +
     
      '<a href="mailto:JohnnySinner@storagerents.com">Contact Location</a>';
//Marker 2    
    const contentString1 =
      '<div class="info-window-content"><h3>Garage</h3>' +
      
      '<a href="mailto:JohnnySinner@storagerents.com">Contact Location</a>';
//Marker 3    
    const contentString2 =
      '<div class="info-window-content"><h3>Cindys Garage</h3>' +
     
      '<a href="mailto:sashaturner@storagerents.com">Contact Location</a>';
   // const contentImg2 = 

//Marker 4    
    const contentString3 =
      '<div class="info-window-content"><h3>Finsihed Basement</h3>' +
     
      '<a href="mailto:sashaturner@storagerents.com">Contact Location</a>';
//Marker 5    
    const contentString4 =
      '<div class="info-window-content"><h3>Basement Space</h3>' +
      
      '<a href="mailto:JohnnySinner@storagerents.com">Contact Location</a>';
    const contentString5 =
      '<div class="info-window-content"><h3>Basement</h3>' +
     
      '<a href="mailto:JohnnySinner@storagerents.com">Contact Location</a>';
//Marker 2    
    const contentString6 =
      '<div class="info-window-content"><h3>Cindys Barn</h3>' +
      
      '<a href="mailto:JohnnySinner@storagerents.com">Contact Location</a>';
//Marker 3    
    const contentString7 =
      '<div class="info-window-content"><h3>Big Shed</h3>' +
     
      '<a href="mailto:sashaturner@storagerents.com">Contact Location</a>';
   // const contentImg2 = 

//Marker 4    
    const contentString8 =
      '<div class="info-window-content"><h3>Trendy Shed</h3>' +
     
      '<a href="mailto:sashaturner@storagerents.com">Contact Location</a>';
//Marker 5    
    const contentString9 =
      '<div class="info-window-content"><h3>Locked Garage</h3>' +
      
      '<a href="mailto:JohnnySinner@storagerents.com">Contact Location</a>';
//Table Marker Setup
/*
      const infowindow[e] = new google.maps.InfoWindow({
      content: //location_name[e] + "img[e]" + "contact[e]",
    });
*/
//Marker 1
    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });
//Marker 2    
    const infowindow1 = new google.maps.InfoWindow({
      content: contentString1,
    });
//Marker 3    
    const infowindow2 = new google.maps.InfoWindow({
      content: contentString2,
    });
//Marker 4    
    const infowindow3 = new google.maps.InfoWindow({
      content: contentString3,
    });
//Marker 5    
    const infowindow4 = new google.maps.InfoWindow({
      content: contentString4,
    });
    //Marker 1
    const infowindow5 = new google.maps.InfoWindow({
      content: contentString5,
    });
//Marker 2    
    const infowindow6 = new google.maps.InfoWindow({
      content: contentString6,
    });
//Marker 3    
    const infowindow7 = new google.maps.InfoWindow({
      content: contentString7,
    });
//Marker 4    
    const infowindow8 = new google.maps.InfoWindow({
      content: contentString8,
    });
//Marker 5    
    const infowindow9 = new google.maps.InfoWindow({
      content: contentString9,
    });
//Table Marker Setup
/*
    google.maps.event.addListener(marker[e], "click", function () {
      infowindow[e].open(map, marker[e]);
    });*/
//Marker 1
    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
//Marker 2    
    google.maps.event.addListener(marker1, "click", function () {
      infowindow1.open(map, marker1);
    });
//Marker 3    
    google.maps.event.addListener(marker2, "click", function () {
      infowindow2.open(map, marker2);
    });
//Marker 4
    google.maps.event.addListener(marker3, "click", function () {
      infowindow3.open(map, marker3);
    });
//Marker 5    
    google.maps.event.addListener(marker4, "click", function () {
      infowindow4.open(map, marker4);
    });
    google.maps.event.addListener(marker5, "click", function () {
      infowindow5.open(map, marker5);
    });
//Marker 2    
    google.maps.event.addListener(marker6, "click", function () {
      infowindow6.open(map, marker6);
    });
//Marker 3    
    google.maps.event.addListener(marker7, "click", function () {
      infowindow7.open(map, marker7);
    });
//Marker 4
    google.maps.event.addListener(marker8, "click", function () {
      infowindow8.open(map, marker8);
    });
//Marker 5    
    google.maps.event.addListener(marker9, "click", function () {
      infowindow9.open(map, marker9);
    });
  });
  return (
    <>
      <div style={{ height: `92.3vh` }} ref={mapRef}></div>
    </>
  );
};

export default Maps