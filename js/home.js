function test(e) {
    if (e.innerHTML.charAt(0) == 'S') {
        // Show geodata
        e.innerHTML = "Hide Geolocation Data";

    } else {
        // Hide geodata
        e.innerHTML = "Show Geolocation Data";
    }
}