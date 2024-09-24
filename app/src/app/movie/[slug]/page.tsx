"use client";
import { fetchSingleMovie } from "@/app/helpers/fetch-data";
import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import Image from "next/Image";
import { useState } from "react";
import { FaAward } from "react-icons/fa";
import {
  MdOutlineImageNotSupported,
  MdOutlineStar,
  MdOutlineStarOutline,
} from "react-icons/md";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import detailBg from "../../../../public/assets/detailBg.jpeg";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../components/LikeSlice";
import "../../globals.scss";
import { RootState } from "../../lib/store";
import pageStyles from "../../page.module.scss";
import styles from "./page.module.scss";

export interface Rating {
  Source: string;
  Value: string;
}

interface BlogPageProps {
  params: { slug: string };
}
interface Movie {
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

export interface FilteredMovieData {
  Released: string;
  Language: string;
  Director: string;
  Writer: string;
  Actors: string;
  Country: string;
}

const extractRating = (input: string): string | null => {
  const match = input.match(/^(\d+(\.\d+)?)/);
  return match ? match[0] : null;
};

const fetchSingleMovieDetail = async (movieState: string) => {
  const response = await fetchSingleMovie(movieState);
  const data = await response.json();
  return data;
};

export default function MovieDetailPage({ params }: BlogPageProps) {
  const { slug } = params;
  const dispatch = useDispatch();
  const [filteredSingleMovieData, setFilteredSingleMovieData] =
    useState<FilteredMovieData | null>(null);

  const favoriteMovies = useSelector(
    (state: RootState) => state.like.favoriteMoviesList
  );
  const isFavorite = favoriteMovies.some(
    (favMovie: Movie) => favMovie.imdbID === slug
  );

  const {
    data: movie,
    isLoading,
    error,
  } = useQuery(["movie", slug], () => fetchSingleMovieDetail(slug), {
    enabled: !!slug,
    onSuccess: (data) => {
      setFilteredSingleMovieData({
        Released: data.Released,
        Language: data.Language,
        Director: data.Director,
        Writer: data.Writer,
        Actors: data.Actors,
        Country: data.Country,
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const genres = movie?.Genre?.split(", ");

  const handleLikeClick = () => {
    if (movie) {
      if (isFavorite) {
        dispatch(removeFromFavorites(movie.imdbID));
      } else {
        dispatch(addToFavorites(movie));
      }
    }
  };

  return (
    <div className={pageStyles.page}>
      <main className={pageStyles.main}>
        <div
          style={{ backgroundImage: `url(${detailBg.src})` }}
          className={pageStyles.bg}
        ></div>
        <Container maxWidth={"lg"} className={styles.movieDetail}>
          <Box className={styles.tpl}>
            {isLoading ? (
              <Box className={styles.noResults}>
                Loading the detail of movie
              </Box>
            ) : error ? (
              <Box className={styles.noResults}>Error</Box>
            ) : movie ? (
              <Grid2 container spacing={8} className={styles.wrapper}>
                <Grid2 className={styles.wrapperItem}>
                  {movie.Poster !== "N/A" ? (
                    <Image
                      src={movie.Poster}
                      alt={movie.Title}
                      width={600}
                      height={450}
                      className={styles.image}
                      priority
                    />
                  ) : (
                    <Box className={styles.noImage}>
                      <MdOutlineImageNotSupported />
                    </Box>
                  )}
                </Grid2>
                <Grid2 className={styles.infoWrapper}>
                  <Typography
                    variant="h3"
                    component={"h3"}
                    className={styles.title}
                  >
                    <Button
                      onClick={handleLikeClick}
                      className={styles.likeBtn}
                    >
                      {isFavorite === false ? (
                        <MdOutlineStarOutline
                          onClick={handleLikeClick}
                          className={styles.icon}
                        />
                      ) : (
                        <MdOutlineStar
                          onClick={handleLikeClick}
                          className={`${styles.icon} ${styles.liked}`}
                        />
                      )}
                    </Button>
                    <Typography component={"span"} className={styles.likeText}>
                      {isFavorite === false ? "Like it now" : "I love this!"}
                    </Typography>
                    {movie.Title}
                  </Typography>
                  <Box className={styles.genres}>
                    {genres?.map((genre: any, id: number) => (
                      <Typography
                        component={"span"}
                        className={styles.genre}
                        key={id}
                      >
                        {genre}
                      </Typography>
                    ))}
                    <Typography component={"span"} className={styles.rated}>
                      {movie.Rated}
                    </Typography>
                  </Box>
                  <Box className={styles.typeWrapper}>
                    <Typography component={"span"} className={styles.type}>
                      {movie.Year}
                    </Typography>
                    <Typography component={"span"} className={styles.type}>
                      {movie.Type}
                    </Typography>
                    {movie.Type === "series" ? (
                      <Typography component={"span"} className={styles.type}>
                        {movie.Type === "series"
                          ? `${movie.totalSeasons} seasons`
                          : null}
                      </Typography>
                    ) : null}
                    <Typography component={"span"} className={styles.type}>
                      {movie.Runtime}
                    </Typography>
                  </Box>
                  <Box className={styles.ratingWrapper}>
                    <Box className={styles.gaugeWrapper}>
                      <Gauge
                        value={Number(movie.imdbRating) * 10}
                        startAngle={0}
                        endAngle={360}
                        innerRadius="85%"
                        outerRadius="100%"
                        width={100}
                        height={100}
                        sx={() => ({
                          [`& .${gaugeClasses.valueText}`]: {
                            fontSize: 24,
                          },
                          [`& .${gaugeClasses.valueArc}`]: {
                            fill: "#ffd369",
                          },
                          [`& .${gaugeClasses.referenceArc}`]: {
                            fill: "#393e46",
                          },
                        })}
                        className={styles.gauge}
                      />
                      <Typography component={"span"} className={styles.votes}>
                        {`${movie.imdbVotes} votes`}
                      </Typography>
                    </Box>
                    <Box className={styles.ratingItemsWrapper}>
                      {movie.Ratings?.map((rating: Rating, id: number) => (
                        <Box className={styles.ratingItem} key={id}>
                          <Box className={styles.ratingValueWrapper}>
                            <Box className={styles.ratingValue}>
                              {extractRating(rating.Value)}
                            </Box>
                            <Typography
                              component={"span"}
                              className={styles.ratingValueSmaller}
                            >
                              {rating.Value.replace(
                                extractRating(rating.Value)!,
                                ""
                              )}
                            </Typography>
                          </Box>
                          <Box className={styles.ratingSource}>
                            {rating.Source}
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                  {movie.Plot !== "N/A" ? (
                    <Typography component={"p"} className={styles.paragraph}>
                      {movie.Plot}
                    </Typography>
                  ) : null}
                  {movie.Awards !== "N/A" ? (
                    <Box className={styles.awardsWrapper}>
                      <FaAward className={styles.awardIcon} />
                      <Typography
                        component={"span"}
                        className={`${styles.paragraph} ${styles.paragraphYellow}`}
                      >
                        {`Awards: `}
                      </Typography>
                      <Typography
                        component={"span"}
                        className={styles.paragraph}
                      >
                        {movie.Awards}
                      </Typography>
                    </Box>
                  ) : null}
                  <Box className={styles.detailedInfoWrapper}>
                    {Object.entries(filteredSingleMovieData ?? {}).map(
                      ([key, value], id: number) => (
                        <Box className={styles.item} key={id}>
                          <Box className={styles.title}>{key}</Box>
                          <Box className={styles.value}>{value}</Box>
                        </Box>
                      )
                    )}
                  </Box>
                </Grid2>
              </Grid2>
            ) : null}
          </Box>
        </Container>
      </main>
    </div>
  );
}
