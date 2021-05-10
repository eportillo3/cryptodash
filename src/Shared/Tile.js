import styled from "styled-components";
import { subtleBoxShadow, lightGreyBackground, greenBoxShadow } from "./Styles";

export const Tile = styled.div`
  ${subtleBoxShadow};
  ${lightGreyBackground};
  padding: 10px;
`;

export const SelectableTile = styled(Tile)`
  &:hover {
    cursor: pointer;
    ${greenBoxShadow}
  }
`;
