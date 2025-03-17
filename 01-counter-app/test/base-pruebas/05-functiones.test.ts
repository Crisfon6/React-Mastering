import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Test of functions',()=>{
    test('getUser TEST',()=>{
        const testUser = getUser({});
        expect(testUser).toEqual({
            uid: 'ABC123',
            username: 'El_Papi1502'
        });
    });
    test('getUsuarioActivo TEST',()=>{
        const name = 'Cristhian';
        const result = getUsuarioActivo(name);
        expect(result).toStrictEqual({
            uid: 'ABC567',
            username: name
        });
    });
});
