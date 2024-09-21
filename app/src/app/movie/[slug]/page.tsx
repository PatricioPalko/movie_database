"use client";
import { fetchSingleMovie } from "@/app/helpers/fetch-data";
import { Box, Container, Grid2, Typography } from "@mui/material";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import Image from "next/Image";
import { useEffect, useState } from "react";
import { FaAward } from "react-icons/fa";
import "../../globals.scss";
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

export default function MovieDetailPage({ params }: BlogPageProps) {
  const { slug } = params;
  const [loading, setLoading] = useState<boolean>(true);
  const [singleMovieData, setSingleMovieData] = useState<Movie | null>(null);
  const genres = singleMovieData?.Genre?.split(", ");
  const [filteredSingleMovieData, setFilteredSingleMovieData] =
    useState<FilteredMovieData | null>(null);

  useEffect(() => {
    const fetchSingleMoviesData = async () => {
      setLoading(true);
      try {
        const response = await fetchSingleMovie(slug);
        const data = await response.json();
        if (data) {
          setSingleMovieData(data);
          setFilteredSingleMovieData({
            Released: data.Released,
            Language: data.Language,
            Director: data.Director,
            Writer: data.Writer,
            Actors: data.Actors,
            Country: data.Country,
          });
        } else {
          setSingleMovieData(null);
        }
      } catch (error) {
        console.error("Error fetching single movie:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSingleMoviesData();
  }, []);

  return (
    <main>
      <Container maxWidth={"lg"} className={styles.movieDetail}>
        <Box className={styles.tpl}>
          {loading ? (
            <Box>Loading the detail of movie</Box>
          ) : singleMovieData ? (
            <Grid2 container spacing={8} className={styles.wrapper}>
              <Grid2 className={styles.wrapperItem}>
                <Image
                  src={singleMovieData.Poster}
                  alt={singleMovieData.Title}
                  width={600}
                  height={450}
                  className={styles.image}
                />
              </Grid2>
              <Grid2 className={styles.infoWrapper}>
                <Typography
                  variant="h3"
                  component={"h3"}
                  className={styles.title}
                >
                  {singleMovieData.Title}
                </Typography>
                <Box className={styles.genres}>
                  {genres?.map((genre, id) => (
                    <Typography
                      component={"span"}
                      className={styles.genre}
                      key={id}
                    >
                      {genre}
                    </Typography>
                  ))}
                  <Typography component={"span"} className={styles.rated}>
                    {singleMovieData.Rated}
                  </Typography>
                </Box>
                <Box className={styles.typeWrapper}>
                  <Typography component={"span"} className={styles.type}>
                    {singleMovieData.Year}
                  </Typography>
                  <Typography component={"span"} className={styles.type}>
                    {singleMovieData.Type}
                  </Typography>
                  {singleMovieData.Type === "series" ? (
                    <Typography component={"span"} className={styles.type}>
                      {singleMovieData.Type === "series"
                        ? `${singleMovieData.totalSeasons} seasons`
                        : null}
                    </Typography>
                  ) : null}
                  <Typography component={"span"} className={styles.type}>
                    {singleMovieData.Runtime}
                  </Typography>
                </Box>
                <Box className={styles.ratingWrapper}>
                  <Box className={styles.gaugeWrapper}>
                    <Gauge
                      value={Number(singleMovieData.imdbRating) * 10}
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
                      {`${singleMovieData.imdbVotes} votes`}
                    </Typography>
                  </Box>
                  <Box className={styles.ratingItemsWrapper}>
                    {singleMovieData.Ratings?.map((rating, id) => (
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

                <Typography component={"p"} className={styles.paragraph}>
                  {singleMovieData.Plot}
                </Typography>
                <Box className={styles.awardsWrapper}>
                  <FaAward className={styles.awardIcon} />
                  <Typography
                    component={"span"}
                    className={`${styles.paragraph} ${styles.paragraphYellow}`}
                  >
                    {`Awards: `}
                  </Typography>
                  <Typography component={"span"} className={styles.paragraph}>
                    {singleMovieData.Awards}
                  </Typography>
                </Box>
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
  );
}
