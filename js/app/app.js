// app objects
let map;
let filters = loadFilters();
let markersApp = initMarkers(filters);
let property;
let markerClust;

console.log(JSON.stringify(markersApp));
console.log(JSON.stringify(markersApp,['pos','lat', 'lng', 'idHouse']));
console.log(markersApp[0])
console.log(JSON.parse('[{"id":1,"latitude":4.593636989593506,"longitude":-74.10095977783203},{"id":2,"latitude":4.6625629833684314,"longitude":-74.05248017561198}] '))
console.log(JSON.parse('{"id":1,"user_id":1,"value":500000,"type":"apartamento","area":40,"latitude":4.593636989593506,"longitude":-74.10095977783203,"city":"Bogot\u00e1","loc":"","neighborhood":"La frag\u00fcita","address":"carrera 25 # 7 - 18","estr":3,"area_h":40,"area_c":40,"rooms":3,"toilets":1,"floors":1,"parking":0,"created_at":"2022-02-04T04:30:27.000000Z","updated_at":"2022-02-06T13:27:01.000000Z","deleted_at":null,"user":{"id":1,"name":"Admin","email":"admin@casapp.test","email_verified_at":null,"created_at":"2021-12-15T01:24:26.000000Z","updated_at":"2021-12-15T01:24:26.000000Z","profile_photo_url":"https:\/\/ui-avatars.com\/api\/?name=Admin&color=7F9CF5&background=EBF4FF"},"feature":{"id":1,"estate_id":1,"furnished":0,"basement":1,"terrace":0,"security":0,"created_at":"2022-02-07T12:18:25.000000Z","update_at":"2022-02-07 12:18:25","deleted_at":null}}'))
document.getElementById("btn-test-1").addEventListener("click",removeMarkers)
document.getElementById("btn-test-2").addEventListener("click",function(){
    //for (let index = 0; index < markersApp.length; index++) {
        markersApp = initMarkers();
        printMarkers()
    //}
})
console.log(markersApp)
console.log(jsonToMarkers('[{"id":1,"latitude":4.593636989593506,"longitude":-74.10095977783203},{"id":2,"latitude":4.6625629833684314,"longitude":-74.05248017561198}] '))
/*
Markers
[{"id":1,"latitude":4.593636989593506,"longitude":-74.10095977783203},{"id":2,"latitude":4.6625629833684314,"longitude":-74.05248017561198}] 
{"id":1,"user_id":1,"value":500000,"type":"apartamento","area":40,"latitude":4.593636989593506,"longitude":-74.10095977783203,"city":"Bogot\u00e1","loc":"","neighborhood":"La frag\u00fcita","address":"carrera 25 # 7 - 18","estr":3,"area_h":40,"area_c":40,"rooms":3,"toilets":1,"floors":1,"parking":0,"created_at":"2022-02-04T04:30:27.000000Z","updated_at":"2022-02-06T13:27:01.000000Z","deleted_at":null,"user":{"id":1,"name":"Admin","email":"admin@casapp.test","email_verified_at":null,"created_at":"2021-12-15T01:24:26.000000Z","updated_at":"2021-12-15T01:24:26.000000Z","profile_photo_url":"https:\/\/ui-avatars.com\/api\/?name=Admin&color=7F9CF5&background=EBF4FF"},"feature":{"id":1,"estate_id":1,"furnished":0,"basement":1,"terrace":0,"security":0,"created_at":"2022-02-07T12:18:25.000000Z","update_at":"2022-02-07 12:18:25","deleted_at":null}}
*/

function removeMarkers(){
    for (let index = 0; index < markersApp.length; index++) {
        markerClust.removeMarker(markersApp[index].marker);
        markersApp[index].marker.setMap(null);
    }
}
async function loadInfoProperty(){
    property.loadInfo();
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
function updateMarkers(newMarkers){
    markersApp = newMarkers;
}