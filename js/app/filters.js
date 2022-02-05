
function removeAllChilds(a) {
    var a = document.getElementById(a);
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
}
function loadFeatures(){
    return ["Terraza", "zotano", "parqueadero", "Seguridad", "amueblado", "otra característica"];
}
function loadFilters(){
    let typeFilter = new SingleFilter("Casa", "type", ["Casa", "Apratamento", "Bodega", "Oficina"]);
    let priceFilter = new SingleFilter({max:1000000000, min:0},"price");
    let areaFilter = new SingleFilter({max:70, min:25},"area");
    let estFilter = new SingleFilter("3", "est", ["1","2","3","4","5","6"]);
    let floors = new SingleFilter(3, "floors");
    let features = new SingleFilter("Terraza", "features", loadFeatures());
    let filterapp = new Filter(typeFilter, priceFilter, areaFilter, estFilter, floors, features);
    return filterapp;
}

function fillFilters(filter = loadFilters()){
    // tipo de inmueble
    console.log("btnradioType"+filter.type.value)
    document.getElementById("btnradioType"+filter.type.value).checked = true;
    // price
    document.getElementById("FiltersminValueInput").value = filter.price.value.min;
    document.getElementById("FiltersmaxValueInput").value = filter.price.value.max;
    //area
    document.getElementById("FiltersminAreaText").value = filter.area.value.min;
    document.getElementById("FiltersmaxAreaText").value = filter.area.value.max;
    //est
    document.getElementById("btnradioEst"+filter.est.value).checked = true;
    //floors
    document.getElementById("FiltersNumberFloors").value = filter.floors.value;
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
}