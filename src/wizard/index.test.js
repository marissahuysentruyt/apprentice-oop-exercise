import Wizard from '.';

describe('Wizard', () => {
  describe('#talk', () => {
    it('loudly greets you and proclaims their name', () => {
      const character = new Wizard('Balthazar');
      expect(character.talk()).toBe('HELLO! MY NAME IS BALTHAZAR.');
    });
  });

  describe('#attack', () => {
    describe('when under protection spell', () => {
      it('does not take damage', () => {
        const character = new Wizard('Balthazar');
        character.attack();
        character.attack();
        character.attack();
        expect(character.health).toBe(50);
      });

      it('returns double the standard damage', () => {
        const character = new Wizard('Balthazar');
        const counterDamage = character.attack();
        expect(counterDamage).toBe(2);
      });
    });

    describe('when not under protection spell', () => {
      it('takes 10 points damage', () => {
        const character = new Wizard('Balthazar');
        character.attack();
        character.attack();
        character.attack();
        character.attack();
        expect(character.health).toBe(40);
      });

      it('returns 1 point damage when attacked', () => {
        const character = new Wizard('Balthazar');
        character.attack();
        character.attack();
        character.attack();
        character.attack();
        const counterDamage = character.attack();
        expect(counterDamage).toBe(1);
      });
    });
  });
});
