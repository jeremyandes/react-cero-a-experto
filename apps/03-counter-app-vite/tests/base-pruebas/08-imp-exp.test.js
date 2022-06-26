import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe retornar un heroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(id);
        console.log(hero);

        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    })

    test('getHeroeById debe retornar undefined si no existe el ID', () => {
        const id = 100;
        const hero = getHeroeById(id);
        console.log(hero);

        expect(hero).toBeFalsy();
    })

    test('getHeroesByOwner debe retornar un arreglo de heroes de DC', () => {
        const DC = 'DC';
        const DCHeroes = getHeroesByOwner(DC);

        expect(DCHeroes.length).toBe(3);
        expect(DCHeroes).toEqual(
            [
                {
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                },
                {
                    id: 3,
                    name: 'Superman',
                    owner: 'DC'
                },
                {
                    id: 4,
                    name: 'Flash',
                    owner: 'DC'
                },
            ]
        );
    })
    test('getHeroesByOwner debe retornar un arreglo de heroes de Marvel', () => {
        const marvel = 'Marvel';
        const marvelHeroes = getHeroesByOwner(marvel);

        expect(marvelHeroes.length).toBe(2);
        expect(marvelHeroes).toEqual(
            [
                {
                    id: 2,
                    name: 'Spiderman',
                    owner: 'Marvel'
                },
                {
                    id: 5,
                    name: 'Wolverine',
                    owner: 'Marvel'
                },
            ]
        );
    })

})