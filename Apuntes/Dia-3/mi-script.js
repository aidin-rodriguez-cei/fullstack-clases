console.clear(); // Limpia la consola antes de empezar. 
console.log("Mi primera app de Node!!");

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : "Hola soy una aplicación de Node",
    e : "o<",
    T : "U "
}));

console.log("HOLAAAA")

function sumar(num1, num2){
    return num1+num2
}

const resultado = sumar(5, 23);
console.log("5 + 23 es: ",resultado)