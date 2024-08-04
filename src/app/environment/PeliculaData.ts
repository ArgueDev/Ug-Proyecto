// pelicula.model.ts

export interface PeliculaData {
  movieId: number;  
  title: string;
  overview: string;
  releaseDate?: string;
  posterPath?: string;
  backdropPath?: string;
  rating?: number;
  voteCount?: number;
  duration?: number;
  movieGenres?: { genreId: number }[]; // Asegúrate de que este campo coincida si es necesario
}

  