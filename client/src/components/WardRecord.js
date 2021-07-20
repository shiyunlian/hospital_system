import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import WardTable from "./WardTable";
import SignInHeader from "./SignInHeader";

export default function WardRecord() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SignInHeader />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Grid item xs={12}>
          <WardTable />
        </Grid>
      </main>
    </div>
  );
}
