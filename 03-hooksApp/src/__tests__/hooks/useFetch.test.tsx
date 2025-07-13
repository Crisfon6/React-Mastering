import { renderHook, waitFor } from "@testing-library/react";
import { useFetch, __localCache } from "../../hooks/useFetch";
import { describe, it, expect, vi, beforeEach } from "vitest";

describe("useFetch", () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const mockData = { id: 1, title: "Test Post" };

  beforeEach(() => {
    vi.clearAllMocks();
    // Clear the cache before each test
    Object.keys(__localCache).forEach((key) => {
      delete __localCache[key];
    });
  });

  it("should return the initial state", () => {
    const { result } = renderHook(() => useFetch(url));
    const { data, loading, hasError, error } = result.current;

    expect(data).toBeNull();
    expect(loading).toBe(true);
    expect(hasError).toBe(false);
    expect(error).toBeNull();
  });

  it("should fetch data successfully", async () => {
    const mockFetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    window.fetch = mockFetch;

    const { result } = renderHook(() => useFetch(url));

    // Initial state
    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBeNull();

    // Wait for the fetch to complete
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    // Final state
    expect(result.current.data).toBeDefined();
    expect(result.current.hasError).toBe(false);
    expect(result.current.error).toBeNull();
    expect(mockFetch).toHaveBeenCalledWith(url);
  });

  it("should handle fetch errors", async () => {
    const errorMessage = "Network error";
    const mockFetch = vi.fn().mockRejectedValueOnce(new Error(errorMessage));
    window.fetch = mockFetch;

    const { result } = renderHook(() => useFetch(url));
    // Initial state
    expect(result.current.loading).toBe(true);

    // Wait for the fetch to complete
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    // Error state
    expect(result.current.data).toBeNull();
    expect(result.current.hasError).toBe(true);
    expect(result.current.error).toBe(errorMessage);
  });

  it('should handle HTTP errors', async () => {
      const mockFetch = vi.fn().mockResolvedValueOnce({
          ok: false,
          status: 404
      });
      window.fetch = mockFetch;

      const { result } = renderHook(() => useFetch(url));

      await waitFor(() => {
          expect(result.current.loading).toBe(false);
      });

      expect(result.current.data).toBeNull();
      expect(result.current.hasError).toBe(true);
      expect(result.current.error).toBe('HTTP error! status: 404');
  });

  it('should use cached data when available', async () => {
      // First fetch to populate cache
      const mockFetch = vi.fn().mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(mockData)
      });
      window.fetch = mockFetch;

      const { result: firstResult } = renderHook(() => useFetch(url));
      await waitFor(() => {
          expect(firstResult.current.loading).toBe(false);
      });
    
      // Second fetch should use cache
      const { result: secondResult } = renderHook(() => useFetch(url));

      // Should immediately have data from cache
      expect(secondResult.current.loading).toBe(false);
      expect(secondResult.current.data).toBeDefined();      
      expect(mockFetch).toHaveBeenCalledTimes(1); // fetch should only be called once
  });
});
