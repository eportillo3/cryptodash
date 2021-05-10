import React from "react";
import styled from "styled-components";
import { lightGreyBackground, fontSize2 } from "../Shared/Styles";
import { AppContext } from "../App/AppProvider";
import { coinList } from "cryptocompare";
import _, { result } from "lodash";
import fuzzy from "fuzzy";

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;

const SearchInput = styled.input`
  ${lightGreyBackground};
  ${fontSize2};
  border: 1px solid;
  height: 25px;
  color: white;
  place-self: center left;
`;

// Filter through coins
const handleFilter = _.debounce((inputValue, coinList, setFilteredCoins) => {
  //Get all the coin symbols
  let CoinSymbols = Object.keys(coinList);
  //Get all the coin names, map symbol to name
  let CoinNames = CoinSymbols.map((sym) => coinList[sym].CoinName);
  let allStringsToSearch = CoinSymbols.concat(CoinNames);
  let fuzzyResults = fuzzy
    .filter(inputValue, allStringsToSearch, {})
    .map((result) => result.string);

  let filteredCoins = _.pickBy(coinList, (result, symKey) => {
    let coinName = result.coinName;
    return (
      _.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName)
    );
  });
  console.log(filteredCoins);
  setFilteredCoins(filteredCoins);
}, 500);

function filterCoins(e, setFilteredCoins, coinList) {
  let inputValue = e.target.value;
  if (!inputValue) {
    setFilteredCoins(null);
    return;
  }
  handleFilter(inputValue, coinList, setFilteredCoins);
}

export default function () {
  return (
    <AppContext.Consumer>
      {({ setFilteredCoins, coinList }) => (
        <SearchGrid>
          {" "}
          <h2>Search for coins </h2>{" "}
          <SearchInput
            onKeyUp={(e) => filterCoins(e, setFilteredCoins, coinList)}
          />
        </SearchGrid>
      )}
    </AppContext.Consumer>
  );
}
