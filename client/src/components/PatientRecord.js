import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import PatientTable from "./PatientTable";
import SignInHeader from "./SignInHeader";

export default function PatientRecord() {
  const classes = useStyles();

  //get search value and store in value variable
  var value = ""
  const handleSearch = (search) => {
    value = search
    return value
  };

  return (
    <div className={classes.root}>
      <SignInHeader />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Grid item xs={12}>
          <PatientTable searchValue={value} />
        </Grid>
      </main>
    </div>
  );
}
