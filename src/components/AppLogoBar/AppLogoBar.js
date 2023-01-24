import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import "./AppLogoBar.css";
import { Grid } from "@mui/material";

export default function AppLogoBar() {
  return (
    <AppBar position="static" className="app-bar-styles">
      <Toolbar className="logo-toolbar">
        <Grid container>
          <Grid
            item
            lg={0.7}
            md={1}
            sm={2}
            xs={3}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <img
              src="/assets/logo-header.svg"
              alt="Jounal Finder logo"
              height="50"
              width="50"
            />
          </Grid>
          <Grid
            item
            lg={0.8}
            md={2}
            sm={2}
            xs={3}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <img src="/assets/logo-header-text.svg" alt="Journal Finder" />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
