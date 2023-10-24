/* 
EJERCICIO 5:
Escribe una función llamada "repetitions" que recibe de entrada una cadena de texto y 
devuelve otra cadena con cada letra repetida tantas veces como la posición que ocupa 
empezando la primera repetición en mayúscula y el resto en minúscula

Ejemplos:
repetitions(‘code’) // result: “COoDddEeee”
repetitions(‘list’) // result: “LIiSssTttt”
repetitions(function) // result: “FUuNnnTtttIiiiiOoooooNnnnnnn”

*/

function repetitions(entrada) {
  let resultado = "";
  for (let i = 0; i < entrada.length; i++) {
    resultado += entrada[i].toUpperCase() + entrada[i].toLowerCase().repeat(i);
  }
  return resultado;
}

let entrada = "Codespace";
let resultado = repetitions(entrada);

showContent(4, resultado);
