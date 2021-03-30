import '../../assets/css/styles.css'
// import "../../assets/scss/style.scss";
import Serie from "./serie";
import Peronsaje from "./personajes";

//Peticion tipo GET al siguiente endpoint  

const llamarPersonajes = (() => {
    const urlBase = "https://rickandmortyapi.com/api";
    let cantidadPersonajes  = 0;
    const dataPersonajes = async (urlApi, urlP) => {
        let arr = [];
        try {
            const req = await fetch(urlApi + urlP);
            const data = await req.json();
            //    if(!data) return [];
            arr = data.results
            console.log(data);
            return data ? data.results : [];
        } catch (error) {
            console.log(`error en la obtencion de personajes desde la Api ${error}`);
        } finally {
            return arr
        };
    };
    const funcionPublica1 = async () => {
        const nuevaSerie = new Serie("Rick and Morty");
        const resultadosApi = await dataPersonajes(urlBase, "/character")
        cantidadPersonajes = resultadosApi.length;
        
        resultadosApi.forEach(personaje => {
            const per = new Peronsaje(personaje.id, personaje.name, personaje.species,
                personaje.image, personaje.gender, personaje.origin.name,
                personaje.location.name, personaje.status);
            nuevaSerie.agregarPersonajes(per);
        });
        nuevaSerie.getPersonajes()
        // console.log(nuevaSerie.personajes);
    };
    const funcionPublica2 = () => {
        const spinner = document.getElementById("spinner");
        const mostrarCantidad = document.getElementById("cantidadPersonajes");
        spinner.removeAttribute("class");
        mostrarCantidad.innerHTML = cantidadPersonajes;
        console.log(`Personajes a mostrar: ${cantidadPersonajes} `);
        return cantidadPersonajes
    };
    return {
        funcionPublica1,
        funcionPublica2,
    };
})();

llamarPersonajes.funcionPublica1()
setTimeout(() => {
    llamarPersonajes.funcionPublica2()
},2000)


