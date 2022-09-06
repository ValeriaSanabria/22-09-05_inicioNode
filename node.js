//Lo que hace es atraves del readline hacer una pregunta al usuario y luego imprime su respuesta desde la consola

let readlineSync = require("readline-sync");
let alturaPersona = readlineSync.question("Indique la altura de la persona:");
console.log("Su altura es:");
console.log(alturaPersona);