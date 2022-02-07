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
function initMarkers(){
    /* Load markers from database */
    var markers = []
    markers.push(new AppMarker(4.625726863055612, -74.13602537067082, 0))
    markers.push(new AppMarker(4.6625629833684314, -74.05248017561198, 1))
    return markers
}