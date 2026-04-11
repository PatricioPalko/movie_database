"use client";
import MovieAwards from "@/app/components/movies/detail/awards";
import MovieDetailsInfoWrapper from "@/app/components/movies/detail/details-info/detail-info-wrapper";
import MovieGenres from "@/app/components/movies/detail/genres";
import MovieMeta from "@/app/components/movies/detail/meta";
import MovieLike from "@/app/components/movies/detail/movie-like";
import MoviePlot from "@/app/components/movies/detail/plot";
import MovieDetailPoster from "@/app/components/movies/detail/poster";
import MovieRatingWrapper from "@/app/components/movies/detail/rating/rating-wrapper";
import { getMovieDetail } from "@/app/helpers/fetch-data";
import pageStyles from "@/app/page.module.scss";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { use } from "react";
import "../../globals.scss";
import styles from "./page.module.scss";

export default function MovieDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const {
    data: movie,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movie", slug],
    queryFn: () => getMovieDetail(slug),
    enabled: !!slug,
    select: (data) => ({
      ...data,
      details: {
        Released: data.Released,
        Language: data.Language,
        Director: data.Director,
        Writer: data.Writer,
        Actors: data.Actors,
        Country: data.Country,
      },
    }),
  });

  if (isLoading) {
    return <Box className={styles.noResults}>Loading the detail of movie</Box>;
  }

  if (error) {
    return <Box className={styles.noResults}>Error</Box>;
  }

  if (!movie) {
    return null;
  }

  return (
    <div className={pageStyles.page}>
      <main className={pageStyles.main}>
        <Image
          src="/assets/detailBg.jpeg"
          alt="background"
          fill
          priority
          style={{ objectFit: "cover" }}
          className={pageStyles.bg}
        />
        <Container maxWidth={"lg"} className={styles.movieDetail}>
          <Box className={styles.tpl}>
            <Grid container spacing={8} className={styles.wrapper}>
              <Grid className={styles.wrapperItem}>
                <MovieDetailPoster poster={movie.Poster} title={movie.Title} />
              </Grid>
              <Grid className={styles.infoWrapper}>
                <MovieLike movie={movie} />
                <Typography
                  variant="h3"
                  component={"h3"}
                  className={styles.title}
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
                <MovieDetailsInfoWrapper details={movie.details} />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </main>
    </div>
  );
}
