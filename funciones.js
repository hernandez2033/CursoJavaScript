//uso de funciones son porciones de codigo que se pueden reutilizar

function suma(n1, n2){//usamos la palabra reservada function y damos un nombre y pasamos por parametro dos numeros
    console.log("el valor de la suma es " + (n1+n2));
}

suma(20, 50); //es reutilizable el codigo
suma(5, 5);
suma(20, 20);

console.log("");
//otra funcion 
function nombres(name) {
    console.log("Hello "+name);
}

nombres("Milton");
nombres("Noysi");
nombres("Vero");

//estudiar el dom del navegador o nodejs o apis html5