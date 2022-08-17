export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

const nombre = 'Jeremy';

console.log(`Este es un texto: ${getSaludo(nombre)}  `);