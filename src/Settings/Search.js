import React from "react";
import styled from "styled-components";
import { lightGreyBackground, fontSize2 } from "../Shared/Styles";

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

export default function () {
  return (
    <SearchGrid>
      {" "}
      <h2>Search for coins </h2> <SearchInput />
    </SearchGrid>
  );
}
