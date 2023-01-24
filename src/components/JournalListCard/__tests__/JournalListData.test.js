import { render } from "@testing-library/react";
import React from "react";
import { JOURNALS_LIST } from "../../../__mock__/JournalsListMock";
import JournalListData from "../JournalListData";

describe("Journals List data", () => {
  it("Should render", () => {
    render(<JournalListData journalData={JOURNALS_LIST[0].results} />);
  });
});
