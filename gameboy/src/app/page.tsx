"use client";

import { Container, Stack, Typography } from "@mui/joy";

import { Description } from "@/app/components/Description";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
import { Games } from "@/app/components/Games";
import { Player } from "./components/Player";

function App() {
  return (
    <Container sx={{ m: 5 }}>
      <Stack spacing={3}>
        <Stack direction="row" justifyContent="space-between">
          <Typography level="h1">DynamicBoy 🎮</Typography>
          <DynamicWidget />
        </Stack>
        <Description />
        <Games />
        <Player />
      </Stack>
    </Container>
  );
}

export default App;
