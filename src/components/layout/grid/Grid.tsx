import styled from "styled-components";
import { type ElementType, type ReactNode, type ComponentPropsWithoutRef } from "react";
import { DESKTOP_SIZE, TABLET_SIZE } from "../../../screenSize.ts";

type GridProps = {
  as?: ElementType;
  children: ReactNode;
} & ComponentPropsWithoutRef<ElementType>;

const GridColumnWrapper = styled.div`
  /* Mobile */
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);

  @media (min-width: ${TABLET_SIZE}px) {
    /* Tablet */
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${DESKTOP_SIZE}px) {
    /* Desktop */
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const PrimaryGridRow = styled.div`
  grid-row: span 2;
`;

export const SecondaryGridRow = styled.div`
  grid-row: span 1;
`;

export function Grid(props: GridProps) {
  return <GridColumnWrapper {...props} />;
}
