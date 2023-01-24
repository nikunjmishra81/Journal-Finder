import { fireEvent, render, screen } from "@testing-library/react";
import { shallow } from "enzyme";

import React from "react";
import { JOURNALS_LIST } from "../../../__mock__/JournalsListMock";
import JournalListCard from "../JournalListCard";

describe("Journals List card", () => {
  it("Should render on shallow render", () => {
    shallow(<JournalListCard journalData={JOURNALS_LIST[0].results} />);
  });
  it("Should render on deep render", () => {
    render(<JournalListCard journalData={JOURNALS_LIST[0].results} />);
    const submit_paper_button = screen.getByTestId("submit-form-test-id");
    fireEvent.click(submit_paper_button);
    const journal_website_button = screen.getByTestId("journal-website");
    fireEvent.click(journal_website_button);
    // journal-website
    // submit_paper_button.click();
    // screen.debug();
  });
});
