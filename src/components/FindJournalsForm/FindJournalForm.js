import { Button, Grid, Typography } from "@mui/material";

import React, { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { getSearchedJournals } from "../../api/Journals";
import ElementLabels from "../../constants/ElementLabels";
import JournalsContext from "../../context/JournalsContext";
import "../../fonts/nexussanswebpro-bold.woff";
import { Paths } from "../../routes/Paths";
import BackDropLoader from "../../UI/BackDropLoader/BackDropLoader";
import { CustomisedTextField } from "../../UI/CustomisedTextField/CustomisedTextField";
import JournalSnackbar from "../../UI/JournalSnackbar/JournalSnackbar";
import "./FindJournalForm.css";

export default function FindJournalForm() {
  const [loading, setLoading] = useState(false);

  const journalsData = useContext(JournalsContext);
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const history = useHistory();
  const [snackbar, setSnackbar] = React.useState({
    open: false,
    message: "",
    severity: "warning",
  });

  const titleRef = useRef();
  const abstractRef = useRef();
  const getJournals = async (data) => {
    try {
      let response = {};
      setLoading(true);

      response = await getSearchedJournals(data);
      if (response.status === 200) {
        console.log(response.data);
        if (response?.data?.results?.length === 0) {
          setSnackbar({
            open: true,
            message: ElementLabels.NO_JOURNAL_FOUND,
            severity: "warning",
          });
          return;
        } else {
          journalsData.setJournals(response?.data?.results);
          history.push(Paths.JOURNALS_PAGE);
        }
      } else {
        setSnackbar({
          open: true,
          message: ElementLabels.FAILED_TO_FETCH_JOURNALS,
          severity: "error",
        });
      }
    } catch ({ response }) {
      setSnackbar({
        open: true,
        message: ElementLabels.FAILED_TO_FETCH_JOURNALS,
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };
  const handleFindJournals = () => {
    if (title === "") {
      setSnackbar({
        open: true,
        message: ElementLabels.KINDLY_PROVIDE_TITLE,
        severity: "warning",
      });

      titleRef.current.focus();
      return;
    } else if (abstract === "") {
      setSnackbar({
        open: true,
        message: ElementLabels.KINDLY_PROVIDE_ABSTRACT,
        severity: "warning",
      });
      abstractRef.current.focus();
      return;
    }
    const data = { title, abstract };
    getJournals(data);
  };
  return (
    <Grid
      item
      container
      lg={12}
      md={12}
      sm={12}
      xs={12}
      className={"main-grid-form"}
    >
      <Grid item container className={"inner-grid-form"}>
        <Grid item lg={12} md={11.5} sm={12} xs={12}>
          <Typography className="form-text-typography">
            {" "}
            {ElementLabels.PAPER_TITLE}
          </Typography>
          <CustomisedTextField
            inputRef={titleRef}
            value={title}
            required={true}
            onChange={(e) => setTitle(e.target.value)}
            type="search"
            placeholder={ElementLabels.PLACEHOLDER_PAPER_TITLE}
            className="form-text-box-common"
          />
        </Grid>
        <Grid item lg={12} md={11.5} sm={12} xs={12}>
          <Typography className="form-text-typography">
            {" "}
            {ElementLabels.PAPER_ABSTRACT}
          </Typography>
          <CustomisedTextField
            required={true}
            inputRef={abstractRef}
            value={abstract}
            onChange={(e) => setAbstract(e.target.value)}
            type="search"
            placeholder={ElementLabels.PLACEHOLDER_PAPER_ABSTRACT}
            multiline
            rows={6}
            className="form-text-box-common"
          />
        </Grid>
        <Grid item lg={12} md={11.5} sm={12} xs={12}>
          <Button
            data-testid="my-test-id"
            className="find-button find-button-width"
            variant="contained"
            onClick={() => handleFindJournals()}
          >
            {" "}
            {ElementLabels.FIND_JOURNALS_BUTTON}
          </Button>
        </Grid>

        <JournalSnackbar snackbarProps={snackbar}></JournalSnackbar>
        <BackDropLoader
          loading={loading}
          message={ElementLabels.FETCHING_JOURNALS}
        ></BackDropLoader>
      </Grid>
    </Grid>
  );
}
