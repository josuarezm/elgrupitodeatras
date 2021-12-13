function initMap(){

    var options = {
        center: {lat:4.66128695170898 , lng: -74.09820509597782},
        zoom: 8
    }
    map = new google.maps.Map(document.getElementById("map"),options)
    console.log("it runs")

}