import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store"; // もしくは実際のReduxストアを使用
import Input from "../Input";

describe("Input Component", () => {
  const mockStore = configureStore(); // もしくは実際のReduxストアを使用
  let store: any;

  beforeEach(() => {
    store = mockStore({});
  });

  it("renders correctly", () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <Input inputType="station" placeholder="Station" />
      </Provider>
    );

    const inputElement = getByPlaceholderText("Station");
    expect(inputElement).toBeTruthy();
  });

  it("dispatches setStation action when inputType is 'station'", () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <Input inputType="station" placeholder="Station" />
      </Provider>
    );

    const inputElement = getByPlaceholderText("Station");

    fireEvent.changeText(inputElement, "New Station");
    const actions = store.getActions();

    expect(actions).toContainEqual({
      type: "topScreen/setStation",
      payload: "New Station",
    });
  });

  it("dispatches setPrice action when inputType is 'price'", () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <Input inputType="price" placeholder="Price" />
      </Provider>
    );

    const inputElement = getByPlaceholderText("Price");

    fireEvent.changeText(inputElement, "100");
    const actions = store.getActions();

    expect(actions).toContainEqual({
      type: "topScreen/setPrice",
      payload: 100,
    });
  });
});
