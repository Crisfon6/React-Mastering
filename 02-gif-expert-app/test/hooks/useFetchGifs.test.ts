import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
import { getGifs } from "../../src/helpers/getGifts";
// Mock getGifs function
jest.mock("../../src/helpers/getGifts", () => ({
  getGifs: jest.fn(),
}));

describe("useFetchGifs Hook", () => {
 
  /* test("should return initial state", () => {
    const fakeGifs = [ ];

    (getGifs as jest.Mock).mockResolvedValue(fakeGifs);

    const { result } = renderHook(() => useFetchGifs("cats"));
    const {gifs, isLoading} = result.current;
    expect(gifs.length).toBe(0);
    expect(isLoading).toBeTruthy();
    
  }); */

  test("should fetch and return gifs", async () => {
    const fakeGifs = [
      { id: "1", title: "Cat GIF", url: "https://fakeurl.com/cat.gif" },
      { id: "2", title: "Dog GIF", url: "https://fakeurl.com/dog.gif" },
    ];

    (getGifs as jest.Mock).mockResolvedValue(fakeGifs);

    const { result } = renderHook(() => useFetchGifs("cats"));

    await waitFor(
      () => expect(result.current.gifs.length).toBeGreaterThan(0),      
    );
  console.log(result);
   /*  expect(result.current.gifs).toEqual(fakeGifs);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.gifs.length).toBe(2); */
  });
});
