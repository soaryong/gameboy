import { Button, Divider, Input, Stack, Table, Typography } from "@mui/joy";

import { useState } from "react";

export const Description = () => {
  const [count, setCount] = useState(1);

  return (
    <Stack spacing={5}>
      <Stack spacing={1}>
        <Typography level="title-lg">Web3 Gameboy 🎮</Typography>
        <Typography level="body-md">
          Dynamic Boy is a platform where users can upload games, check ranking
          information, and share on social media, fostering interaction and
          competition within the gaming community.
        </Typography>
      </Stack>
    </Stack>
  );
};
