import { Grid } from "@mui/material";
import React from "react";
import JournalCountHeader from "../../components/JournalCountHeader/JournalCountHeader";
import JournalsList from "../../components/JournalsList/JournalsList";

function Journals() {
  return (
    <Grid
      container
      height={"auto"}
      style={{ backgroundColor: "rgba(128, 128, 128, 0.08)" }}
    >
      <Grid item lg={1.8} md={1}></Grid>
      <Grid
        item
        container
        lg={8.4}
        md={8}
        sm={12}
        xs={12}
        style={{
          display: "flex",
          placeContent: "center flex-start",
          alignItems: "center",
          height: "max-content",
        }}
      >
        <JournalCountHeader></JournalCountHeader>
        <JournalsList></JournalsList>{" "}
      </Grid>
      <Grid item lg={1.8} md={1}></Grid>
    </Grid>
  );
}

export default Journals;
