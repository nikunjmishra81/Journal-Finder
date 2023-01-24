import { Grid } from "@mui/material";
import React, { useContext } from "react";
import JournalsContext from "../../context/JournalsContext";
import "../../fonts/nexussanswebpro-bold.woff";
import JournalListCard from "../JournalListCard/JournalListCard";
import "./JournalsList.css";

export default function JournalsList() {
  const journalsData = useContext(JournalsContext);

  return (
    <Grid
      item
      container
      lg={12}
      md={12}
      sm={12}
      xs={12}
      className={"journals-list-main-grid-form"}
    >
      {journalsData?.journals?.map((data, index) => (
        <JournalListCard journalData={data}></JournalListCard>
      ))}
    </Grid>
  );
}
