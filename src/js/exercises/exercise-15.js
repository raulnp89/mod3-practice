/* 
EJERCICIO 15:
Muestra un array con el título y la descripción de las mejores peliculas ordenadas de mejor a peor, 
siendo las mejores aquellas cuya valoración es superior a la valoración media de todas las películas
*/

const notaGlobal = movies.reduce((total, movie) => total + movie.rating, 0);
const notaMedia = notaGlobal / movies.length;

const mejoresPeliculas = movies.filter((movie) => movie.rating > notaMedia);

mejoresPeliculas.sort((a, b) => b.rating - a.rating);

const mejoresPeliculasInfo = mejoresPeliculas.map(
  (movie) => ` ${movie.title} (Valoración: ${movie.rating})`
);

showContent(15, "Las mejores películas son:" + mejoresPeliculasInfo);
