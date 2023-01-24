import { Backdrop, CircularProgress, Typography } from "@mui/material";
import React from "react";

export default function BackDropLoader(props) {
  const { loading, message } = props;
  return (
    loading && (
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          display: "flex",
          flexDirection: "column",
        }}
        open={true}
      >
        <Typography position="relative">{message}</Typography>
        <CircularProgress color="inherit" />
      </Backdrop>
    )
  );
}
