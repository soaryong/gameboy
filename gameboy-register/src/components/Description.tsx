import { Stack, Typography } from "@mui/joy";

export const Description = () => {
  return (
    <Stack spacing={5}>
      <Stack spacing={1}>
        <Typography level="title-lg">Gameboy register game page</Typography>
        <Typography level="body-md">
          Register your game with Gameboy and share in the profits earned from
          Gameboy. By integrating your minigame with Gameboy through a simple
          connection, you can create an excellent experience featuring rankings,
          authentication, and blockchain technology.
        </Typography>
      </Stack>
    </Stack>
  );
};
