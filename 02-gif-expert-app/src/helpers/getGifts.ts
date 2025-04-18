import { Gift, GiftSimple } from "../models/Gift";
import { GIPHY_API_KEY } from "./env";

export const getGifs = async (category:string, ) : Promise<GiftSimple[]> =>{
    const apiKey = GIPHY_API_KEY;
    const limit = 10;
    const url =     `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=${limit}`
    const response = await fetch(url);
    const { data }: { data: Gift[] } = await response.json();
    const giftsSimple: GiftSimple[] = data.map((gift:Gift)=>({
        id: gift.id,
        title: gift.title,
        url: gift.images.downsized_medium.url
    }));
    return giftsSimple;
}