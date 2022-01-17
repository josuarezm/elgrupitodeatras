/*
function initMap(){
    var options = {
        center: {lat: 4.66128695170898 , lng: -74.09820509597782},
        zoom: 11
    }
    var map = new google.maps.Map(document.getElementById("map"),options)
    console.log("it runs")
    console.log(document.getElementById('map').className)
}
*/
class MapApp{
    constructor(){
        this.map = null
        this.markers = this.initMarkers();
        this.showMarkers()
    }
    getMap(){
        return this.map
    }

    initMarkers(){
        /* Load markers from database */
        var markers = []
        markers.push(new AppMarker(4.625726863055612, -74.13602537067082, 0))
        markers.push(new AppMarker(4.6625629833684314, -74.05248017561198, 1))
        return markers
    }
    showMarkers(){
        /*add the markers to te map */
    }
    setMarkers(newMarkers){
        this.markers = newMarkers;
        this.showMarkers();
    }
}