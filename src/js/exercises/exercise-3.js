/* 
EJERCICIO 3:
Muestra el siguiente mensaje con el resultado de contar el número de vocales que tiene un string:
“Number of vowels is <result>”
*/


const text = "Muestra el siguiente mensaje con el resultado de contar el número de vocales que tiene un string";

let vowels = "aeiouáéíóú";
let vowelCount = 0;

for (let i = 0; i < text.length; i++) {
  const letra = text.charAt(i);
  if (vowels.includes(letra.toLowerCase())) {
    vowelCount++;
  }
}

showContent(3, `Number of vowels is ${vowelCount}`);