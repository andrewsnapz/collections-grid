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
  height: 100vh;
  /* Mobile */
  padding-inline-start: 16px;
  padding-inline-end: 16px;

  @media (min-width: ${TABLET_SIZE}px) {
    /* Tablet */
    padding-inline-start: 32px;
    padding-inline-end: 32px;
  }

  @media (min-width: ${DESKTOP_SIZE}px) {
    /* Desktop */
    padding-inline-start: 32px;
    padding-inline-end: 32px;
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
