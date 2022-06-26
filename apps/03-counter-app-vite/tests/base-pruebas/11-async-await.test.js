import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await', () => {

    test('getImagen debe retornar la URL de una imagen de Giphy', async () => {

        const url = await getImagen();
        console.log(url);
        expect(typeof url).toBe('string');

    })

})