/* 
EJERCICIO 2:
Muestra el siguiente mensaje dependiendo de si un número es par o impar:
“Number 34 is even” ó “Number 13 is odd”
*/


let number = 34;

if (number % 2 === 0) {
  showContent(2, `Number ${number} is even`);
} else {
  showContent(2, `Number ${number} is odd`);
}
