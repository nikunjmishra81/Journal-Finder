import { Grid, Typography } from "@mui/material";
import React from "react";
import ElementLabels from "../../constants/ElementLabels";
import "./FindJournalHeader.css";
// import "../fonts/nexussanswebpro-bold.woff";
import "../../fonts/nexussanswebpro-bold.woff";
export default function FindJournalHeader() {
  return (
    <Grid
      item
      lg={11}
      md={10}
      sm={12}
      xs={12}
      className="main-grid main-grid-margin"
    >
      <Typography variant="h4" className="find-journals">
        {ElementLabels.FIND_JOURNALS}
      </Typography>
      <br></br>

      <Typography variant="h5" className="header-title">
        {ElementLabels.ENTER_TITLE}
      </Typography>
    </Grid>
  );
}
