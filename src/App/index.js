import React, { Component } from "react";
import "./App.css";
import WelcomeMessage from "./WelcomeMessage";
import styled, { css } from "styled-components";
import AppLayout from "./AppLayout";

class App extends Component {
  render() {
    return (
      <AppLayout>
        <WelcomeMessage />
      </AppLayout>
    );
  }
}

export default App;
