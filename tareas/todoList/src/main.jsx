import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/index.css";
import { Provider } from "react-redux";
import { store } from "./redux/configRedux";
import { ChakraProvider } from "@chakra-ui/react";




  ReactDOM.createRoot(document.getElementById("root")).render(
    <ChakraProvider >
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  );

