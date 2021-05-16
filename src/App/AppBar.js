import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "./AppProvider";

const Logo = styled.div`
  font-size: 1.5rem;
`;

const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
  margin-bottom: 40px;
`;

const ControlButtonElem = styled.div`
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      color: #4ab49f;
    `}

  ${(props) =>
    props.hidden &&
    css`
      display: none;
    `}
`;

// Turns first letter to uppercase and rest to lowercase
const toProperCase = (lower) => {
  return lower.charAt(0).toUpperCase() + lower.substring(1);
};

function ControlButton({ name }) {
  return (
    <AppContext.Consumer>
      {({ firstVisit, page, setPage }) => (
        <ControlButtonElem
          active={page === name}
          onClick={() => setPage(name)}
          hidden={firstVisit && name === "dashboard"}
        >
          {toProperCase(name)}
        </ControlButtonElem>
      )}
    </AppContext.Consumer>
  );
}

export default function () {
  return (
    <Bar>
      <Logo>CryptoDash</Logo>
      <div></div>
      <ControlButton name="dashboard" />
      <ControlButton name="settings" />
    </Bar>
  );
}
