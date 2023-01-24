import { Grid, Typography } from "@mui/material";
import * as React from "react";
import ElementLabels from "../../constants/ElementLabels";
import "./JournalListCard.css";
export default function JournalListData(props) {
  const { journalData } = props;
  return (
    <Grid container>
      <Grid item container className="journal-list-catrd-info-inner-grid">
        {" "}
        <Grid item>
          <Typography className="journal-list-card-issn">
            {" "}
            {ElementLabels.ISSN}
            {journalData?.issn}
          </Typography>
        </Grid>
        <Grid item container>
          <Grid
            item
            container
            lg={1.5}
            md={3}
            sm={4}
            xs={4}
            className="journal-list-card-data-fields"
          >
            <Grid item>
              <Typography className="journal-list-card-fields">
                {ElementLabels.CITY_SCORE}
              </Typography>
            </Grid>
            <Typography className="journal-list-card-fields-data">
              {journalData?.citeScore || "--"}
            </Typography>
          </Grid>
          <Grid
            item
            container
            lg={1.9}
            md={3}
            sm={4}
            xs={4}
            className="journal-list-card-data-fields"
          >
            <Grid item>
              <Typography className="journal-list-card-fields">
                {ElementLabels.IMPACT_FACTOR}
              </Typography>
            </Grid>
            <Typography className="journal-list-card-fields-data">
              {journalData?.impactFactor || "--"}
            </Typography>
          </Grid>
          <Grid
            item
            container
            lg={2.3}
            md={3}
            sm={4}
            xs={4}
            className="journal-list-card-data-fields"
          >
            <Grid item>
              <Typography className="journal-list-card-fields">
                {ElementLabels.ACCEPTANCE_RATE}
              </Typography>
            </Grid>
            <Typography className="journal-list-card-fields-data">
              {Math.round(journalData?.acceptanceRate) || "--"} {"%"}
            </Typography>
          </Grid>
          <Grid
            item
            container
            lg={2.8}
            md={3}
            sm={4}
            xs={4}
            className="journal-list-card-data-fields"
          >
            <Grid item>
              <Typography className="journal-list-card-fields">
                {ElementLabels.TIME_TO_FIRST_DECISION}
              </Typography>
            </Grid>
            <Typography className="journal-list-card-fields-data">
              {Math.round(journalData?.timeToFirstDecision) || "--"}{" "}
              {ElementLabels.WEEKS}
            </Typography>
          </Grid>
          <Grid
            item
            container
            lg={3}
            md={3}
            sm={4}
            xs={4}
            className="journal-list-card-data-fields"
          >
            <Grid item>
              <Typography className="journal-list-card-fields">
                {ElementLabels.TIME_TO_PUBLICATION}
              </Typography>
            </Grid>
            <Typography className="journal-list-card-fields-data">
              {Math.round(journalData?.citeScore) || "--"} {ElementLabels.WEEKS}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
