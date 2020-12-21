//uso de interador o blucre o estructura de repeticion

//haciendo uso del bucle while
var contador = 5;
while (contador > 0) {//condicion mientras contadore sea mayor que 0
    console.log(contador);//imprime
    contador = contador-1;//decrementa en 1 por cada siclo que se cumpla
}
//otra forma de interpretarlo
console.log("Otra forma de representar el ejemplo");
let contador1 = 0;
while (contador1 < 5) {//mientras que la variable contador1 sea menor a 5
    console.log(contador1);//imprime
    contador1++;//incrementa el valor en uno
    //contador1 = contador1 + 1
    //operadores de incremento ++ o --
}
//como leer un areglo o arrays
let lista = ["Milton", "Carlos", "Toño"];

console.log(lista[0]);//lee la posicion inicla 
console.log("longitud del arrays: "+lista.length);//lee la longiud del arrays

//bucle For

for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]); 
}

//otra forma de representarlo que lea de manera decendente
console.log('');
for (let i = lista.length; i >= 0; i--) {
    console.log(lista[i]);
}