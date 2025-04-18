import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';

describe('Tests for Heroes functions', () => {
    
    test('getHeroeById should return a hero by ID', () => {
        const id = 1;
        const hero = getHeroeById(id);
        
        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    });

    test('getHeroeById should return undefined if hero does not exist', () => {
        const id = 100; // Non-existent ID
        const hero = getHeroeById(id);
        
        expect(hero).toBe(undefined);
    });

    test('getHeroesByOwner should return DC heroes', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);
    });

    test('getHeroesByOwner should return Marvel heroes', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);
        expect(heroes).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ]);
    });
}); 