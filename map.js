function addPlace(place) {
    this.marker = new google.maps.Marker({
        position: place,
        map: map
    });

    this.marker.addListener('click', function () {
        document.getElementById("title").innerHTML = place.title;
        document.getElementById("description").innerHTML = place.description;
    });
}