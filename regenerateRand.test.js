const regenerateRand = require('./regenerateRand');
const randNum = (Math.random() * (20 - 9) + 9);
const outScopeNum = 30;


test('random number given is within scope', () => {
    expect(randNum).toBeGreaterThanOrEqual(9);
    expect(randNum).toBeLessThanOrEqual(20);
});

test('newly generated random number given is between 0 and 100', () => {
    expect(regenerateRand(randNum)).toBeGreaterThanOrEqual(1);
    expect(regenerateRand(randNum)).toBeLessThanOrEqual(100);
});

test('return error message for out of scope number', () => {
    expect(regenerateRand(outScopeNum)).toBe("Random Number Out of Scope");
});