/* 
EJERCICIO 11:
Ordena las peliculas por valoracion (propiedad "rating") de mayor a menor
*/

function sortRatings(a, b) {
    return b.rating - a.rating;
  }
  movies.sort(sortRatings);
  
  showContent(11, movies);
  