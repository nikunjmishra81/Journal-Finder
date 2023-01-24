import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import JournalCountHeader from "./JournalCountHeader";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));
describe("Journal Count header", () => {
  it("Should render", () => {
    const screen = render(
      <BrowserRouter>
        <JournalCountHeader />
      </BrowserRouter>
    );
    const inputBox = screen.getByText("Find more journals");
    inputBox.click();
  });
});
