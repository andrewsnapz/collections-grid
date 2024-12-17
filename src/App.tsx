import styled from "styled-components";
import GlobalStyle from "./globalStyles.ts";
import { Grid, PrimaryGridRow, SecondaryGridRow } from "./components/layout/grid/index.ts";
import { PageLayout } from "./components/layout/page-layout/index.ts";
import { CollectionCard, CollectionCardKind } from "./components/card/index.ts";
import collections from "../data/collections.json";

const CollectionsTitle = styled.h2`
  font-weight: 600;
  letter-spacing: 0;
  font-size: 1.875rem;
  margin-bottom: 2rem;
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <PageLayout>
        <CollectionsTitle>Our Collections</CollectionsTitle>
        <Grid>
          <PrimaryGridRow>
            <CollectionCard
              kind={CollectionCardKind.primary}
              name={collections[0].name}
              description={collections[0].description}
              imgSrc={collections[0].image_url}
            />
          </PrimaryGridRow>
          <SecondaryGridRow>
            <CollectionCard
              kind={CollectionCardKind.secondary}
              name={collections[1].name}
              description={collections[1].description}
              imgSrc={collections[1].image_url}
            />
          </SecondaryGridRow>
          <SecondaryGridRow>
            <CollectionCard
              kind={CollectionCardKind.secondary}
              name={collections[2].name}
              description={collections[2].description}
              imgSrc={collections[2].image_url}
            />
          </SecondaryGridRow>
        </Grid>
      </PageLayout>
    </>
  );
}
