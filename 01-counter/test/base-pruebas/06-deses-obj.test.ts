import { usContext } from '../../src/base-pruebas/06-deses-obj';

describe('Test of desestructuration of objects',()=>{
    test('should return an object',()=>{
        const userContext = usContext({
            clave: 'Ironman',
            edad: 45
        });
        expect(userContext).toStrictEqual({
            nombreClave: 'Ironman',
            anios: 45,
            latlng: {
                lat: 14.1232,
                lng: -12.3232

            }
        });
    })
});
