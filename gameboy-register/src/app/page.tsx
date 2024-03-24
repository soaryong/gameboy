"use client";

import { Card, Container, Stack, Typography } from "@mui/joy";

import { Account } from "@/components/Account";
import { Description } from "@/components/Description";
import { Register } from "@/components/Register";

function App() {
  return (
    <Container>
      <Card sx={{ m: 5 }}>
        <Stack spacing={3}>
          <Stack direction="row" justifyContent="space-between">
            <Typography level="h1">Gameboy register</Typography>
            <Account />
          </Stack>
          <Description />
          <Register />
        </Stack>
      </Card>
    </Container>
  );
}

export default App;
