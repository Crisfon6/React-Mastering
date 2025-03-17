import { retornaArreglo, useState } from '../../src/base-pruebas/07-deses-arr';

describe('Test of desestructuration of arrays',()=>{
    test('should return an array',()=>{
        const [letters, numbers] = retornaArreglo();
        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);
        
    });
    test('should return an array',()=>{
       const [name, setName] = useState('Goku');
       expect(name).toBe('Goku');
       expect(typeof setName).toBe('function');
        
    });

});
