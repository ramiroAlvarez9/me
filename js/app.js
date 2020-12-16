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


const foto= document.querySelector('.foto-cv');
const background = document.querySelector('.hoja1');
const menuLetters = document.querySelector('.menu_a');
const about = document.querySelector('#about');
const skills = document.querySelector('#skills');
const portfolio = document.querySelector('#portfolio');
//const nav = document.querySelector('.main-menu');
let x = window.matchMedia("(min-width: 768px)")

foto.addEventListener('click', () =>{


  if(x.matches){
  foto.setAttribute('id', 'foto-gallery')
  }
  
  background.style.backgroundColor = ' rgba(0, 0, 0, 0.055)';
  about.style.color ='#00065F';   
  skills.style.color ='#00065F';   
  portfolio.style.color ='#00065F';   
 
  //nav.style.color ='black';   

})


document.addEventListener('DOMContentLoaded', (e) =>{
  crearBase();
  obtenerInformacionTexto();


})