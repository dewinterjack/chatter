import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { chatReducer } from "./store/chat/reducer";

test("renders chat title", () => {
  const store = createStore(chatReducer);
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const chatTitle = getByText(/Chat/i);
  expect(chatTitle).toBeInTheDocument();
});
