import { Button, Input, Stack, Typography } from "@mui/joy";

import { useNftStorage } from "@/hooks/useNftStorage";
import { useState } from "react";

export const Register = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const { storeNFT, isLoading, error } = useNftStorage();

  const register = () => {
    alert(
      "call 0x1493f6D929d7C56CbBD51Aa5EE83Fb86A41166A6 for register game(nft mint) \n and call storeNFT for upload NFT metadata(upload ipfs)"
    );
    //call 0x1493f6D929d7C56CbBD51Aa5EE83Fb86A41166A6 for register game(nft mint)
    //https://sepolia.basescan.org/address/0x1493f6d929d7c56cbbd51aa5ee83fb86a41166a6
    //and call storeNFT for upload NFT metadata(upload ipfs)
  };

  return (
    <Stack spacing={5}>
      <Stack spacing={1}>
        <Input
          variant="outlined"
          value={title}
          type="text"
          placeholder="Game title"
          onChange={(event) => setTitle(event.target.value)}
        />
        <Input
          variant="outlined"
          value={description}
          type="text"
          placeholder="Game description"
          onChange={(event) => setDescription(event.target.value)}
        />
        <Input
          variant="outlined"
          value={url}
          type="text"
          placeholder="Game url"
          onChange={(event) => setUrl(event.target.value)}
        />
        <Button onClick={register}>Register</Button>
      </Stack>
    </Stack>
  );
};
