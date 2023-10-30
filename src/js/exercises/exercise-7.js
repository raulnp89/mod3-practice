/* 
EJERCICIO 7:
Escribir una función que calcule si una cadena de texto es un palíndromo y
devuelva un mensaje con la cadena de texto y el resultado
*/


function esPalindr(text) {
  let textModif = text.toLowerCase();
  textModif = textModif.replaceAll(" ", "");
  let textReverse = textModif.split("").reverse().join("");
  if (textModif === textReverse) {
    return `${text} es un palíndromo.`;
  } else {
    return `${text} no es un palíndromo.`;
  }
}

showContent(7, esPalindr("Anita lava la tina"));