import { shallow } from "enzyme";
import React from "react";
import FindJournals from "./FindJournals";

describe("Find Journals page", () => {
  it("Should render form", () => {
    shallow(<FindJournals />);
  });
});
