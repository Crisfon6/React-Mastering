import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';
describe('Test of promises',()=>{
    test('getHeroeByIdAsync should return a hero',(done)=>{
        const id = 1;
        getHeroeByIdAsync(id).then((heroe)=>{
            expect(heroe).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            })
            done();
        });

    })
    test('getHeroeByIdAsync should return an error if hero does not exist',(done)=>{
        const id = 100;
        getHeroeByIdAsync(id)
        .catch((error)=>{
            expect(error).toBe('No se pudo encontrar el héroe with id: ' + id);
            done();
        })
    })
})