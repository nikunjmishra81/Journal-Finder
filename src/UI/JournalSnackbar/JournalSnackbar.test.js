import { render, screen } from "@testing-library/react";
import React from "react";
import JournalSnackbar from "./JournalSnackbar";

describe("Journal Snackbar", () => {
  it("Should render", () => {
    render(
      <JournalSnackbar
        snackbarProps={{ open: true, message: "test", severity: "error" }}
      />
    );
    const inputBox = screen.getByText("test");
    inputBox.click();
  });
});
