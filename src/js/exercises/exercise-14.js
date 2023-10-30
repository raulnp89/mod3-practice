/* 
EJERCICIO 14:
Muestra un array que solo incluya la pelicula mejor valorada de cada uno de estos actores:
- Leonardo Dicaprio
- Robert De Niro
- Tom Hanks
*/
function filtroPorActor(movies, actor) {
    return movies.filter((movie) => movie.actors.includes(actor));
  }
  
  function mejorValorada(movies) {
    const result = movies.sort((movie1, movie2) => {
      if (movie1.rating < movie2.rating) return -1;
      if (movie1.rating > movie2.rating) return 1;
      return 0;
    });
    return result.pop();
  }
  const result = [];
  ['Leonardo DiCaprio', 'Robert De Niro', 'Tom Hanks'].forEach(actor => {
    const actorPelicula = filtroPorActor(movies, actor);
    const mejorActor = mejorValorada(actorPelicula)
    result.push(mejorActor)
  })
  
  
  showContent(14, result);
  