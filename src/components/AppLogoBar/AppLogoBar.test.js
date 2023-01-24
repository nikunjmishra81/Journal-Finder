import { shallow } from "enzyme";
import React from "react";
import AppLogoBar from "./AppLogoBar";

describe("Apps Navbar", () => {
  it("Should render", () => {
    shallow(<AppLogoBar />);
  });
});
