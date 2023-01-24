import React from "react";
import Routes from "./routes/Routes";
import { Grid } from "@mui/material";
import AppLogoBar from "./components/AppLogoBar/AppLogoBar";
import { withStyles } from "@mui/styles";
import { JournalsContextProvider } from "./context/JournalsContext";

const styles = (theme) => ({});
function Main() {
  return (
    <JournalsContextProvider>
      <Grid container direction="row">
        <Grid item md={12} width={"100%"}>
          <AppLogoBar />
        </Grid>
        <Grid item lg={12}>
          <Routes />
        </Grid>
      </Grid>
    </JournalsContextProvider>
  );
}

export default withStyles(styles, { withTheme: true })(Main);
