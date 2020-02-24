import React, { Component } from "react";
import Inicio from "./components/inicio.js";

import {Provider} from "react-redux";
import store from "./store";
// Css
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      loading: true,
      albums: []
    };
  };

  async componentDidMount() {
    try {
      const res = await fetch("/albums");
      const json = await res.json();
      this.setState(prevState => ({
        ...prevState,
        loading: false,
        albums: json
      }));
    } catch (err) {
      console.error("Error accediendo al servidor", err);
    }
  }

  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <Inicio/>
      </div>
      </Provider>
    );
  }
}

export default App;
