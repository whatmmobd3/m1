import React from "react";

import ImageGrid from "./components/ImageGrid/ImageGrid";

import { Provider } from "react-redux";
import configureStore from "./store";
const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h2>What is javascript</h2>
          <ImageGrid />
        </div>
      </Provider>
    );
  }
}

export default App;
