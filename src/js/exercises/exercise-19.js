/* 
EJERCICIO 19:
Dada una cadena de texto, crea una función que devuelva un objeto donde
las claves (keys) son cada una de las letras de la cadena y el valor el
número de veces que se repite cada una de ellas.
Ejemplo: "Hello world"
{
    h: 1,
    e: 1,
    l: 3,
    o: 2,
    r: 1,
    d: 1,
}
Nota: siempre letras minúsculas y sin tildes (para simplificar)
*/
function contarLetras(texto) {
    texto = texto.toLowerCase();
  
    const recuento = {};
  
    for (let letra of texto) {
      if (/[a-z]/.test(letra)) {
        recuento[letra] = (recuento[letra] || 0) + 1;
      }
    }
  
    return recuento;
  }
  
  const texto = "Hola, que tal";
  const resultadoo = contarLetras(texto);
  showContent(19, resultadoo);