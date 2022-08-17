import { getActiveUser, getUser } from "../../src/base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(testUser).toEqual(user);

    })

    test('getActiveUser debe retornar un objeto', () => {
        const name = 'Jeremy';
        const testUser = {
            uid: 'ABC567',
            username: name
        }

        const user = getActiveUser(name);

        expect(testUser).toEqual(user);
    })
})