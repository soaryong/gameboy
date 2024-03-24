import { Card, Grid, Typography } from "@mui/joy";

import { useRouter } from "next/navigation";

export const Game = () => {
  const router = useRouter();
  return (
    <Grid xs={3} md={3}>
      <Card>
        <Typography>Clumsy Bird</Typography>
        <Typography>Bird Jump!!!</Typography>
      </Card>
    </Grid>
  );
};
