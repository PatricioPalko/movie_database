const apiEndpoint = "https://www.omdbapi.com";
const apiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY;

if (!apiKey) {
  throw new Error("Missing OMDB_API_KEY");
}

export const getAllMovies = async (searchTerm: string, page: number) => {
  const response = await fetch(
    `${apiEndpoint}/?s=${searchTerm}&apikey=${apiKey}&page=${page}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response;
};

export const getMovieDetail = async (slug: string) => {
  const res = await fetch(`${apiEndpoint}?i=${slug}&apikey=${apiKey}`);

  if (!res.ok) throw new Error("API error");

  return res.json();
};
