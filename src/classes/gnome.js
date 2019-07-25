import Creature from './creature';
import { genRandNum } from '../utils';

export default class Gnome extends Creature {
  constructor(x, y, hunger, name = 'Eustice', health = null, planted = 0) {
    super(x, y, hunger, 10);
    this.name = name;
    this.health = health;
    this.planted = planted;
    this.symbol = '@';

    if (this.health === null) {
      this.health = genRandNum(3, 5);
    }
  }
}
