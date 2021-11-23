import React from "react";

const Maps = () => {
  const mapRef = React.useRef(null);
  React.useEffect(() => {
    let google = window.google;
    let map = mapRef.current;
    let lat = "39.9612"; 
    let lng = "-82.9988";
    let lat1 = "40.1";
    let lng1 = "-83";
    let lat2 = "40";
    let lng2 = "-82.8";
    let lat3 = "40.002";
    let lng3 = "-82.88";
    let lat4 = "40.12";
    let lng4 = "-82.9";
    const myLatlng = new google.maps.LatLng(lat,lng);
    const myLatlng1 = new google.maps.LatLng(lat1,lng1);
    const myLatlng2 = new google.maps.LatLng(lat2,lng2);
    const myLatlng3 = new google.maps.LatLng(lat3,lng3);
    const myLatlng4 = new google.maps.LatLng(lat4,lng4);
    const mapOptions = {
      zoom: 12,
      center: myLatlng,
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

    const marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Material Dashboard React!",
    });
    
    const marker1 = new google.maps.Marker({
      position: myLatlng1,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Material Dashboard React!",
    });
    
    const marker2 = new google.maps.Marker({
      position: myLatlng2,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Material Dashboard React!",
    });
    
    const marker3 = new google.maps.Marker({
      position: myLatlng3,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Material Dashboard React!",
    });
    
    const marker4 = new google.maps.Marker({
      position: myLatlng4,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Material Dashboard React!",
    });
    
    const contentString =
      '<div class="info-window-content"><h2>Initial</h2>' +
      "<p>IDFK</p></div>";
    
    const contentString1 =
      '<div class="info-window-content"><h2>1</h2>' +
      "<p>Pooter</p></div>";
    
    const contentString2 =
      '<div class="info-window-content"><h2>2</h2>' +
      "<p>Weiner</p></div>";
    
    const contentString3 =
      '<div class="info-window-content"><h2>3</h2>' +
      "<p>Butthole</p></div>";
    
    const contentString4 =
      '<div class="info-window-content"><h2>4</h2>' +
      "<p>Butts</p></div>";

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });
    
    const infowindow1 = new google.maps.InfoWindow({
      content: contentString1,
    });
    
    const infowindow2 = new google.maps.InfoWindow({
      content: contentString2,
    });
    
    const infowindow3 = new google.maps.InfoWindow({
      content: contentString3,
    });
    
    const infowindow4 = new google.maps.InfoWindow({
      content: contentString4,
    });

    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
    
    google.maps.event.addListener(marker1, "click", function () {
      infowindow1.open(map, marker1);
    });
    
    google.maps.event.addListener(marker2, "click", function () {
      infowindow2.open(map, marker2);
    });
    
    google.maps.event.addListener(marker3, "click", function () {
      infowindow3.open(map, marker3);
    });
    
    google.maps.event.addListener(marker4, "click", function () {
      infowindow4.open(map, marker4);
    });

  });
  return (
    <>
      <div style={{ height: `100vh` }} ref={mapRef}></div>
    </>
  );
};

export default Maps;
