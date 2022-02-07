// app objects
let map
let filters = loadFilters()
let markersApp = initMarkers(filters)
let property
let markerClust

document.getElementById("btn-test-1").addEventListener("click",removeMarkers)
document.getElementById("btn-test-2").addEventListener("click",function(){
    //for (let index = 0; index < markersApp.length; index++) {
        markersApp = initMarkers();
        printMarkers()
    //}
})

function removeMarkers(){
    for (let index = 0; index < markersApp.length; index++) {
        markerClust.removeMarker(markersApp[index].marker);
        markersApp[index].marker.setMap(null);
    }
}
async function loadInfoProperty(){
    property.loadInfo()
    fillInfoHouse(property);
    
    var myOffCanvas = document.getElementById("sideBarMarker");
    var bsOffCanvas = new bootstrap.Offcanvas   (myOffCanvas)
    bsOffCanvas.toggle();
}
function printMarkers(){
    const markers = markersApp.map((eachMarker, i) => {
        const position = eachMarker.pos
        const label = eachMarker.idHouse.toString();
        const marker = new google.maps.Marker({
            position,
            label,
        });
        eachMarker.marker = marker;
        const markerClick = async function(){
            
            //infoWindow.setContent(label);
            //infoWindow.open(map, marker);
            ;
            property = new Property(eachMarker.idHouse);
            loadInfoProperty()
            
            console.log(eachMarker.marker);
            console.log(marker)
        }
        // markers can only be keyboard focusable when they have click listeners
        // open info window when marker is clicked
        eachMarker.marker.addListener("click", markerClick);
        return eachMarker.marker;
    });

    // Add a marker clusterer to manage the markers.
    markerClust = new markerClusterer.MarkerClusterer({ markers, map });
}

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: { lat: 4.66128695170898, lng: -74.09820509597782 },
    });
    // print markers
    printMarkers()
}
