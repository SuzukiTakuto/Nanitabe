import React from "react";
import { render } from "@testing-library/react-native";
import HotpepperLog from "../HotpepperLog";

describe("HotpepperLog Component", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<HotpepperLog />);
    const hotpepperLogo = getByTestId("hotpepper-logo");

    expect(hotpepperLogo).toBeTruthy();
  });
});
