import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import PatientTable from "./PatientTable";
import SignInHeader from "./SignInHeader";

export default function PatientRecord() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SignInHeader />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Grid item xs={12}>
          <PatientTable />
        </Grid>
      </main>
    </div>
  );
}
