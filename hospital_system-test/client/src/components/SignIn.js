import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
} from "@material-ui/core/";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Image from "./image.jpg"; // Import using relative path

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

async function loginUser(credentials) {
  return fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
      .then(data => data.json())
}

const SignIn = ({setToken}) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async e => {
    console.log('Login debug')
    e.preventDefault();
    let result = await loginUser({
      username,
      password
    });
    console.log(result);
    if(result.message === 'success') {
      setToken(result.token);
      window.location.reload();
    }else {
      alert('Username or password is not correct')
    }
  }
  const classes = useStyles();

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
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={e => setUserName(e.target.value)}
              id="ID"
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
              onChange={e => setPassword(e.target.value)}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
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
};
export default SignIn;
