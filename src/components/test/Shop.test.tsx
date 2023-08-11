import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store"; // もしくは実際のReduxストアを使用
import Shop from "../Shop";
import { HotpepperDataType } from "../../hotpepperDataType";

describe("Shop Component", () => {
  const mockStore = configureStore(); // もしくは実際のReduxストアを使用
  let store: any;

  beforeEach(() => {
    store = mockStore({});
  });

  const mockData: HotpepperDataType = {
    name: "Test Shop",
    photo: { mobile: { l: "test-url" } },
    budget: { average: "1000円", name: "500~1500円" },
    urls: { pc: "http://example.com" },
    lat: 0,
    lng: 0,
  };

  it("renders correctly", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Shop data={mockData} />
      </Provider>
    );

    const shopName = getByText("Test Shop");
    const budget = getByText("料金: Cheap");

    expect(shopName).toBeTruthy();
    expect(budget).toBeTruthy();
  });

  it("dispatches toggleNow and toggleStation when '最初に戻る' button is pressed", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Shop data={mockData} />
      </Provider>
    );

    const backButton = getByText("最初に戻る");
    fireEvent.press(backButton);

    const actions = store.getActions();

    expect(actions).toContainEqual({
      type: "topScreenComponents/toggleNow",
      payload: false,
    });

    expect(actions).toContainEqual({
      type: "topScreenComponents/toggleStation",
    });
  });

  it("dispatches togglePrice when '最初に戻る' button is pressed", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Shop data={mockData} />
      </Provider>
    );

    const backButton = getByText("最初に戻る");
    fireEvent.press(backButton);

    const actions = store.getActions();

    expect(actions).toContainEqual({
      type: "topScreenComponents/togglePrice",
    });
  });
});
