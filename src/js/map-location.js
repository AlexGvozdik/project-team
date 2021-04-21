function initMap() {
    let location = {lat: -25.363, lng: 131.044};
    let map = new google.maps.Map(document.getElementById("destination"), {
        zoom: 4,
        center: location
    });
    let marker = new google.maps.Marker({
        position: location,
        map: map
    });
}