import React from "react";
import { Grid, Typography } from "@material-ui/core";
import useStyles from "./styles";
import SignInHeader from "./SignInHeader";

export default function Account() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SignInHeader />
      <div className={classes.card}>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Grid item xs={12}>
            <Typography variant="h4">Welcome to your account</Typography>
          </Grid>
        </main>
      </div>
    </div>
  );
}
