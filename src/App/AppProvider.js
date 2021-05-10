import _ from "lodash";
import React from "react";

const cc = require("cryptocompare");

cc.setApiKey(
  "ff64f415fa3616fb87c9064eaba0aa490c58e38ffce40ca25f097d24a948ffe6"
);

export const AppContext = React.createContext();

const MAX_FAVORITES = 10;

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "dashboard",
      favorites: ["BTC", "ETH", "XMR", "DOGE"],
      ...this.savedSettings(),
      setPage: this.setPage,
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      isInFavorites: this.isInFavorites,
      confirmFavorites: this.confirmFavorites,
    };
  }

  // Add coins to favorites
  addCoin = (key) => {
    let favorites = [...this.state.favorites];
    if (favorites.length < MAX_FAVORITES) {
      favorites.push(key);
      this.setState({ favorites });
    }
  };

  // Remove coins from favorites
  removeCoin = (key) => {
    let favorites = [...this.state.favorites];
    this.setState({ favorites: _.pull(favorites, key) });
  };

  // Coins that are already in favorites
  isInFavorites = (key) => _.includes(this.state.favorites, key);

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
        favorites: this.state.favorites,
      })
    );
  };

  savedSettings() {
    let CryptoDashData = JSON.parse(localStorage.getItem("cryptoDash"));
    if (!CryptoDashData) {
      return { page: "settings", firstVisit: true };
    }
    let { favorites } = CryptoDashData;
    return { favorites };
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
