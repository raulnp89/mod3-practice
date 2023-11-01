/* 
EJERCICIO 17:
Un isograma es una palabra o frase en la que cada letra aparece el mismo número de veces.
Dado una cadena de texto, comprueba si es un isograma o no y devuelve un mensaje:
"la cadena 'hola mundo' no es un isograma"
*/
function esIsograma(cadenaString) {
    const cadenaStringSinEspacios = cadenaString.replace(/\s/g, "").toLowerCase();
  
    const frecuenciaLetras = {};
  
    for (let letra of cadenaStringSinEspacios) {
      if (frecuenciaLetras[letra]) {
        return `El texto '${cadenaString}' no es un isograma`;
      }
      frecuenciaLetras[letra] = 1;
    }
  
    return `El texto '${cadenaString}' es un isograma`;
  }
  
  const cadenaString = "España";
  const resultadoString = esIsograma(cadenaString);
  
  showContent(17, resultadoString);