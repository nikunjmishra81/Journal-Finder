import { render } from "@testing-library/react";
import React from "react";
import BackDropLoader from "./BackDropLoader";

describe("Backdrop loader", () => {
  it("Should render", () => {
    render(<BackDropLoader loading={true} message="test" />);
  });
});
