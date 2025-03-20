import { CardCategory } from "./CardCategory";
import { GiftSimple } from "../models/Gift";
import { useFetchGifs } from "../hooks/useFetchGifs";

export function GridCategory({ category }: { category: string }) {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <>
      <div className="px-10">
        {isLoading && (
          <div className="flex items-center justify-center min-h-[200px]">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-500 border-solid"></div>
            <p className="ml-4 text-xl text-rose-50 font-semibold"> </p>
          </div>
        )}
        <h1 className="pt-2 text-3xl md:text-5xl lg:text-5xl font-bold  text-left text-rose-50 tracking-wide [text-shadow:_-1px_-1px_0_#a855f7,_1px_-1px_0_#a855f7,_-1px_1px_0_#a855f7,_1px_1px_0_#a855f7] py-1 px-1 transform ">
          {category.toUpperCase()}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4 cursor-pointer">
          {gifs.map((gif: GiftSimple) => (
            <CardCategory key={gif.id} gif={gif}></CardCategory>
          ))}
        </div>
      </div>
    </>
  );
}
