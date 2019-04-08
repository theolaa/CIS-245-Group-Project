var map;
var globalCoords;
var pos;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), pos);
    marker = new google.maps.Marker({ position: globalCoords, map: map, title: "Marker 1" });
}

function getLocation() {
    navigator.geolocation.getCurrentPosition(handleCurrentPosition);
}

function handleCurrentPosition(position) {
    coords = position.coords;
    pos = {
        center: {lat: parseFloat(coords.latitude), lng: parseFloat(coords.longitude)},
        zoom: 12
    }

    globalCoords = new google.maps.LatLng(coords.latitude, coords.longitude);
    //initMap(pos);
}