import MovieAwards from "@/app/components/movies/detail/awards";
import MovieDetailsInfoWrapper from "@/app/components/movies/detail/details-info/detail-info-wrapper";
import MovieGenres from "@/app/components/movies/detail/genres";
import MovieMeta from "@/app/components/movies/detail/meta";
import MovieLike from "@/app/components/movies/detail/movie-like";
import MoviePlot from "@/app/components/movies/detail/plot";
import MovieDetailPoster from "@/app/components/movies/detail/poster";
import MovieRatingWrapper from "@/app/components/movies/detail/rating/rating-wrapper";
import { getMovieDetail } from "@/app/helpers/fetch-data";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { notFound } from "next/navigation";
export default async function MovieDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const movie = await getMovieDetail(slug);

  if (!movie || movie.Response === "False") {
    notFound();
  }

  const details = {
    Released: movie.Released,
    Language: movie.Language,
    Director: movie.Director,
    Writer: movie.Writer,
    Actors: movie.Actors,
    Country: movie.Country,
  };

  return (
    <Box sx={{ minHeight: "100vh", position: "relative" }}>
      <Image
        src="/assets/detailBg.jpeg"
        alt="background"
        fill
        priority
        style={{ objectFit: "cover", opacity: 0.1 }}
      />

      <Container
        maxWidth="lg"
        sx={{ position: "relative", zIndex: 2, pt: 6, pb: 10 }}
      >
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ height: 700 }}>
              <MovieDetailPoster poster={movie.Poster} title={movie.Title} />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <MovieLike movie={movie} />

              <Typography
                variant="h3"
                sx={{ fontWeight: 700, color: "text.secondary" }}
              >
                {movie.Title}
              </Typography>

              <MovieGenres genre={movie.Genre} rated={movie.Rated} />
              <MovieMeta movie={movie} />

              <MovieRatingWrapper
                imdbRating={movie.imdbRating}
                imdbVotes={movie.imdbVotes}
                Ratings={movie.Ratings}
              />

              <MoviePlot plot={movie.Plot} />
              <MovieAwards awards={movie.Awards} />
              <MovieDetailsInfoWrapper details={details} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
