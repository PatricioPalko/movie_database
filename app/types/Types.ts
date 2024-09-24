export interface Rating {
    Source: string;
    Value: string;
  }
  
  export interface Movie {
    Title: string;
    imdbID: string;
    Poster: string;
    Year: string;
    Plot: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Country: string;
    Awards: string;
    Ratings: Rating[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    Type: string;
    Runtime: string;
    totalSeasons?: string;
    Rated: string;
  }
  
  export interface Page {
    totalPages: number;
    nextPage: number | null;
    movies: Movie[];
  }

  export interface FilteredMovieData {
    Released: string;
    Language: string;
    Director: string;
    Writer: string;
    Actors: string;
    Country: string;
  }

  export interface MovieDetailPageProps {
    params: { slug: string };
  }
  
  export interface IMenuItem {
    label: string;
    url: string;
  }

  export interface FavoritesState {
    favoriteMoviesList: Movie[];
  }

  export interface ValueState {
    value: string;
  }

  export interface SearchInputProps {
    onSearch: (value: string) => void;
  }