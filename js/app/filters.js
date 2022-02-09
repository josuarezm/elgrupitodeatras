

function removeAllChilds(a) {
    var a
     = document.getElementById(a);
    while (a.hasChildNodes())
        a.removeChild(a.firstChild);
}

class SingleFilter{
    constructor(value, typeFilter, options=null ){
        this.value = value;
        this.typeFilter = typeFilter;
        this.options = options;
    }
}

class Filter{
    constructor(type, price, area, est, floors, features){
        this.type = type;
        this.price = price;
        this.area = area;
        this.est = est;
        this.floors = floors;
        this.features = features;
    }

    toJson(){
        return JSON.stringify(this);
    }
}
function loadFeatures(){
    return ["Terraza", "zotano", "parqueadero", "Seguridad", "amueblado"];
}
function loadFilters(){
    let typeFilter = new SingleFilter(-1, "type", ["Casa", "Apartamento", "Oficina", "Bodega"]);
    let priceFilter = new SingleFilter(-1,"price");
    let areaFilter = new SingleFilter({max:70, min:25},"area");
    let estFilter = new SingleFilter(-1, "est", ["1","2","3","4","5","6"]);
    let floors = new SingleFilter(-1, "floors");
    let features = new SingleFilter(-1, "features", loadFeatures());
    let filterapp = new Filter(typeFilter, priceFilter, areaFilter, estFilter, floors, features);
    return filterapp;
}

function fillFilters(filter = loadFilters()){
    // tipo de inmueble
    // check is any
    if(filter.type.value == -1){
        document.getElementById("btnradioTypeAny").checked = true;
    }
    else{
        document.getElementById("btnradioType"+filter.type.value).checked = true;
    }
    // price
    if(filter.price.value == -1){
        document.getElementById("btnradioPriceAny").checked = true;
    }
    else{
        document.getElementById("FiltersminValueInput").value = filter.price.value.min;
        document.getElementById("FiltersmaxValueInput").value = filter.price.value.max;
    }
    //area
    if(filter.price.value == -1){
        document.getElementById("btnradioAreaAny").checked = true;
    }
    else{
        document.getElementById("FiltersminAreaInput").value = filter.area.value.min;
        document.getElementById("FiltersmaxAreaInput").value = filter.area.value.max;
    }
    //est
    if(filter.est.value == -1){
        document.getElementById("btnradioEstAny").checked = true;
    }
    else{
        document.getElementById("btnradioEst"+filter.est.value).checked = true;    
    }
    //floors
    if(filter.floors.value == -1){
        document.getElementById("btnradioFloorsAny").checked = true;
    }
    else{
        document.getElementById("FiltersNumberFloors").value = filter.floors.value;
    }
    //features
    let features = filter.features.options
    const docElement = document.getElementById("floatingSelectFeatures");
    removeAllChilds("floatingSelectFeatures");
    for (let index = 0; index < features.length; index++) {
        console.log(features[index])
        const element = document.createElement("option");
        element.value = features[index];
        element.text = features[index];
        if(features[index]==filter.features.value){
            element.selected = true;
        }
        docElement.appendChild(element);
    }
    if(filter.features.value == -1){
        document.getElementById("btnradioFeaturesAny").checked = true
    }
}

function cleanFilters(){
    // tipo de inmueble
    document.getElementById("btnradioTypeAny").checked = true;
    // price
    document.getElementById("btnradioPriceAny").checked = true;
    document.getElementById("FiltersminValueInput").value = null;
    document.getElementById("FiltersmaxValueInput").value = null;
    //area
    document.getElementById("btnradioAreaAny").checked = true;
    document.getElementById("FiltersminAreaText").value = null;
    document.getElementById("FiltersmaxAreaText").value = null;
    //est
    document.getElementById("btnradioEstAny").checked = true;
    //floors
    document.getElementById("FiltersNumberFloors").value = null;
    document.getElementById("btnradioFloorsAny").checked = true;
    //features
    document.getElementById("btnradioFeaturesAny").checked = true;
}

