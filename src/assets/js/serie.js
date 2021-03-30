class Serie {
    constructor(nombre, personajes = []) {
        this.nombre = nombre;
        this.personajes = personajes;
    };
    getPersonajes() {
        const app = document.getElementById("resultados");
      this.personajes.forEach((el) => {
          
          app.innerHTML += 
          `
          <div class="card mx-auto mb-5 m" style="width: 14rem;">
              <img src="${el.obtenerImagen}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${el.obtenerNombre}</h5>
                <p class="card-text">${el.obtenerEspecie}</p>
                <a href="" class="btn btn-primary" data-toggle="modal" 
                data-target="#modalVentana-${el.obtenerId}">Ver personaje</a>
              </div>
          </div>
          
            <div class="modal fade" id="modalVentana-${el.obtenerId}" tabindex="-1" role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="modalTitle">${el.obtenerNombre}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <p class="parrafos-modales text-start">Genero: ${el.obtenerGenero}</p>
                    <p class="parrafos-modales">Origen: ${el.obtenerOrigen}</p>
                    <p class="parrafos-modales">Locación: ${el.obtenerLocacion}</p>
                    <p class="parrafos-modales">Estado: ${el.obtenerEstado}</p>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-dark" data-dismiss="modal">Cerrar</button>
                  </div>
                </div>
              </div>
            </div>
                    
          `
        })
        return this.personajes;
    };
    //this.personajes es un arreglo
    agregarPersonajes(personaje) {
        this.personajes.push(personaje);
    };
}

export default Serie;

