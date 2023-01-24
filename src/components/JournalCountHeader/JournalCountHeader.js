import { Grid, Typography, Button } from "@mui/material";
import React, { useContext } from "react";
import ElementLabels from "../../constants/ElementLabels";
import "../../fonts/nexussanswebpro-bold.woff";
import "./JournalCountHeader.css";
import { useHistory } from "react-router-dom";
import JournalsContext from "../../context/JournalsContext";
import { Paths } from "../../routes/Paths";

export default function JournalCountHeader() {
  const history = useHistory();
  const journalsData = useContext(JournalsContext);

  return (
    <Grid
      item
      lg={11}
      md={10}
      sm={12}
      xs={12}
      className="journal-count-main-grid"
    >
      <Typography variant="h5" className="journal-count-header-title">
        {`Showing ${journalsData?.journals?.length} Journals matching your paper`}
      </Typography>
      <Button
        onClick={(e) => history.push(Paths.HOME_PAGE)}
        style={{ textTransform: "none", fontSize: "1rem" }}
      >
        {" "}
        {ElementLabels.FIND_MORE_JOURNALS}
      </Button>
    </Grid>
  );
}