function updateFilter(filter = new Filter()){
    //Type
    //check any option
    let anyOption = document.getElementById("btnradioTypeAny").checked;
    if(anyOption){
        //update filter value
        filter.type.value = -1
    }
    else{
        //check other options
        for (let index = 0; index < filter.type.options.length; index++) {
            let elementChecked = document.getElementById("btnradioType"+filter.type.options[index]).checked;
            if(elementChecked){
                //update filter value
                filter.type.value = filter.type.options[index];
            }
        }
    }
    //Price
    //check any option
    anyOption = document.getElementById("btnradioPriceAny").checked;
    // check price options are not empty
    let optionsEmpty = false
    let min = document.getElementById("FiltersminValueInput").value;
    let max = document.getElementById("FiltersmaxValueInput").value;
    if(min == null || max == null){
        optionsEmpty = true
        //alert!
    }
    if(anyOption || optionsEmpty){
        //update filter value
        filter.price.value = -1
    }
    else{
        //update filter value
        filter.price.value.min = min;
        filter.price.value.max = max;
    }
    //area
    //check any option
    anyOption = document.getElementById("btnradioAreaAny").checked;
    // check options are not empty
    optionsEmpty = false
    min = document.getElementById("FiltersminAreaInput").value;
    max = document.getElementById("FiltersmaxAreaInput").value;
    if(min == null || max == null){
        optionsEmpty = true
        //alert!
    }
    if(anyOption || optionsEmpty){
        //update filter value
        filter.area.value = -1
    }
    else{
        //update filter value
        filter.area.value.min = min;
        filter.area.value.max = max;
    }
    // est
    //check any option
    anyOption = document.getElementById("btnradioEstAny").checked;
    if(anyOption){
        //update filter value
        filter.est.value = -1
    }
    else{
        //check other options
        for (let index = 0; index < filter.est.options.length; index++) {
            let elementChecked = document.getElementById("btnradioEst"+filter.est.options[index]).checked;
            if(elementChecked){
                //update filter value
                filter.est.value = filter.est.options[index];
            }
        }
    }
    // floors
    //check any option
    anyOption = document.getElementById("btnradioFloorsAny").checked;
    optionsEmpty = false
    let floors = document.getElementById("FiltersNumberFloors").value;
    if(floors == null){
        optionsEmpty = true
        //alert!
    }
    if(anyOption || optionsEmpty){
        //update filter value
        filter.floors.value = -1
    }
    else{
        //update filter value
        filter.floors.value = floors
    }
    // features
    //check any option
    anyOption = document.getElementById("btnradioFeaturesAny").checked;
    if(anyOption){
        //update filter value
        filter.features.value = -1
    }
    else{
        filter.features.value = document.getElementById("floatingSelectFeatures").value
    }
    console.log(filter.toJson())
}

async function makeQuery(filter){
    //TODO pasar el objeto filter en json y esperar respuesta
    const string =  filter.toJson();
    //POST
    return ''
}

function jsonToMarkers(jsonStr){
    // make an aux marker object array
    const jsonMarkersObject = JSON.parse(jsonStr)
    console.log(jsonMarkersObject)
    const markersArray = []
    for (let i = 0; i < jsonMarkersObject.length; i++) {
        // init a new AppMarker objetc and push it into the array
        markersArray.push(new AppMarker(jsonMarkersObject[i].latitude, jsonMarkersObject[i].longitude, jsonMarkersObject[i].id));
    }
    console.log(markersArray)
    return markersArray;
}






//var filters = loadFilters();
//fillFilters(filters);
//document.getElementById("btnCleanFilters").addEventListener("click",cleanFilters)
//document.getElementById("btnInitFilters").addEventListener("click",function(ev){
//    doFilter(filters)
//})