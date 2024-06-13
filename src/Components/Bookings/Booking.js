import { Button, FormLabel, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovieDetails } from "../../api-helpers/api-helpers";

const Booking = () => {
  const [movie, setMovie] = useState();
  const [inputs, setInputs] = useState({ seatNumber: "", date: "" });
  const id = useParams().id;
  console.log(id);

  useEffect(() => {
    getMovieDetails(id)
      .then((res) => setMovie(res.movie))
      .catch((err) => console.log(err));
  }, [id]);
  console.log(movie);

  const handleChange = (e) =>{
    setInputs((prevState)=>({...prevState,[e.target.name]:e.target.value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      {movie && (
        <>
          <Typography
            padding={3}
            fontFamily="fantasy"
            variant="h4"
            textAlign={"center"}
          >
            Book Tickets:{movie.title}
          </Typography>

          <Box display={"flex"} justifyContent="center">
            <Box
              display={"flex"}
              justifyContent="column"
              flexDirection={"column"}
              padding={3}
              width={"50%"}
              marginRight={"auto"}
            >
              <img
                width={"80%"}
                height={"300px"}
                src={movie.posterUrl}
                alt={movie.title}
              ></img>
              <Box width={"80%"} marginTop={3} padding={2}>
                <Typography paddingTop={2}>{movie.description}</Typography>
                <Typography fontWeight={"bold"} marginTop={1}>
                  Starrer: {movie.actors.map((actor) => actor + ",")}
                </Typography>

                <Typography fontWeight={"bold"} marginTop={1}>
                  Releases Date: {new Date(movie.date).toDateString()}
                </Typography>
              </Box>
            </Box>
            <Box width={"50%"} paddingTop={3}>
              <form onSubmit={handleSubmit}>
                <Box
                  padding={5}
                  margin={"auto"}
                  display={"flex"}
                  flexDirection={"column"}
                >
                  <FormLabel>Seat Number</FormLabel>
                  <TextField
                    value={inputs.seatNumber}
                    onChange={handleChange}
                    name="seatNumber"
                    type="number"
                    margin="normal"
                    variant="standard"
                  />

                  <FormLabel>Booking Date</FormLabel>
                  <TextField
                    value={inputs.date}
                    onChange={handleChange}
                    name="date"
                    type="date"
                    margin="normal"
                    variant="standard"
                  />
                  <Button type={"submit"} sx={{ mt: 3 }}>
                    {" "}
                    Book Now{" "}
                  </Button>
                </Box>
              </form>
            </Box>
          </Box>
        </>
      )}
    </div>
  );
};

export default Booking;
