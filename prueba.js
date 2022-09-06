//ejercicio 1
//console.log("Hola mundo");
let mensaje = "Hola mundo";
console.log(mensaje);

//ejercicio 2
let mensaje1 = "Holanda,";
let mensaje2 = "como estas,";
let mensaje3 = "bienvenido.";

console.log(mensaje1, mensaje2, mensaje3);

//ejercicio 3
let readlineSync = require("readline-sync");
let base = readlineSync.question("Indique la base: ")
let altura = readlineSync.question("Indique la altura:")
let resultado = base * altura;
console.log("El resultado es: ");
console.log(resultado);