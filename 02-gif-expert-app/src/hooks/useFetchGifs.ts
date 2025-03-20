import { useEffect, useState } from "react";
import { GiftSimple } from "../models/Gift";
import { getGifs } from "../helpers/getGifts";

export function useFetchGifs(category: string) {
  const [gifs, setGifs] = useState<GiftSimple[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getGifs(category).then(setGifs);
    setIsLoading(false);
  }, []);
  return {
    gifs,
    isLoading
  };
}
