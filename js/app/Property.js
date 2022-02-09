class Property{
    constructor(id){
        this.id = id
    };
    toJson(){
        return JSON.stringify(this);
    }
    loadJson(){
        // TODO maadar id al back con GET
        return '{"id":1,"user_id":1,"value":500000,"type":"apartamento","area":40,"latitude":4.593636989593506,"longitude":-74.10095977783203,"city":"Bogot\u00e1","loc":"","neighborhood":"La frag\u00fcita","address":"carrera 25 # 7 - 18","estr":3,"area_h":40,"area_c":40,"rooms":3,"toilets":1,"floors":1,"parking":0,"created_at":"2022-02-04T04:30:27.000000Z","updated_at":"2022-02-06T13:27:01.000000Z","deleted_at":null,"user":{"id":1,"name":"Admin","email":"admin@casapp.test","email_verified_at":null,"created_at":"2021-12-15T01:24:26.000000Z","updated_at":"2021-12-15T01:24:26.000000Z","profile_photo_url":"https:\/\/ui-avatars.com\/api\/?name=Admin&color=7F9CF5&background=EBF4FF"},"feature":{"id":1,"estate_id":1,"furnished":0,"basement":1,"terrace":0,"security":0,"created_at":"2022-02-07T12:18:25.000000Z","update_at":"2022-02-07 12:18:25","deleted_at":null}}';
    }

    loadInfo(jsonStr) {
        const obj = JSON.parse(jsonStr)[0];
        //console.log(obj)
        // TODO actualizar los atributos con la info del Json
        /* Load the info of the house 
        {"id":1,"user_id":1,"value":500000,"type":"apartamento","area":40,"latitude":4.593636989593506,"longitude":-74.10095977783203,"city":"Bogot\u00e1","loc":"","neighborhood":"La frag\u00fcita","address":"carrera 25 # 7 - 18","estr":3,"area_h":40,"area_c":40,"rooms":3,"toilets":1,"floors":1,"parking":0,"created_at":"2022-02-04T04:30:27.000000Z","updated_at":"2022-02-06T13:27:01.000000Z","deleted_at":null,"user":{"id":1,"name":"Admin","email":"admin@casapp.test","email_verified_at":null,"created_at":"2021-12-15T01:24:26.000000Z","updated_at":"2021-12-15T01:24:26.000000Z","profile_photo_url":"https:\/\/ui-avatars.com\/api\/?name=Admin&color=7F9CF5&background=EBF4FF"},"feature":{"id":1,"estate_id":1,"furnished":0,"basement":1,"terrace":0,"security":0,"created_at":"2022-02-07T12:18:25.000000Z","update_at":"2022-02-07 12:18:25","deleted_at":null}}
        */
        this.city = obj.city;
        this.loc = obj.loc;
        this.neighborhood = obj.neighborhood;
        this.dir = obj.address;
        this.estr = obj.estr;
        this.ubication = this.dir+" , "+this.city
        /* Características */
        this.type = obj.type;
        this.area = obj.area;
        this.rooms = obj.rooms;
        this.bathrooms = obj.toilets;
        this.floors = obj.floors;
        if(obj.parking >0){
            this.parking = "Si"
        }
        else{
            this.parking = "No"
        }
        // features
        
        this.features = [];
        if(obj.feature =! null){
            if(obj.feature.basement >0){
                this.features.push("Sótano")
            }
            if(obj.feature.furnished >0){
                this.features.push("Amoblado")
            }
            if(obj.feature.security >0){
                this.features.push("Seguridad")
            }
            if(obj.feature.terrace >0){
                this.features.push("Terraza")
            }
        }
        /* Precio y contacto */
        this.price = obj.value;
        this.sellerUser = obj.user.name;
        this.sellerCel = "3209876543";
        this.sellerMail = obj.user.email;
        /* imagenes */
        this.img1 = "imagenes/imagenCasa02.jpg"
        this.img2 = "imagenes/imagenCasa03.jpg"
        this.img3 = "imagenes/imagenCasa04.jpg" 
        //console.log(this)      
    }
}