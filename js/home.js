var table = document.getElementById("geoDataTable");
var latitude = document.getElementById("latitude");
var longitude = document.getElementById("longitude");
var ip = document.getElementById("ip");
var city = document.getElementById("city");
var region = document.getElementById("region");
var country = document.getElementById("country");

var response;

function test(e) {
    if (e.innerHTML.charAt(0) == 'S') {

        // Show geodata
        e.innerHTML = "Hide Geolocation Data";
        fillData();
        table.style.visibility = "visible";

    } else {
        // Hide geodata
        e.innerHTML = "Show Geolocation Data";
        table.style.visibility = "hidden";
    }
}

function fillData() {
    coords = response.loc.split(",");
    latitude.innerHTML = coords[0];
    longitude.innerHTML = coords[1];
    ip.innerHTML = response.ip;
    city.innerHTML = response.city;
    region.innerHTML = response.region;
    country.innerHTML = response.country;
}

window.onload = function () {
    var request = new XMLHttpRequest();
    var url = "https://www.ipinfo.io/json?token=cd29742991fe7d";

    request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            response = JSON.parse(this.responseText);
            console.log(this);
        }
    };
    request.open("Get", url, true);
    request.send();
}