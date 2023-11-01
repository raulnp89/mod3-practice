/* 
EJERCICIO 16:
Dado un año como parámetro (número), devuelve el número del siglo al que pertenece.
*/
function sigloDelAño(año) {
  const siglo = Math.ceil(año / 100);

  return siglo;
}

const año = 2023;
const siglo = sigloDelAño(año);

showContent(16, `El año ${año} pertenece al siglo ${siglo}`);