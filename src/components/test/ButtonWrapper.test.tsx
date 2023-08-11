import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ButtonWrapper from "../ButtonWrapper";

describe("ButtonWrapper Component", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <ButtonWrapper onBack={() => {}} onConfirm={() => {}} />
    );

    const backButton = getByText("戻る");
    const confirmButton = getByText("決定");

    expect(backButton).toBeTruthy();
    expect(confirmButton).toBeTruthy();
  });

  it("calls onBack and onConfirm when buttons are pressed", () => {
    const onBackMock = jest.fn();
    const onConfirmMock = jest.fn();

    const { getByText } = render(
      <ButtonWrapper onBack={onBackMock} onConfirm={onConfirmMock} />
    );

    const backButton = getByText("戻る");
    const confirmButton = getByText("決定");

    fireEvent.press(backButton);
    fireEvent.press(confirmButton);

    expect(onBackMock).toHaveBeenCalledTimes(1);
    expect(onConfirmMock).toHaveBeenCalledTimes(1);
  });
});
