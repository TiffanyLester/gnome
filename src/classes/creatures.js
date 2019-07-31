import Coords from './coordinates';

export default class Creature {
  constructor(x, y, hunger = 0, maxHunger = 20) {
    this.coords = new Coords(x, y);
    this.hunger = hunger;
    this.maxHunger = maxHunger;
  }
}

getMove () {
  const potentialMoves = this.getTargets(grid);
  if (possibleMoves.length){  
    return getRandElem(potentialMoves);
} else {
  return this.coords;
}

getTargets(grid) {
  //get all adjacent squares that arent impassible terrian*/
  const targets [];
  for(let rowMod = -1; rowMod <= 1; rowMod++){
    for(let cellMod = -1; cellMod <= 1; cellMod++){
      conts newX = this.coords.x;
      const newY = this.coords.y;
      if(!(rowMod === 0 && cellMod === 0){
        continue; 
      } else if(
        this.isInGarden(
        newX + cellMod,
        newY + rowMod,
        grid[0].length,
        grid.length
        ) && 
        grid[newY + rowMod] [newX + cllMod] !== '#'
        )
    }
  }
    targets.push(
      new Coords(this.coords(newX, newY
      )))
  }
}

updateLocation(coords) {
  this.coords = coords;
}

resetHunger () {
  this.hunger =0;
}

isStarved () {
  return this.hunger > this.maxHunger;
  }
}

isInGarden(x,y, xLength, yLength){
  return x >= 0 && y >= 0 && x < xLength && y < yLength;
}

canMoveCoords (x, y, grid){
  return grid[y] [x] !== '#' && !(grid)[x] [y]
}