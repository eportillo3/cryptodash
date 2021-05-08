import React from "react";
import styled, { css } from "styled-components";

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
`;

const toProperCase = (lower) => {
  return lower.charAt(0).toUpperCase() + lower.substring(1);
};

function ControlButton({ name, active }) {
  return (
    <ControlButtonElem active={active}>{toProperCase(name)}</ControlButtonElem>
  );
}

export default function () {
  return (
    <Bar>
      <Logo>CryptoDash</Logo>
      <div></div>
      <ControlButton active name="dashboard" />
      <ControlButton name="settings" />
    </Bar>
  );
}
