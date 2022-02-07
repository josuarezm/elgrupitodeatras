class AppMarker{
    constructor(lt,lg,idHouse){
        this.pos = {lat:lt ,lng:lg }
        this.idHouse = idHouse;
        this.marker = null;
        this.property = null;
    }
    LoadProperty(){
        this.property = new Property(this.idHouse);
    }
    toJson(){
        return JSON.stringify(this);
    }
}
function initMarkers(filter){
    /* Load markers from database 
    // TODO cargar todos los marcadores
    const str = makeQuery(filter);
    const m = jsonToMarkers(str);
    JSON.parse()
    */
    var markers = jsonToMarkers('[{"id":1,"latitude":4.593636989593506,"longitude":-74.10095977783203},{"id":2,"latitude":4.6625629833684314,"longitude":-74.05248017561198}]')
    return markers
}