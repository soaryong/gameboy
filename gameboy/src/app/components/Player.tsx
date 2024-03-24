"use client";

import {
  Button,
  Card,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/joy";

import { Description } from "@/app/components/Description";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
import { Games } from "@/app/components/Games";
import { NextPage } from "next";
import { useParams } from "next/navigation";

export const Player = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid md={9}>
          <iframe
            width="100%"
            height="500"
            src="https://soaryong.github.io/clumsy-bird/"
          />
        </Grid>
        <Grid md={3}>
          <Stack spacing={1}>
            <Typography level="h3">Clumsy Bird</Typography>
            <Typography level="h3">Highscore</Typography>
            <Typography>[Rank 1] 0x000....000</Typography>
            <Typography>[Rank 2] 0x000....000</Typography>
            <Typography>[Rank 3] 0x000....000</Typography>
            <Button>Share Twitter</Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};
