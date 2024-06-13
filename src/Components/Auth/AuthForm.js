import {
  Button,
  Dialog,
  FormLabel,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import React, { useState } from "react";

function AuthForm({onSubmit, isAdmin}) {
  const [inputs, setInputs] = useState({
    name:"",
    email:"",
    password:""
  })
  const [isSignUp, setisSignUp] = useState(false)
  const handleChange = ((e)=>{
    setInputs((prevState)=>({...prevState, [e.target.name]:e.target.value}))
  })

  const handleSubmit = ((e)=>{
    e.preventDefault();
    onSubmit({inputs, signup: isAdmin ? false: isSignUp})

    //console.log(inputs)   //1:29
  })
  return (
    <div>
      <Dialog PaperProps={{style:{borderRadius:20}}} open={true}>
        <Box sx={{ml:"auto", padding:1}}> 
        <IconButton>
          <CloseRoundedIcon/>
        </IconButton>
        </Box>
        <Typography variant="h4" textAlign={"center"}>
          {isSignUp ? "Sign Up":"Login"}
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box
            padding={6}
            display={"flex"}
            justifyContent="center"
            flexDirection={"column"}
            width={"400"}
            margin={"auto"}
            alignContent="center"
          >
            {!isAdmin && isSignUp &&
            <> 
            <FormLabel sx={{ mt: 1, mb: 1 }}>Name</FormLabel>
            <TextField
              value={inputs.name}
              onChange={handleChange}
              margin="normal"
              variant="standard"
              type={"text"}
              name="name"
            /></>}
            <FormLabel sx={{ mt: 1, mb: 1 }}>Email</FormLabel>
            <TextField
              value={inputs.email}
              onChange={handleChange}
              margin="normal"
              variant="standard"
              type={"email"}
              name="email"
            />
            <FormLabel sx={{ mt: 1, mb: 1 }}>Password</FormLabel>
            <TextField
              value={inputs.password}
              onChange={handleChange}
              margin="normal"
              variant="standard"
              type={"password"}
              name="password"
            />

            <Button
              sx={{ mt: 2, borderRadius: 10, bgcolor: "#2b2d42" }}
              type="submit"
              fullWidth
              variant="contained"
            >
              {isSignUp ? "Sign Up":"Login"}
            </Button>
            
           {!isAdmin && <Button
            onClick={()=>setisSignUp(!isSignUp)}
              sx={{ mt: 2, borderRadius: 10 }}
              fullWidth
            >
              {isSignUp ? "Login":"Sign Up"}
            </Button>}


          </Box>
        </form>
      </Dialog>
    </div>
  );
}

export default AuthForm;
