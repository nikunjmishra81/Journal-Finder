import { shallow } from "enzyme";
import React from "react";
import FindJournalHeader from "./FindJournalHeader";

describe("Find Journal form header", () => {
  it("Should render", () => {
    shallow(<FindJournalHeader />);
  });
});
