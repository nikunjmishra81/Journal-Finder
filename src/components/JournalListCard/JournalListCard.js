import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
} from "@mui/material";
import * as React from "react";
import ElementLabels from "../../constants/ElementLabels";
import JournalListData from "./JournalListData";

import "./JournalListCard.css";
export default function JournalListCard(props) {
  const { journalData } = props;
  return (
    <Box className="journal-list-card-box-style">
      <Card variant="outlined">
        <CardHeader
          sx={{ paddingBottom: "0.1rem" }}
          titleTypographyProps={{
            variant: "h5",
            fontFamily: "Medium",
            fontWeight: "600",
            color: "#000000b5",
          }}
          action={
            <>
              <IconButton
                onClick={() =>
                  journalData?.links?.journal
                    ? window?.open(journalData?.links?.journal)
                    : ""
                }
              >
                <Button
                  data-testid="journal-website"
                  style={{
                    marginRight: "1.2rem",
                    textTransform: "none",
                    fontSize: "1.4rem",
                    fontFamily: "Medium",
                  }}
                  variant="text"
                >
                  {ElementLabels.JOURNAL_WEBSITE}
                  <ArrowOutwardIcon
                    sx={{ height: "1.2rem", width: "1.2rem" }}
                  />
                </Button>
              </IconButton>
              <Button
                data-testid="submit-form-test-id"
                style={{
                  marginRight: "1.2rem",
                  textTransform: "none",
                  fontSize: "1.2rem",
                  borderRadius: "1px",
                  fontFamily: "Medium",
                }}
                variant="contained"
                onClick={() =>
                  journalData?.links?.submission
                    ? window.open(journalData?.links?.submission)
                    : ""
                }
              >
                {ElementLabels.SUBMIT_PAPER}
              </Button>
            </>
          }
          title={journalData?.journal}
        ></CardHeader>
        <CardContent className="journal-list-card-content">
          <CardMedia
            className="journal-list-card-media-style journal-list-card-media-style-width"
            component="img"
            src={journalData?.cover}
            alt={`Journal ${journalData?.journal}`}
          />
          <JournalListData journalData={journalData} />
        </CardContent>
      </Card>
    </Box>
  );
}
