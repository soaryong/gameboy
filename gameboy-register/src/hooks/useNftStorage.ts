import { NFTStorage } from "nft.storage";
import mime from "mime";
import { useState } from "react";

export function useNftStorage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function storeNFT(file: File, name: string, description: string) {
    try {
      setIsLoading(true);
      setError(null);

      if (!(file instanceof File)) {
        throw new Error("The file must be a File object.");
      }

      const fileType = mime.getType(file.name) || "";
      const nftFile = new File([file], file.name, { type: fileType });

      // Create a new NFTStorage client
      const nftstorage = new NFTStorage({
        token: process.env.NFT_STORAGE_API_KEY ?? "",
      });

      // Store the NFT
      const result = await nftstorage.store({
        image: nftFile,
        name,
        description,
      });

      return result;
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return { storeNFT, isLoading, error };
}
