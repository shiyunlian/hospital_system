import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import SignInHeader from "./SignInHeader";
import ListInsurance from "./ListInsurance";



export default function InsuranceRecord() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SignInHeader />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Grid item xs={12}>
          <ListInsurance />
        </Grid>
      </main>
    </div>
  );
}
