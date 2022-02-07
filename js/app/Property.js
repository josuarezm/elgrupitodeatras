class Property{
    constructor(id){
        this.id = id
    };
    toJson(){
        return JSON.stringify(this);
    }
    async loadJson(){
        // TODO
        return "";
    }

    async loadInfo() {
        jsonStr = this.loadJson()

        // TODO actualizar los atributos con la info del Json
        /* Load the info of the house */
        if(this.id == 0){
            /* Ubicación */
            this.city = "Bogotá";
            this.loc = "Kenedy";
            this.neighborhood = "Techo";
            this.dir = "C 28, Ac. 3 #71";
            this.estr = "4";
            this.ubication = "C 28, Ac. 3 #71, Bogotá"
            /* Características */
            this.type = "Apartamento"
            this.area = "98 m²";
            this.rooms = "4";
            this.bathrooms = "2";
            this.floors = "2";
            this.parking = "Si";
            this.features = ["piscina","amueblado","jardín"];
            /* Precio y contacto */
            this.price = "124000000";
            this.sellerUser = "María Restrepo";
            this.sellerCel = "3209876543";
            this.sellerMail = "mar123restrepo@gmail.com"
            /* imagenes */
            this.img1 = "imagenes/imagenCasa02.jpg"
            this.img2 = "imagenes/imagenCasa03.jpg"
            this.img3 = "imagenes/imagenCasa04.jpg"

        }
        else if(this.id == 1){
            /* Ubicación */
            this.city = "Bogotá";
            this.loc = "Chapinero";
            this.neighborhood = "El nogal";
            this.dir = "Cra. 9 #79a-14";
            this.estr = "4";
            this.ubication = "Cra. 9 #79a-14, Bogotá"
            /* Características */
            this.type = "Casa"
            this.area = "50 m²";
            this.rooms = "2";
            this.bathrooms = "1";
            this.floors = "1";
            this.parking = "No";
            this.features = ["amueblado"];
            /* Precio y contacto */
            this.price = "250000000";
            this.sellerUser = "Carlos Augusto";
            this.sellerCel = "3789045263";
            this.sellerMail = "car378aug@gmail.com"
            /* imagenes */
            this.img1 = "imagenes/imagenCasa01.jpg"
            this.img2 = "imagenes/imagenCasa05.jpg"
            this.img3 = "imagenes/imagenCasa06.jpg"

        }
    }

    
}