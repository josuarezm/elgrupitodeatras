// app objects

let http_request = false;
let map;
let filters = loadFilters();
fillFilters(filters);
let markersApp =["fo"];
makeRequest('http://kasapp-elgrupitodeatras.herokuapp.com/map',null,0)
let property = new Property(1);
let markerClust;

//makeRequest('http://kasapp-elgrupitodeatras.herokuapp.com/map/detail/'+1, null,2 );
//console.log(JSON.stringify(markersApp));
//console.log(JSON.stringify(markersApp,['pos','lat', 'lng', 'idHouse']));
//console.log(markersApp)
//console.log(JSON.parse('[{"id":1,"latitude":4.593636989593506,"longitude":-74.10095977783203},{"id":2,"latitude":4.6625629833684314,"longitude":-74.05248017561198}] '))
//console.log(JSON.parse('{"id":1,"user_id":1,"value":500000,"type":"apartamento","area":40,"latitude":4.593636989593506,"longitude":-74.10095977783203,"city":"Bogot\u00e1","loc":"","neighborhood":"La frag\u00fcita","address":"carrera 25 # 7 - 18","estr":3,"area_h":40,"area_c":40,"rooms":3,"toilets":1,"floors":1,"parking":0,"created_at":"2022-02-04T04:30:27.000000Z","updated_at":"2022-02-06T13:27:01.000000Z","deleted_at":null,"user":{"id":1,"name":"Admin","email":"admin@casapp.test","email_verified_at":null,"created_at":"2021-12-15T01:24:26.000000Z","updated_at":"2021-12-15T01:24:26.000000Z","profile_photo_url":"https:\/\/ui-avatars.com\/api\/?name=Admin&color=7F9CF5&background=EBF4FF"},"feature":{"id":1,"estate_id":1,"furnished":0,"basement":1,"terrace":0,"security":0,"created_at":"2022-02-07T12:18:25.000000Z","update_at":"2022-02-07 12:18:25","deleted_at":null}}'))
document.getElementById("btn-test-1").addEventListener("click",removeMarkers)

//console.log(markersApp)
//console.log(jsonToMarkers('[{"id":1,"latitude":4.593636989593506,"longitude":-74.10095977783203},{"id":2,"latitude":4.6625629833684314,"longitude":-74.05248017561198}] '))
/*
Markers
[{"id":1,"latitude":4.593636989593506,"longitude":-74.10095977783203},{"id":2,"latitude":4.6625629833684314,"longitude":-74.05248017561198}] 
{"id":1,"user_id":1,"value":500000,"type":"apartamento","area":40,"latitude":4.593636989593506,"longitude":-74.10095977783203,"city":"Bogot\u00e1","loc":"","neighborhood":"La frag\u00fcita","address":"carrera 25 # 7 - 18","estr":3,"area_h":40,"area_c":40,"rooms":3,"toilets":1,"floors":1,"parking":0,"created_at":"2022-02-04T04:30:27.000000Z","updated_at":"2022-02-06T13:27:01.000000Z","deleted_at":null,"user":{"id":1,"name":"Admin","email":"admin@casapp.test","email_verified_at":null,"created_at":"2021-12-15T01:24:26.000000Z","updated_at":"2021-12-15T01:24:26.000000Z","profile_photo_url":"https:\/\/ui-avatars.com\/api\/?name=Admin&color=7F9CF5&background=EBF4FF"},"feature":{"id":1,"estate_id":1,"furnished":0,"basement":1,"terrace":0,"security":0,"created_at":"2022-02-07T12:18:25.000000Z","update_at":"2022-02-07 12:18:25","deleted_at":null}}
*/

function removeMarkers(){
    if(markersApp =! undefined){
        for (let index = 0; index < markersApp.length; index++) {
            markerClust.removeMarker(markersApp[index].marker);
            markersApp[index].marker.setMap(null);
        }
    }
}
function loadInfoProperty(){
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
            makeRequest('http://kasapp-elgrupitodeatras.herokuapp.com/map/detail/'+property.id, null,2 );
            loadInfoProperty();
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
    console.log(markersApp)
    printMarkers()
}
function updateMarkers(newMarkers){
    markersApp = newMarkers;
}

function makeRequest(url, data = null, req) {

    http_request = false;

    if (window.XMLHttpRequest) { // Mozilla, Safari,...
        http_request = new XMLHttpRequest();
        if (http_request.overrideMimeType) {
            http_request.overrideMimeType('text/xml');
            // Ver nota sobre esta linea al final
        }
    } else if (window.ActiveXObject) { // IE
        try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
        }
    }

    if (!http_request) {
        alert('Falla :( No es posible crear una instancia XMLHTTP');
        return false;
    }
    if(req ==0){
        // load all markers
        
        http_request.onreadystatechange = function(){
            updateAllMarkers(markersApp, url,0)
        };
        http_request.open('GET', url, false);
        http_request.send();
    }
    else if(req == 1){
        // make filter
        http_request.onreadystatechange = function(){
            updateAllMarkers(markersApp, url,1)
        };
        http_request.open('GET', url, false);
        http_request.send();
    }
    else if( req == 2){
        // load info House
        http_request.onreadystatechange = function(){
            updateHouseInfo(property)
        };
        http_request.open('GET', url, false);
        http_request.send();
    }

}

function updateAllMarkers(mark, url,type) {

    if (http_request.readyState == 4) {
        if (http_request.status == 200) {
            console.log("holi")
            console.log(mark)
            const ans = http_request.responseText;
            console.log(url+"                       holaaaaa"+ans)
            markersApp = jsonToMarkers(ans)
            console.log(markersApp)
            if(type == 1){
                printMarkers()
            }
            
        } else {
            alert('Hubo problemas con la petición.');
        }
    }
}

function updateHouseInfo(prop) {

    if (http_request.readyState == 4) {
        if (http_request.status == 200) {
            const ans = http_request.responseText;
            console.log(ans)
            prop.loadInfo(ans)
        } else {
            alert('Hubo problemas con la petición.');
        }
    }
}

async function doFilter(filt){
    updateFilter(filt);
    removeMarkers();
    //console.log("http://kasapp-elgrupitodeatras.herokuapp.com/map/filter")
    makeRequest('http://kasapp-elgrupitodeatras.herokuapp.com/map/filter/'+ filt.toJson(), 1);
    console.log('http://kasapp-elgrupitodeatras.herokuapp.com/map/filter/'+ filt.toJson())
}

document.getElementById("btnCleanFilters").addEventListener("click",cleanFilters)
document.getElementById("btnInitFilters").addEventListener("click",function(ev){
    console.log("filter")
    doFilter(filters)
})