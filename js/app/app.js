
var markersApp = initMarkers()

markersApp[0].LoadProperty()

fillInfoHouse()


function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: { lat: 4.66128695170898, lng: -74.09820509597782 },
    });
    /*
    const infoWindow = new google.maps.InfoWindow({
        content: "",
        disableAutoPan: true,
    });
    */
    // Add some markers to the map.

    const markers = markersApp.map((eachMarker, i) => {
        const position = eachMarker.pos
        const label = eachMarker.idHouse.toString();
        const marker = new google.maps.Marker({
            position,
            label,
        });

        const markerClick = function(){
            
            //infoWindow.setContent(label);
            //infoWindow.open(map, marker);
            
            var myOffCanvas = document.getElementById("sideBarMarker");
            var bsOffCanvas = new bootstrap.Offcanvas   (myOffCanvas);
            eachMarker.LoadProperty();
            fillInfoHouse(eachMarker.property)
            bsOffCanvas.toggle()
            
        } 

        // markers can only be keyboard focusable when they have click listeners
        // open info window when marker is clicked
        marker.addListener("click", markerClick);
        return marker;
    });

    // Add a marker clusterer to manage the markers.
    new markerClusterer.MarkerClusterer({ markers, map });
}


function removeAllChilds(a) {
    var a = document.getElementById(a);
    while (a.hasChildNodes())
        a.removeChild(a.firstChild);
}

function fillHouseFeatures(features =["prueba","prueba"]){
    removeAllChilds('featuresMarker')
    for (var i = 0; i < features.length; i++){
        let feat = document.createElement("li")
        feat.classList.add("list-group-item")
        feat.appendChild(document.createTextNode(features[i]))
        document.getElementById('featuresMarker').appendChild(feat)
    }
}

function fillInfoHouse(property = new Property(0) ){
    //fill main data
    removeAllChilds('mainPrice')
    removeAllChilds('mainType')
    removeAllChilds('mainArea')
    removeAllChilds('mainUbication')
    document.getElementById('mainPrice').appendChild(document.createTextNode(property.price))
    document.getElementById('mainType').appendChild(document.createTextNode(property.type))
    document.getElementById('mainArea').appendChild(document.createTextNode(property.area))
    document.getElementById('mainUbication').appendChild(document.createTextNode(property.ubication))

    document.getElementById('cityMarker').value = property.city
    document.getElementById('localMarker').value= property.loc
    document.getElementById('neighborMarker').value= property.neighborhood
    document.getElementById('dirMarker').value= property.dir
    document.getElementById('estrMarker').value= property.estr
    
    document.getElementById('areaMarker').value= property.area
    document.getElementById('roomsMarker').value= property.rooms
    document.getElementById('bathroomMarker').value= property.bathrooms
    document.getElementById('floorsMarker').value= property.floors
    document.getElementById('parkingMarker').value= property.parking
    /*features*/
    fillHouseFeatures(property.features)

    document.getElementById('priceMarker').value= property.price
    document.getElementById('userMarker').value= property.sellerUser
    document.getElementById('celMarker').value= property.sellerCel
    document.getElementById('emailMarker').value= property.sellerMail

    document.getElementById('img1Marker').src= property.img1
    document.getElementById('img2Marker').src= property.img2
    document.getElementById('img3Marker').src= property.img3
}
