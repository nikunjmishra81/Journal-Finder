import { shallow } from "enzyme";

import React from "react";
import Routes from "./Routes";

describe("Routes List", () => {
  it("Should render", () => {
    shallow(<Routes />);
  });
});
