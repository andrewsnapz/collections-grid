import GlobalStyle from "./globalStyles.ts";
import { Grid, PrimaryGridRow } from "./components/layout/grid/index.ts";
import { PageLayout } from "./components/layout/pageLayout/index.ts";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <PageLayout>
        <Grid>
          <PrimaryGridRow>
            <div style={{ width: 319, height: "100%", border: "solid" }}>Primary Card</div>
          </PrimaryGridRow>
          <div style={{ width: 319, height: 337, border: "solid" }}>Card 2</div>
          <div style={{ width: 319, height: 337, border: "solid" }}>Card 3</div>
        </Grid>
      </PageLayout>
    </>
  );
}
