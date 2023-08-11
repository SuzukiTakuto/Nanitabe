import React from "react";
import { render, fireEvent, RenderAPI } from "@testing-library/react-native";
import Button from "../Button"; // テスト対象のコンポーネントのパスを指定

describe("Button Component", () => {
  let renderApi: RenderAPI;
  let onPressMock: jest.Mock;

  beforeEach(() => {
    onPressMock = jest.fn();
    renderApi = render(
      <Button
        onPress={onPressMock}
        title="Test Button"
        width={100}
        height={40}
        fontSize={16}
      />
    );
  });

  it("renders correctly", () => {
    const button = renderApi.getByText("Test Button");
    expect(button).toBeTruthy();
  });

  it("triggers onPress event", () => {
    const button = renderApi.getByText("Test Button");
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
