import Coords from './coordinates';

export default class Creature {
  constructor(x, y, hunger = 0, maxHunger = 20) {
    this.coords = new Coords(x, y);
    this.hunger = hunger;
    this.maxHunger = maxHunger;
  }
}
