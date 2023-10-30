/* 
EJERCICIO 13:
Agrupa en un array las peliculas por categorias:
[
    {
        Drama: {
            {
                title: "Fight Club",
                director: "David Fincher",
                actors: "Brad Pitt, Edward Norton, Helena Bonham Carter",
                year: 1999,
                description:
                "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
                category: "Drama",
                rating: 8.8,
            },
            Action: {
                ...
            },
            ...
        }
    }
]
*/
function tipoPelicula() {
    let categoriesArray = [
      { category: "Drama", movies: [] },
      { category: "Action", movies: [] },
      { category: "Crime", movies: [] },
      { category: "Biography", movies: [] },
      { category: "Adventure", movies: [] },
      { category: "Comedy", movies: [] },
    ];
  
    for (let i = 0; i < categoriesArray.length; i++) {
      let filtro = movies.filter(
        (film) => film.category === categoriesArray[i].category
      );
  
      categoriesArray[i].movies = filtro;
    }
    return categoriesArray;
  }
  
  showContent(13, tipoPelicula());
  