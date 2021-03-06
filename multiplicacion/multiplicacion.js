const fs = require('fs');//importamos el paquete de manipulacion de archivos 

let crearArchivo = (base,limite) => {
    return new Promise((resolve, reject)=>{
        let tabla = '';

        if(!Number(base)){
            reject(`${base} no es un numero valido. Favor de ingresar uno correctamente`);
            return;
        }

        if(!Number(limite)){
            reject(`${base} no es un numero valido para el limite. Favor de ingresar uno correctamente`);
            return;
        }

        for(let i = 1; i <= limite; i++){
            tabla+= `${base} X ${i} = ${base * i}\n`; 
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, tabla, (err) => {
            if(err){ 
                reject(err);
            }
            else
            {
            resolve(`tabla-${base}.txt`);
            }
        });
    });
};

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject)=>{

        if(!Number(base)){
            reject(`${base} no es un numero valido. Favor de ingresar uno correctamente`);
            return;
        }

        if(!Number(limite)){
            reject(`${base} no es un numero valido para el limite. Favor de ingresar uno correctamente`);
            return;
        }

        for(let i = 1; i <= limite; i++){
            console.log(`${base} X ${i} = ${base * i}`); 
        }
    });
};

module.exports = {
    crearArchivo,
    listarTabla
}