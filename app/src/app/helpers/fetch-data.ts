const apiEndpoint = "http://www.omdbapi.com/";
const apiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY;

if (!apiKey) {
  throw new Error("Missing OMDB_API_KEY");
}

export const fetchAllMovies = async (searchTerm: string) => {
  const response = await fetch(`${apiEndpoint}/?s=${searchTerm}&apikey=${apiKey}`);
  if(!response.ok) { 
    throw new Error("Failed to fetch data");
  }
  return response;
};

export const fetchSingleMovie = async (title: string) => {
  const response = await fetch(`${apiEndpoint}/?i=${title}&apikey=${apiKey}`);
  if(!response.ok) { 
    throw new Error("Failed to fetch single movie data");
  }
  return response;
};