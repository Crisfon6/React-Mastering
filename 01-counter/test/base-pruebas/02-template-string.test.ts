import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Test of template string',()=>{
    test('should return a greeting with the name',()=>{
        const name = 'Cristhian';
      
        const result =  getSaludo(name);
        expect(result).toBe(`Hola ${name}`);
    })
});
