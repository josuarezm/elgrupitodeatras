
var filters = loadFilters();
console.log(filters.type.value);
console.log(filters.price.value);
console.log(filters.area.value);
console.log(filters.est.value);
console.log(filters.floors.value);
console.log(filters.features.value);
fillFilters(filters);
console.log(filters.toJson());
document.getElementById("btnCleanFilters").addEventListener("click",cleanFilters)
document.getElementById("btnInitFilters").addEventListener("click",function(ev){
    updateFilter(filters)
})