import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //1124px
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show when={window.screen.width >= 1124}>
        <GridItem area="aside" bg="yellow">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
