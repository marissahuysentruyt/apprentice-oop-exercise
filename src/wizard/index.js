import Character from '../character';

class Wizard extends Character {
  constructor(name, health) {
    super(name, health);
    this.name = name.toUpperCase();
    this.spellActive = 0;
    this.spellTriggered = false;
  }

  talk() {
    return super.talk().toUpperCase();
  }

  attack() {
  // we need to count how many times merlin has been attacked.
  // after being attacked once, he casts a spell to prevent the next 3 attacks
    if (this.spellTriggered === false) {
      this.spellTriggered = true;
      this.spellActive = 3;
      return 2;
    }
    // for those next 3 turns, take no damage, AND attacks at 2x
    if (this.spellTriggered === true && this.spellActive > 1) {
      // as long as spellActive is >0, return 2
      // if (this.spellActive > 0) {
      this.spellActive -= 1; // turn 2, turn 1, turn 0
      return 2;
    }
    // after the spell fades, merlin takes 10 damage on the next time he's attacked,
    this.health -= 10;
    return 1;
    // his own attacks go back to default attack value
  }
}
// }

// const merlin = new Wizard('Merlin');
export default Wizard;
