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

tryPlant(){
  if(genRandNum(1, 4) === 1){
    this.planted++;
    return true;
  }
  return false;
}

getTargets(grid) {
  const targets [];
  for(let rowMod = -1; rowMod <= 1; rowMod++){
    for(let cellMod = -1; cellMod <= 1; cellMod++){
      if(!(rowMod === 0 && cellMod === 0){
        continue; 
      } else if(this.isInGarden(
        this.coords.x + cellMod,
        this.coords.y + rowMod,
        grid[0].length,
        grid.length
        ) && 
        grid[this.coords.y + rowMod] [this.coords.x + cllMod] !== '#'
        )
    }
  }
  targets.push(
    new Coords(this.coords(this.coords.x - 1,
    )))
}
}