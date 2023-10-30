/* 
EJERCICIO 8:
Escribe una o varias funciones para que, dado un string, devuelva un array que contenga la posición 
que ocupa cada carácter en el abecedario. Para que sea más sencillo, elimina los espacios y tildes 
(recuerda que puedes utilizar las funciones de ejercicios anteriores).
*/

function posicionChar(myString) {
  let modifString = myString.toLowerCase();
  modifString = modifString.replaceAll(" ", "");
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const position = [];

  for (let i = 0; i < modifString.length; i++) {
    let caracter = modifString[i];
    let charPosition = alphabet.indexOf(caracter) + 1;
    position.push(charPosition);
  }
  return position;
}

showContent(8, posicionChar("Anita lava la tina"));