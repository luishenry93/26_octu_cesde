//P5

let listaContactos = [
    { name: "Sofía Ramírez", phone: "3101234567" },
    { name: "Javier Morales", phone: "3122345678" },
    { name: "Lucía Martínez", phone: "3103456789" },
    { name: "Diego Rodríguez", phone: "3144567890" },
    { name: "Valentina Torres", phone: "3105678901" },
    { name: "Fernando Gómez", phone: "3106789012" },
    { name: "Camila Ruiz", phone: "3127890123" },
    { name: "Andrés Salazar", phone: "3108901234" },
    { name: "Natalia Jiménez", phone: "3149012345" },
    { name: "Pedro López", phone: "3100123456" }
];


console.log(`Lista 1 \n\n`);
console.table(listaContactos);

// Pruebas array con array

let listaContactos2 = [
    { name: "Mariana Castro", phone: "3102345678" },
    { name: "Felipe Vargas", phone: "3123456789" },
    { name: "Tatiana Herrera", phone: "3104567890" },
    { name: "Gonzalo Cifuentes", phone: "3145678901" }
];

console.log(`Lista 2 \n\n`);
console.table(listaContactos2);


/*
    Añadir el tercer elemento de listaContactos2 como primer elemento en listaContactos
*/


listaContactos.unshift(listaContactos2[2]);
console.log(`Add item al principio \n\n`);
console.table(listaContactos);


/*
    Añadir el primer elemernto de listaContactos2 como ultimo elemento en listaContactos
*/

listaContactos.push(listaContactos2[0]);
console.log(`Add item al final \n\n`);
console.table(listaContactos);

/*
    Añadir el segundo, cuarto y quinto elemento de listaContactos despues del cuarto elemento de listaContactos
*/

listaContactos.splice(4,0,listaContactos2[4],listaContactos2[3],listaContactos2[1]);
console.log(`Add 3 items despues del 4to item \n\n`);
console.table(listaContactos);

/*
    Eliminar ultimo elemento de listaContactos
*/

listaContactos.pop();
console.log(`Item final eliminado \n\n`);
console.table(listaContactos);

/*
    Eliminar primer elemento de listaContactos
*/

listaContactos.shift();
console.log(`Primer Item eliminado \n\n`);
console.table(listaContactos);

/*
    Elimar los elemento 
*/

listaContactos.splice(3,3);
console.log(`Elimnar 3 items despues del 3cer item \n\n`);
console.table(listaContactos);

/*
    Nueva lista de los contactos 2,3,4 y 5 de listaContactos
*/

console.log(`Nueva lista \n\n`);
let listaNueva = listaContactos.slice(2,6);
console.table(listaNueva);