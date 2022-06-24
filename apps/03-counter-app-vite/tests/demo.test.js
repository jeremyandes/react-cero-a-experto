test('should not fail', () => {
    if (1 === 0) {
        throw new Error('No puede ser 0');
    }
})