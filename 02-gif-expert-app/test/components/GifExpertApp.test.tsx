import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../../src/GifExpertApp';
import React from 'react';

jest.mock('../../src/helpers/env', () => ({
  GIPHY_API_KEY: 'TEST_API_KEY',
}));

describe("GifExpertApp", () => {
    test("should render the component", () => {
        render(<GifExpertApp />);
        expect(screen.getByText("GiftSearch")).toBeInTheDocument();
    });
});