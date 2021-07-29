import React, { useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Container,
  Grid,
  Typography,
  makeStyles,
  unstable_createMuiStrictModeTheme,
} from "@material-ui/core/";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Image from "./image.jpg"; // Import using relative path

import { PropTypes } from "prop-types";



async function loginUser(credentials){
  return fetch('http://localhost8080/signin' , {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data =>data.json())
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(30),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const SignIn = ({setToken}) => {
  const classes = useStyles();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }
  

  return (
    <>
      {/* <img src={Image} alt="hospital" /> */}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="ID" onChange={e => setUsername(e.target.value)}
              label="ID"
              name="ID"
              autoComplete="ID"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"  onChange={e => setPassword(e.target.value)}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button onSubmit={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item s>
                <Link href="#" variant="body1">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
};

SignIn.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default SignIn;
