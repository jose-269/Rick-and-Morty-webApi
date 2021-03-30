

class Peronsaje  {
    constructor(id, nombrePersonaje, especie, imagen,  genero, origen, locacion, estado) {
        const _id = id;
        const _nombre = nombrePersonaje;
        const espec = especie;
        const img = imagen;
        this.genero = genero;
        this.origen = origen;
        this.locacion = locacion;
        this.estado = estado;
        this.getiD = () => _id;
        this.getNombre = () => _nombre;
        this.getEspecie =() => espec;
        this.getImagen = () => img;
        
    };
    get obtenerId(){
        return this.getiD();
    };
    get obtenerNombre(){
        return this.getNombre();
    };
    get obtenerEspecie() {
        return this.getEspecie();
    };
    get obtenerImagen() {
        return this.getImagen();
    };
    get obtenerGenero() {
        return this.genero;
    };
    get obtenerOrigen() {
        return this.origen;
    };
    get obtenerLocacion() {
        return this.locacion;
    };
    get obtenerEstado() {
        return this.estado;
    }
};

export default Peronsaje;