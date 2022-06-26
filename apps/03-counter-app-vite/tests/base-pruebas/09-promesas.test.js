import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas"

describe('Pruebas en 09-promesas', () => {

    test('getHeroeByIdAsync debe retornar un heroe luego de un tiempo', (done) => {
        const id = 1;

        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                done();
            })
    })

    test('getHeroeByIdAsync debe retornar false si no encuentra un héroe', (done) => {
        const id = 100;

        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe(`No se pudo encontrar el heroe con el id ${id}`);
                done();
            })
    })

})