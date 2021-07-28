import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import SignInHeader from "./SignInHeader";
import ListPatient from "./ListPatient";


export default function PatientRecord() {
  const classes = useStyles();

  return (
    
    <div className={classes.root}>
      
      <SignInHeader />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Grid item xs={14}>
            <ListPatient />

        </Grid>

      </main>
    </div>
  );
}
