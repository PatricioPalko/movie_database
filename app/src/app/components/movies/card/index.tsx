import MovieDetailPoster from "@/app/components/movies/detail/poster";
import { Movie, MovieCardProps } from "@/app/types/Types";
import { useStore } from "@/store/useStore";
import { Box, ListItem, Typography } from "@mui/material";
import Link from "next/link";
import { MdOutlineStar } from "react-icons/md";

export const MovieCard = ({ movie }: MovieCardProps) => {
  const { favourites } = useStore();

  const isFavourite = favourites.some((f: Movie) => f.imdbID === movie.imdbID);
  return (
    <ListItem sx={{ listStyle: "none", p: 1 }}>
      <Link
        href={`/movie/${movie.imdbID}`}
        style={{
          textDecoration: "none",
          display: "block",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "block",
            width: "100%",
            height: 320,
            position: "relative",
            borderRadius: 1,
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                transition: "transform 0.35s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            >
              <MovieDetailPoster poster={movie.Poster} title={movie.Title} />
            </Box>
          </Box>

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
              pointerEvents: "none",
            }}
          />

          {isFavourite && (
            <Box
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 34,
                height: 34,
                borderRadius: "50%",
                backgroundColor: "rgba(10, 15, 28, 0.95)",
                border: "1px solid rgba(52, 211, 153, 0.9)",
                boxShadow: "0 0 14px rgba(52, 211, 153, 0.9)",
                backdropFilter: "blur(6px)",
              }}
            >
              <MdOutlineStar
                style={{
                  color: "#34D399",
                  fontSize: 20,
                }}
              />
            </Box>
          )}

          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              p: 2,
              zIndex: 2,
            }}
          >
            <Typography
              sx={{ fontSize: 12, opacity: 0.8, color: "text.secondary" }}
            >
              {movie.Year}
            </Typography>
            <Typography sx={{ fontWeight: 500, color: "text.primary" }}>
              {movie.Title}
            </Typography>
          </Box>
        </Box>
      </Link>
    </ListItem>
  );
};

export default MovieCard;
