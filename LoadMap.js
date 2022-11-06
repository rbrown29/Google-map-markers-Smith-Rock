function createMap() {
    
    var element = document.getElementById('map');
    this.map = new google.maps.Map(element, mapOptions);
    
        for (var i = 0; i < places.length; i++) { 
            addPlace(places[i]);
        }

}