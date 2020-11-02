import {db, crearBase} from './modules/indexdb.js';
import {nombre,asunto,mensaje} from './modules/arrays.js';
db;

const transaction = () => {

    const contactoNuevo = {


        nombre: nombre,
        asunto: asunto,
        mensaje: mensaje
    
    
        }

       let transaction = db.transaction(["contacto"], "readwrite");

       const objectStore = transaction.objectStore('contacto');
       const agregar = objectStore.add(contactoNuevo);
       location.reload();


}


function obtenerInformacionTexto(){
    
    
    const informacion = document.querySelector('.contact');
  
    informacion.addEventListener('submit', (e) => {
  
          e.preventDefault();
        
          //selectores de ubicacion
          
          const nombreValue = document.querySelector('#nombre').value;
          const asuntoValue = document.querySelector('#asunto').value;
          const mensajeValue = document.querySelector('#coment').value;
          
           
        
          //agregar value a los arrays
                    
           nombre.push(nombreValue);
           asunto.push(asuntoValue);
           mensaje.push(mensajeValue);

           
           transaction();

          

           
    

      });
  
  }

document.addEventListener('DOMContentLoaded', (e) =>{
  crearBase();
    
  obtenerInformacionTexto();
})