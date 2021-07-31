import React, {useState} from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import PatientTable from "./PatientTable";
import SignInHeader from "./SignInHeader";

export default function PatientRecord() {
  const classes = useStyles();
  var [value, setValue] = useState("",)

  return (
    <div className={classes.root}>
      <SignInHeader getSearchValue={value => setValue(value) } />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Grid item xs={12}>
          <PatientTable searchValue={value} />
        </Grid>
      </main>
    </div>
  );
}
