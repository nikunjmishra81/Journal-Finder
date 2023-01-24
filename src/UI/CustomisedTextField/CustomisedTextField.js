import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import "../../fonts/nexussanswebpro-bold.woff";

export const CustomisedTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
    "& input::placeholder": {
      fontSize: "18px",
      fontFamily: "Medium",
    },
    "& textarea::placeholder": {
      fontSize: "18px",
      fontFamily: "Medium",
    },
  },
});
