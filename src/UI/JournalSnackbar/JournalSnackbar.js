import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

import React from "react";
import "../../fonts/nexussanswebpro-bold.woff";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function JournalSnackbar(props) {
  const { snackbarProps } = props;
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    setOpen(snackbarProps?.open);
  }, [snackbarProps]);

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      autoHideDuration={3000}
      onClose={() => setOpen(false)}
      onClick={() => setOpen(false)}
      style={{ cursor: "pointer" }}
    >
      <Alert severity={snackbarProps?.severity}>{snackbarProps?.message}</Alert>
    </Snackbar>
  );
}
