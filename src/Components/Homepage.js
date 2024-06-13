import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllMovies } from "../api-helpers/api-helpers";
import MovieItem from "./Movies/MovieItem";

function Homepage() {
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    getAllMovies()
      .then((data) => setmovies(data.movies))
      .catch((err) => console.log(err));
  }, []);
  // console.log(movies)

  return (
    <Box width={"100%"} height={"100%"} margin={"auto"} marginTop={2}>
      <Box margin={"auto"} width={"80%"} height={"40vh"} padding={2}>
        <img
          src="https://i.ytimg.com/vi/V7IzrpDa17g/maxresdefault.jpg"
          alt="Black Patnher"
          width={"100%"}
          height={"100%"}
        />
      </Box>

      <Box padding={5} margin={"auto"}>
        <Typography variant="h4" textAlign={"center"}>
          Latest Releases
        </Typography>
      </Box>

      <Box
        margin={"auto"}
        display={"flex"}
        width={"80%"}
        justifyContent={"center"}
        flexWrap={"wrap"}
      >
        {movies &&
          movies.map((movie, index) => (
            <MovieItem
              id={movie._id}
              title={movie.title}
              posterUrl={movie.posterUrl}
              releaseDate={movie.releaseDate}
              key={index}
            />
          ))}
      </Box>

      <Box display={"flex"} paddin={5} margin={"auto"}>
        <Button
          LinkComponent={Link}
          to="/movies"
          variant="outlined"
          sx={{ margin: "auto", color: "#2b2d42" }}
        >
          View All Movies
        </Button>
      </Box>
    </Box>
  );
}

export default Homepage;
