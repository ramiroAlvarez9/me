export let db;


export function crearBase() {

    const creacionBase = window.indexedDB.open('contacto', 1);

    creacionBase.onsuccess= function () {

        console.log('OK');

        db = creacionBase.result;

    }


    creacionBase.onupgradeneeded = function(e) {

        const db = e.target.result;

        const objectStore = db.createObjectStore('contacto', {
            keyPath: 'contacto',
            autoIncrement: true




        });

        //informacion a agregar
        objectStore.createIndex('nombre', 'nombre',{unique: false});
        objectStore.createIndex('asunto', 'asunto',{unique: false});
        objectStore.createIndex('mensaje', 'mensaje',{unique: false});


    }

}