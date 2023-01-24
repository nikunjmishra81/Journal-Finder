import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { theme } from "./config/theme";
import Main from "./Main";

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Router>
          <Main />
        </Router>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
