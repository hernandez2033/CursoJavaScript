//condiconales es el que define el flujo del programa
//ejmplo de login compararemos la contraseña definiendo si es correcta o incorrecta

let password = 2000;//contraseña almasenada en bd

let contraseña = 2005;//contraseña introdicida por el ususario

let result = password == contraseña;//lavariable resul captura el resultado true o false

if(result){//condicionamos si es correcta o true 
    console.log("Contraseña correcta");
}
if(result === false){//condiionamos si es incorrecta
    console.log("Contraseña incorrecta");
}
//otra forma de plantiar el ejemplo dado que solo son dos condiciones a cumplir
console.log("---------------------------------------------");
if(result==true){//se lee si result es tru imprimir esto
    console.log("Contraseña correcta");
}else{//se lee de lo contrario imprimir eso 
    console.log("Contraseña incorrecta");
}
// condicional multiple 
//ejmplo puntuacion de unjugador
let score = 70;

if(score > 30){//se lee si result es tru imprimir esto
    console.log("you need to parctice more");
}else if(score > 15){// se lee si no imprime esto
    console.log("it is getting better");
}else{//se lee de lo contrario imprimir eso 
    console.log("you need to follow this utorial");
}

//uso de control de flujo con switch
console.log('');
console.log('control de flujo con switch');
let typeCard="Credit Card";

switch(typeCard){
    case "Credit Card"://condiciona si la variable typeCard es igual a Credit Card imprime esto
        console.log('this is a credit card');
        break;//indica finaliza proceso

    case "Debit Card":
        console.log('this is a bebit card');
        break;

    default:
        console.log('no card');
}