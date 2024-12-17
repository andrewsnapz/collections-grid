import styled from "styled-components";
import { DESKTOP_SIZE, TABLET_SIZE } from "../../screenSize.ts";

export enum CollectionCardKind {
  primary = "primary",
  secondary = "secondary",
}

type CollectionCardProps = {
  name: string;
  description: string;
  imgSrc: string;
  kind: CollectionCardKind;
};

type CollectionCardBackgroundProps = {
  img: string;
};

type CollectionCardWrapperProps = {
  kind: CollectionCardKind;
};

const CollectionCardWrapper = styled.article<CollectionCardWrapperProps>`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  height: ${(props) => (props.kind === "primary" ? "580px" : "337px")};
  width: 319px;

  @media (min-width: ${TABLET_SIZE}px) {
    /* Tablet */
    height: ${(props) => (props.kind === "primary" ? "580px" : "276px")};
    width: 338px;
  }

  @media (min-width: ${DESKTOP_SIZE}px) {
    /* Desktop */
    height: ${(props) => (props.kind === "primary" ? "580px" : "276px")};
    width: 594px;
  }
`;

const CollectionCardBackground = styled.div<CollectionCardBackgroundProps>`
  position: relative;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: inherit;
  width: inherit;
`;

const CollectionCardOverlay = styled.div`
  position: relative;
  cursor: pointer;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));

  &:hover {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  }
`;

const CollectionCardName = styled.h3`
  line-height: 20px;
  letter-spacing: 0%;
  font-size: 14px;
  color: #f0f0f0;
  font-weight: normal;
`;

const CollectionCardDescription = styled.p`
  line-height: 28px;
  letter-spacing: 0%;
  font-size: 18px;
  color: #f0f0f0;
`;

export function CollectionCard({ name, description, imgSrc, kind }: CollectionCardProps) {
  return (
    <CollectionCardWrapper kind={kind}>
      <CollectionCardBackground img={imgSrc}>
        <CollectionCardOverlay>
          <CollectionCardName>{name}</CollectionCardName>
          <CollectionCardDescription>{description}</CollectionCardDescription>
        </CollectionCardOverlay>
      </CollectionCardBackground>
    </CollectionCardWrapper>
  );
}
