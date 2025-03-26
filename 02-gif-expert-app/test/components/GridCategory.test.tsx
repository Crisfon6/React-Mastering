import { render, screen, waitFor } from '@testing-library/react';
import { GridCategory } from '../../src/components/GridCategory';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';
import { GiftSimple } from '../../src/models/Gift';
import React from 'react';
import "@testing-library/jest-dom";

jest.mock('../../src/helpers/env', () => ({
  GIPHY_API_KEY: 'TEST_API_KEY',
}));
jest.mock('../../src/hooks/useFetchGifs');

const mockedUseFetchGifs = useFetchGifs as jest.Mock;

describe('GridCategory Component', () => {
  const category = 'cats';

  test('should display loading spinner initially', () => {
    mockedUseFetchGifs.mockReturnValue({
      gifs: [],
      isLoading: true,
    });

    render(<GridCategory category={category} />);

    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    expect(screen.getByText(category.toUpperCase())).toBeInTheDocument();
  });

  test('should display gifs after loading', async () => {
    const gifs: GiftSimple[] = [
      { id: '1', title: 'Cat GIF 1', url: 'https://example.com/cat1.gif' },
      { id: '2', title: 'Cat GIF 2', url: 'https://example.com/cat2.gif' },
    ];

    mockedUseFetchGifs.mockReturnValue({
      gifs,
      isLoading: false,
    });

    render(<GridCategory category={category} />);

    await waitFor(() => {
      gifs.forEach((gif) => {        
        expect(screen.getByRole('heading', { name: gif.title })).toBeInTheDocument();
      });
    });

    expect(screen.queryByTestId('loading-spinner')).not.toBeInTheDocument();
  });

  test('should handle no gifs gracefully', () => {
    mockedUseFetchGifs.mockReturnValue({
      gifs: [],
      isLoading: false,
    });

    render(<GridCategory category={category} />);

    expect(screen.queryByTestId('loading-spinner')).not.toBeInTheDocument();
    expect(screen.getByText(category.toUpperCase())).toBeInTheDocument();
  });
});