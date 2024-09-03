//import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { Provider } from 'react-redux';
import {store} from './store/store.ts';

Amplify.configure(outputs);
const existingConfig = Amplify.getConfig();
Amplify.configure({
  ...existingConfig,
  API: {
    ...existingConfig.API,
    REST: outputs.custom.API,
  },
  // API: {
  //   REST: {
  //     headers: async () => {
  //       return {Authorization: `${(await fetchAuthSession()).tokens.idToken.toString()}`};
  //     },
  //   }
  // }
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
