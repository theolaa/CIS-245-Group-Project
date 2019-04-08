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
    initMap(pos);
}

function setCurrentPosition(x,y) {
    pos = {
        center: {lat: x, lng: y},
        mapTypeId: 'satellite',
        zoom: 8
    }

    globalCoords = new google.maps.LatLng(coords.latitude, coords.longitude);
    initMap(pos);
}

function generateRandomCoordinates() {

    table = document.getElementsByTagName("table")[0];
    table.innerHTML = "";

    for (i = 0; i < 10; i++) {
        row = document.createElement("tr");
        lat = document.createElement("td");
        lon = document.createElement("td");
        but = document.createElement("td");

        var coords = randomCoords();

        lat.innerHTML = coords.x;
        lon.innerHTML = coords.y;
        but.innerHTML = "Go To";

        but.setAttribute("class", "bg-success");
        but.setAttribute("onclick", "setCurrentPosition("+ coords.x + "," + coords.y + ")");
        but.style.color = "white";

        row.appendChild(lat);
        row.appendChild(lon);
        row.appendChild(but);

        table.appendChild(row);
    }

    table.setAttribute("class", "table table-striped table-hover");
}

function randomCoords() {
    x = (Math.random() >= 0.5) ? Math.random() * (90) : Math.random() * (90) * (-1);
    y = (Math.random() >= 0.5) ? Math.random() * (180) : Math.random() * (180) * (-1);

    x = x.toFixed(5);
    y = y.toFixed(5);

    console.log(x + "," + y);
    return {x: x, y: y};
}