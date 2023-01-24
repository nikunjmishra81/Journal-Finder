import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, * as ReactModule from "react";
import { BrowserRouter } from "react-router-dom";
import ElementLabels from "../../constants/ElementLabels";
import FindJournalForm from "./FindJournalForm";
import { mount } from "enzyme";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));
describe("Find Journals form", () => {
  let setLoading;
  let setTitle;
  let setAbstract;
  let setSnackbar;

  beforeEach(() => {
    setLoading = jest.fn();
    setTitle = jest.fn();
    setAbstract = jest.fn();
    setSnackbar = jest.fn();

    jest.spyOn(ReactModule, "useEffect").mockImplementationOnce((cb) => cb());

    ReactModule.useState = jest
      .fn()
      .mockImplementationOnce(() => [false, setLoading])
      .mockImplementationOnce(() => ["", setTitle])
      .mockImplementationOnce(() => ["", setAbstract])
      .mockImplementationOnce(() => [
        { open: true, severity: "error", message: "test" },
        setSnackbar,
      ]);
  });
  it("Should render", async () => {
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <FindJournalForm />
      </BrowserRouter>
    );

    const titleInputBox = screen.getByPlaceholderText(
      ElementLabels.PLACEHOLDER_PAPER_TITLE
    );
  });
});
