import { shallow } from "enzyme";
import React from "react";
import Journals from "./Journals";

describe("Journals List page", () => {
  it("Should render journals", () => {
    shallow(<Journals />);
  });
});
