import React from "react";

//import basement from 'assets/img/basement.jpg';
const Maps = () => {
  const mapRef = React.useRef(null);
  React.useEffect(() => {
    let google = window.google;
    let map = mapRef.current;
    //Marker 1
    let lat = "39.9612"; 
    let lng = "-82.9988";
    //Marker 2
    let lat1 = "40.1";
    let lng1 = "-83";
    //Marker 3
    let lat2 = "40";
    let lng2 = "-82.8";
    //Marker 4
    let lat3 = "40.002";
    let lng3 = "-82.88";
    //Marker 5
    let lat4 = "40.12";
    let lng4 = "-82.9";
    //center
    let lat5 = "40.05"; 
    let lng5 = "-82.93"; 
    const myLatlng = new google.maps.LatLng(lat,lng);
    const myLatlng1 = new google.maps.LatLng(lat1,lng1);
    const myLatlng2 = new google.maps.LatLng(lat2,lng2);
    const myLatlng3 = new google.maps.LatLng(lat3,lng3);
    const myLatlng4 = new google.maps.LatLng(lat4,lng4);
    //center
    const myLatlng5 = new google.maps.LatLng(lat5,lng5);
    
    const mapOptions = {
      zoom: 11.4,
      center: myLatlng5,
      center1:myLatlng1,
      center2:myLatlng2,
      center3:myLatlng3,
      center4:myLatlng4,
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

//Marker 1
    const marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Open Garage",
    });
//Marker 2
    const marker1 = new google.maps.Marker({
      position: myLatlng1,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Heated Basement",
    });
//Marker 3
    const marker2 = new google.maps.Marker({
      position: myLatlng2,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Small Shed",
    });
//Marker 4    
    const marker3 = new google.maps.Marker({
      position: myLatlng3,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Easy Access Basement",
    });
//Marker 5    
    const marker4 = new google.maps.Marker({
      position: myLatlng4,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Attic Space",
    });

//Marker 1    
    const contentString =
      '<div class="info-window-content"><h3><a className="locationoneLink" href="/admin/locationone">Open Garage</a></h3>' +
      "<img src = 'https://www.thespruce.com/thmb/OSikhwOUp996sGOElb_FwcgkwSs=/2576x2576/smart/filters:no_upscale()/upscale-residential-house-has-neat-garage-168531302-588389105f9b58bdb36b0226.jpg' style= 'height:150px;width:150px;'/></div>" +
      '<a href="mailto:JohnnySinner@storagerents.com">Contact Location</a>';
//Marker 2    
    const contentString1 =
      '<div class="info-window-content"><h3><a className="locationtwoLink" href="/admin/locationtwo">Heated Basement</a></h3>' +
      "<img src = 'https://images.squarespace-cdn.com/content/v1/58584a30b8a79be1adfc051b/1566254313871-GM9RDEVNN7TM9M8K1Y8B/Before%2B2.jpg' style= 'height:150px;width:200px;'/></div>"+
      '<a href="mailto:JohnnySinner@storagerents.com">Contact Location</a>';
//Marker 3    
    const contentString2 =
      '<div class="info-window-content"><h3><a className="locationthreeLink" href="/admin/locationthree">Small Shed</a></h3>' +
      "<img src = 'https://dunsterhouse.co.uk/img/product-images/2/Adam-Shed-1824-Open-Main_l.jpg' style= 'height:150px;width:175px;'/></div>"+
      '<a href="mailto:sashaturner@storagerents.com">Contact Location</a>';
   // const contentImg2 = 

//Marker 4    
    const contentString3 =
      '<div class="info-window-content"><h3><a className="locationfourLink" href="/admin/locationfour">Basement</a></h3>' +
      "<img src ='https://nexus.prod.postmedia.digital/wp-content/uploads/2020/01/SP.0110-a31-basement.jpg' style= 'height:150px;width:175px;' /> </div>"+
      '<a href="mailto:sashaturner@storagerents.com">Contact Location</a>';
//Marker 5    
    const contentString4 =
      '<div class="info-window-content"><h3><a className="locationfiveLink" href="/admin/locationfive">Attic Space</a></h3>' +
      "<img src ='https://583931-1890891-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2021/05/good-or-bad-using-your-attic-for-storage.jpg' style= 'height:150px;width:200px;'/> </div>"+
      '<a href="mailto:JohnnySinner@storagerents.com">Contact Location</a>';

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

  });
  return (
    <>
      <div style={{ height: `92.3vh` }} ref={mapRef}></div>
    </>
  );
};

export default Maps;
