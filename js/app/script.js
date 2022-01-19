function cargarPagina() {

    const oferta = {
        nombre: "Casa en chapinero",
        tipoContrato: [false, true], //[0] -> venta [1] -> arriendo
        area: 45.12,
        habitaciones: 2,
        banos: 1,
        garajes: 1,
        precio: 2000000,
        barrio: "Chapinero",
        estrato: "3"
    }

    console.log("datos capturados desde un objeto estatico, desde la base de datos se deben cargar acá")

    llenarCampos(oferta)
}


function crearOferta() {
    const nuevaOferta = {}


    nuevaOferta.nombre = document.getElementById("nombre").value

    const isArriendo = document.getElementById("arriendo").checked

    const isVenta = document.getElementById("venta").checked

    nuevaOferta.tipoContrato = [false, false]

    if (isArriendo) {
        nuevaOferta.tipoContrato[1] = true
        nuevaOferta.tipoContrato[0] = false
    } else {
        nuevaOferta.tipoContrato[0] = true
        nuevaOferta.tipoContrato[1] = false
    }

    nuevaOferta.area = Number(document.getElementById("area").value)

    nuevaOferta.habitaciones = Number(document.getElementById("habitaciones").value)
    nuevaOferta.banos = Number(document.getElementById("banos").value)
    nuevaOferta.garajes = Number(document.getElementById("garajes").value)
    nuevaOferta.precio = Number(document.getElementById("precio").value)
    nuevaOferta.barrio = document.getElementById("barrio").value

    nuevaOferta.estrato = Number(document.getElementById("estrato").value)

    return nuevaOferta
}


function llenarCampos(oferta) {


    document.formulario.nombre.defaultValue = oferta.nombre

    // fix document.formulario.tipoContrato.setAttribute("checked", "");

    document.formulario.area.defaultValue = oferta.area

    document.formulario.habitaciones.defaultValue = oferta.habitaciones

    document.formulario.banos.defaultValue = oferta.banos

    document.formulario.garajes.defaultValue = oferta.garajes

    document.formulario.precio.defaultValue = oferta.precio

    document.formulario.barrio.defaultValue = oferta.barrio

    document.formulario.estrato.defaultValue = oferta.estrato

}


function vaciarCampos() {


    document.formulario.nombre.defaultValue = ""

    // fix en arriendo en venta

    document.formulario.area.defaultValue = ""

    document.formulario.habitaciones.defaultValue = ""

    document.formulario.banos.defaultValue = ""

    document.formulario.garajes.defaultValue = ""

    document.formulario.precio.defaultValue = ""

    document.formulario.barrio.defaultValue = ""

    document.formulario.estrato.defaultValue = ""

}



//botones
document.getElementById("eliminar").addEventListener("click", () => {

    vaciarCampos()

})

document.getElementById("actualizar").addEventListener("click", () => {

    const nuevaOferta = crearOferta()
    console.log(nuevaOferta)

    //aquí ahora se debe enviar el objeto nuevaOferta al backend


})

document.getElementById("publicar").addEventListener("click", () => {
    const nuevaOferta = crearOferta()
    console.log(nuevaOferta)

    //aquí ahora se debe enviar el objeto nuevaOferta al backend



})