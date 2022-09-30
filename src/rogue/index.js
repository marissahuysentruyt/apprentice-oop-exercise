import Character from '../character';

class Rogue extends Character {
  constructor(name) {
    super(name);
    this.name = name.toLowerCase();
    this.attackNumber = 5;
  }

  talk() {
    // the Character superclass has proper grammar and an exclamation point,
    // but the rogue speaks in lowercase whispers and periods exclusively.
    const originalSpeak = super.talk().toLowerCase();
    return originalSpeak.replace('!', '.');
  }

  attack() {
  // we need to count how many times sigmund has been attacked
  // they can be attacked 4 times, during which they attack at 5X
    if (this.attackNumber > 1) {
      this.attackNumber -= 1;
      return 5;
    }
    // on the 5th time, they attack at 1X and take 5 damage points
    // we also reset this.attackNumber to 5 to start the whole loop again
    this.attackNumber = 5;
    this.health -= 5;
    return 1;
  }
}

// const sigmund = new Rogue('Sigmund');
export default Rogue;
