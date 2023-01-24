import { Grid } from "@mui/material";
import React from "react";
import FindJournalForm from "../../components/FindJournalsForm/FindJournalForm";
import FindJournalHeader from "../../components/FindJournalsHeader/FindJournalHeader";
export default function Home() {
  return (
    <Grid container height={"50rem"}>
      <Grid item lg={1.8} md={1} sm={1} xs={1}></Grid>
      <Grid
        item
        container
        lg={8.4}
        md={8}
        sm={10}
        xs={10}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <FindJournalHeader />
        <FindJournalForm />
      </Grid>
      <Grid item lg={1.8} md={1} sm={1} xs={1}></Grid>
    </Grid>
  );
}
