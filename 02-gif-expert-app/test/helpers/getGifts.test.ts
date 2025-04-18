import { getGifs } from '../../src/helpers/getGifts';
import { Gift } from '../../src/models/Gift';

jest.mock('../../src/helpers/env', () => ({
  GIPHY_API_KEY: 'TEST_API_KEY',
}));

describe('getGifs', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch gifs from API and return simplified array', async () => {
    const mockApiResponse = {
      data: [
        {
          id: '1',
          title: 'Funny Cat 1',
          images: {
            downsized_medium: { url: 'https://example.com/cat1.gif' },
          },
        },
        {
          id: '2',
          title: 'Funny Cat 2',
          images: {
            downsized_medium: { url: 'https://example.com/cat2.gif' },
          },
        },
      ] as Gift[],
    };

    (global.fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockApiResponse),
    });

    const gifs = await getGifs('funny cats');

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      `https://api.giphy.com/v1/gifs/search?api_key=TEST_API_KEY&q=funny cats&limit=10`
    );

    expect(gifs).toEqual([
      { id: '1', title: 'Funny Cat 1', url: 'https://example.com/cat1.gif' },
      { id: '2', title: 'Funny Cat 2', url: 'https://example.com/cat2.gif' },
    ]);
  });

  it('should handle empty response gracefully', async () => {
    const mockApiResponse = { data: [] as Gift[] };

    (global.fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockApiResponse),
    });

    const gifs = await getGifs('funny cats');

    expect(gifs).toEqual([]);
  });
});
