import { shallow } from "enzyme";

import React from "react";
import Main from "../Main";

describe("Main component", () => {
  it("Should render", () => {
    shallow(<Main />);
  });
});
