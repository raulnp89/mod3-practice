/* 
EJERCICIO 9:
Genera un array de 10 números aleatorios entre 0 y 100, calcula el menor y
el mayor y muestra el resultado por pantalla
*/

function generarNumAleatorios(min, max) {
  return Math.round(Math.random() * 100);
}
let myArray = [];
for (i = 0; i < 10; i++) {
  myArray.push(generarNumAleatorios(0, 100));
}

let numeroMini = Math.min(...myArr);
let numeroMaxi = Math.max(...myArr);

let totall =
  "El mínimo es " +
  numeroMini +
  "." +
  "<br> El máximo es " +
  numeroMaxi +
  "." +
  "<br>La lista de números aleatorios es: " +
  myArray;

showContent(9, totall);