import React, { useEffect, useState } from "react";
import {
  AppBar,
  Autocomplete,
  Tab,
  Tabs,
  TextField,
  Toolbar,
} from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import { Box } from "@mui/system";
import  {getAllMovies}  from "../api-helpers/api-helpers";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminAction, userAction } from "../store";


function Header() {
  const dispatch = useDispatch()
  const isAdminLoggedIn = useSelector((state)=>state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state)=>state.user.isLoggedIn);
  const [value, setValue] = useState(0);
  const [movies, setMovies] = useState([])
  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);

  const logout = (isAdmin)=>{
    dispatch(isAdmin ? adminAction.logout() : userAction.logout())
  }
  return (
    <div>
      <AppBar position="sticky" sx={{ bgcolor: "#2b2d42" }}>
        <Toolbar>
          <Box width={"20%"}>
            <MovieIcon />
          </Box>

          <Box width={"30%"} margin={"auto"}>
            <Autocomplete
              freeSolo
              options={movies &&movies.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  sx={{ input: { color: "white" } }}
                  variant="standard"
                  {...params}
                  placeholder="Search Movies"
                />
              )}
            />
          </Box>

          <Box display={"flex"}>
            <Tabs
              indicatorColor="secondary"
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab LinkComponent={Link} to="/movies" label="Movies" />
              {!isAdminLoggedIn && !isUserLoggedIn && (
              <>
              <Tab LinkComponent={Link} to="/auth"label="Auth" />
              <Tab LinkComponent={Link} to="/admin"label="Admin" />
              </>)}

              {isUserLoggedIn && (
              <>
              <Tab onClick={()=>logout(false)} LinkComponent={Link} to="/" label="Logout" />
              <Tab LinkComponent={Link} to="/user" label="Profile" />
              </>)}

              {isAdminLoggedIn && (
              <>
              <Tab LinkComponent={Link} to="/admin" label="Profile" />
              <Tab LinkComponent={Link} to="/add" label="Add Movie" />
              <Tab onClick={()=>logout(true)} LinkComponent={Link} to="/" label="Logout" />
              </>)}
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
