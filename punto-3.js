//Previo

let lista = [
    `1 elementos`,
    `2 elementos`,
    `3 elementos`,
    `4 elementos`,
    `5 elementos`,
    `6 elementos`,
    `7 elementos`,
    `8 elementos`

];
console.log(lista);

// Paso 1

lista.splice(2,3);
console.log(`Elimina 3 elementos siguientes al elementos con el indice 2 \n\n → ${lista}`);

// Paso 2

lista.splice(2,0, `3-elemento-lista`,`4-elemento-lista`,`5-elemento-lista`);
console.log(`Se restautan los 3 elementos eliminados en la misma posicion \n\n → ${lista}`);