let readlineSync = require("readline-sync");
let vueltas = [];

//le damos un valor al array y la cantidad de veces q nos pregunte
for (let i = 0; i < 3; i++) {
    vueltas[i] = readlineSync.questionInt("Ingrese el tiempo de la vuelta: ");
};

//reduce para hacer la suma del array
let sumaVueltas = vueltas.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
);

console.log("El tiempo total de las vueltas es: " + sumaVueltas);

console.log("Promedio de vuelta es: " + sumaVueltas / 3);