import { render } from "@testing-library/react";
import React from "react";
import { JournalsProvider } from "../../context/JournalsContext";
import { JOURNALS_LIST } from "../../__mock__/JournalsListMock";
import JournalsList from "./JournalsList";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));
describe("Journals List", () => {
  it("Should render", () => {
    render(
      <JournalsProvider
        value={{ journals: JOURNALS_LIST[0].results, setJournals: jest.fn() }}
      >
        <JournalsList />
      </JournalsProvider>
    );
  });
});
