import styled from "styled-components";
import { type ReactNode } from "react";
import { TABLET_SIZE, DESKTOP_SIZE } from "../../../screenSize.ts";

type PageLayout = {
  children: ReactNode;
};

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* Mobile */
  padding-block: 64px;
  padding-inline: 28px;

  @media (min-width: ${TABLET_SIZE}px) {
    /* Tablet */
    padding-block: 64px;
    padding-inline: 32px;
  }

  @media (min-width: ${DESKTOP_SIZE}px) {
    /* Desktop */
    padding-block: 96px;
    padding-inline: 32px;
  }
`;

const MainWrapper = styled.main`
  max-width: 100%;

  @media (min-width: ${TABLET_SIZE}px) {
    /* Tablet */
    max-width: 100%;
  }

  @media (min-width: ${DESKTOP_SIZE}px) {
    /* Desktop */
    max-width: 1280px;
  }
`;
export default function PageLayout({ children }: PageLayout) {
  return (
    <PageWrapper>
      <MainWrapper>{children}</MainWrapper>
    </PageWrapper>
  );
}
