import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import indexStore from "./store/index-store";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={indexStore}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  rootElement
);
