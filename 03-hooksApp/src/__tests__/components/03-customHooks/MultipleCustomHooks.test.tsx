import { fireEvent, render, screen } from "@testing-library/react";

import { describe, it, expect, vi, beforeEach,Mock } from "vitest";
import { MultipleCustomHooks } from "../../../03-customHooks/MultipleCustomHooks";
import { useFetch } from "../../../hooks";
import * as hooks from "../../../hooks";
import MockPokemon from "../../data/MockPokemon.json";
vi.mock('../../../hooks/useFetch');

describe('MultipleCustomHooks', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });
    it('should render the component', () => {
        (useFetch as Mock).mockReturnValue({
            data: null,
            loading: true,
            hasError: false,
            error: null
        });
        render(<MultipleCustomHooks />);        
        expect(screen.getByText('Pokemon Explorer')).toBeInTheDocument();
        expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    });
    it('should render the pokemon data', () => {
        (useFetch as Mock).mockReturnValue({
            data: MockPokemon,
            loading: false,
            hasError: false,
            error: null
        });
        render(<MultipleCustomHooks />);
        expect(screen.getByText('Pokemon Explorer')).toBeInTheDocument();
        expect(screen.getByTestId('next-pokemon-button')).toBeInTheDocument();
        expect(screen.getByTestId('previous-pokemon-button')).toBeInTheDocument();
        expect(screen.getByTestId('pokemon-number')).toHaveTextContent('#1');
        expect(screen.getByTestId('pokemon-image')).toHaveAttribute('src', MockPokemon.sprites.other.dream_world.front_default);    
    });
    it('should increment the pokemon number', () => {
        (useFetch as Mock).mockReturnValue({
            data: MockPokemon,
            loading: false,
            hasError: false,
            error: null
        });
        render(<MultipleCustomHooks />);
        fireEvent.click(screen.getByTestId('next-pokemon-button'));
        expect(screen.getByTestId('pokemon-number')).toHaveTextContent('#2');
    });
    it('should decrement the pokemon number', () => {
        (useFetch as Mock).mockReturnValue({
            data: MockPokemon,
            loading: false,
            hasError: false,
            error: null
        });
        render(<MultipleCustomHooks />);
        fireEvent.click(screen.getByTestId('next-pokemon-button'));
        fireEvent.click(screen.getByTestId('previous-pokemon-button'));
        expect(screen.getByTestId('pokemon-number')).toHaveTextContent('#1');
    });
    it('should call the function increment from useCounter', () => {
        const increment = vi.fn();
        vi.spyOn(hooks, 'useCounter').mockReturnValue({
            counter: 1,
            increment,
            decrement: vi.fn(),
            reset: vi.fn()
        });
        render(<MultipleCustomHooks />);
        fireEvent.click(screen.getByTestId('next-pokemon-button'));
        expect(increment).toHaveBeenCalled();
    });
    it('should call the function decrement from useCounter', () => {
        const decrement = vi.fn();
        const increment = vi.fn();
        vi.spyOn(hooks, 'useCounter').mockReturnValue({
            counter: 2,
            increment,
            decrement,
            reset: vi.fn()
        });
        render(<MultipleCustomHooks />);
        fireEvent.click(screen.getByTestId('next-pokemon-button'));
        fireEvent.click(screen.getByTestId('previous-pokemon-button'));
        expect(increment).toHaveBeenCalled();
        expect(decrement).toHaveBeenCalled();
    });
}); 