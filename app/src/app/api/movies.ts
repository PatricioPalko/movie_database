const apiEndpoint = "https://www.omdbapi.com";
const apiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY;

export const getMovieDetail = async (slug: string) => {
  const res = await fetch(`${apiEndpoint}?i=${slug}&apikey=${apiKey}`);

  if (!res.ok) throw new Error("API error");

  return res.json();
};
