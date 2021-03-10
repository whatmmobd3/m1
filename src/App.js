import React from "react";
import './App.css'

import ImageGrid from "./components/ImageGrid/ImageGrid";

import { Provider } from "react-redux";
import configureStore from "./store";
const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <header className="header">What is javascript</header>
          <ImageGrid />
        </div>
      </Provider>
    );
  }
}

export default App;
