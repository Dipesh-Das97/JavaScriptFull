const closure = require('./closure');

test('exhibits closure', () => {
    expect(closure(15)).toBe(150);
});