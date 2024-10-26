//P1
let asignaturas = [
    `[1] Matematicas`,
    `[2] Español`,
    `[3] Sociales`,
    `[4] Filosofia`,
    `[5] Geografia`
];
console.log(`Creacion de la lista de tareas \n\n →`);
console.table(asignaturas);

//P2 agrega elementos al principio
asignaturas.unshift(`[6] Religión`,`[7] Etica`);
console.log(`Se agregan 2 tareas al principio con unshift \n\n →`);
console.table(asignaturas);


//P3 elimina el ultimo elemento
asignaturas.reverse().shift();
asignaturas.reverse();
console.table(`Eliminacion de elemento con shift \n\n →`);
console.table(asignaturas);