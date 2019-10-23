// Variables 
const string = "Hola Mundo"; // const --> no va a cambiar de valor [const[][][]]

let entero = 63; // let --> solo se puede usar en el scope creado [let]

var flotante = 7485.38; // var --> Se puede usar de manera global var[][var[var][]]

const booleano = false; // False[0] o True[1]

console.log(string);
console.log(entero);
console.log(flotante);
console.log(booleano);

console.log("tipo de la variable: " + typeof(string));

//Operadores 
console.log("Operador: '='", 2==2); // == : true-ish / === Estrictamente igual

console.log("Operador: '!='", 2!=2); // != Verifica que el valor sea diferente  / === Estrictamente diferente

console.log("Operador: '>'", 5>1);

console.log("Operador: '>='", 5>=4);

console.log("Operador: '<'", 5>1);

console.log("Operador: '<='", 3>=7);

//Estructuras de Control
var edad = 18
if (edad >= 18) {
    console.log('Eres mayor de Edad')
}else{
    console.log ('No eres mayor de Edad')
}

let fruta = 'piña'
if (fruta == 'fresa'){
    console.log ('Tu Fruta es una fresa')
}else if (fruta == 'pera'){
console.log ('Tu Fruta es una pera')
}else if(fruta == 'mango'){
console.log ('Tu Fruta es una mango')
}else {
    console.log('Tu Fruta es', fruta)
}

let color = 'rosa'
if (color == 'naranja'){
    console.log ('Tu color es naranja')
}else if (color == 'verde'){
console.log ('Tu color es verde')
}else if(color == 'rojo'){
console.log ('Tu Color es rojo')
}else {
    console.log(`Tu Color es ${color}`) // Template Literal o Template String
}


let signo = prompt('Ingresa tu signo');

switch(signo) { 
    case "aries":
    console.log("Te llegará dinero")
    break;

    case "tauro":
    console.log("Conseguiras trabajo manana");
    break;

    case "sagitario":
    console.log("Los astros no influyen en tu día a día");
    break;

    case "cáncer":
    console.log("Cuida tu salud");
    break;

    case "cancer":
    console.log("Ten cuidado");
    break;

console.log("ingresa un signo valido")
    }