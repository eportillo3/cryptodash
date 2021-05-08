import React from "react";

const cc = require("cryptocompare");

cc.setApiKey(
  "ff64f415fa3616fb87c9064eaba0aa490c58e38ffce40ca25f097d24a948ffe6"
);

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "dashboard",
      ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites,
    };
  }

  componentDidMount = () => {
    this.fetchCoins();
  };

  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    this.setState({ coinList });
  };

  confirmFavorites = () => {
    this.setState({
      firstVisit: false,
      page: "dashboard",
    });

    localStorage.setItem(
      "cryptoDash",
      JSON.stringify({
        test: "hello",
      })
    );
  };

  savedSettings() {
    let CryptoDashData = JSON.parse(localStorage.getItem("cryptoDash"));
    if (!CryptoDashData) {
      return { page: "settings", firstVisit: true };
    }
    return {};
  }

  setPage = (page) => this.setState({ page });

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
