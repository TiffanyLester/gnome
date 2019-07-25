import Gnome from './gnome';
import Troll from './troll';
import Creature from './creature';

export default class Garden {
  constructor(
    layout,
    cssId,
    id = 0,
    age = 0,
    status = 'danger',
    gnome = null,
    trolls = []
  ) {
    this.id = id;
    this.age = age;
    this.status = status;
    this.gnome = gnome;
    this.trolls = trolls;
    this.cssId = cssId;
    this.paused = true;

    if (!id) {
      // loop over layout to build grid property
      this.grid = layout;
      this.grid.forEach((row, y) =>
        row.forEach((cell, x) => {
          if (cell === '@') {
            this.gnome = new Gnome(x, y, 0);
            this.grid[y][x] = this.gnome;
          } else if (cell === '&') {
            const newTroll = new Troll(x, y);
            this.trolls.push(newTroll);
            this.grid[y][x] = newTroll;
          }
        })
      );
    }

    console.table(this.grid);
    this.render();
    this.start();
  }

  render() {
    const root = document.getElementById(this.cssId);
    root.classList.add('garden');
    this.grid.forEach((row, y) => {
      const newRow = document.createElement('div');
      row.forEach((cell, x) => {
        const newCell = document.createElement('div');
        if (cell instanceof Creature) {
          newCell.innerHTML = cell.symbol;
        } else if (cell) {
          newCell.innerHTML = cell;
        } else {
          newCell.innerHTML = '&nbsp;';
        }
        newRow.appendChild(newCell);
      });
      root.appendChild(newRow);
    });
  }

  start() {
    if (!this.paused) {
      return;
    }
    this.paused = false;
    const timer = setInterval(() => {
      if (this.paused) {
        clearInterval(timer);
      } else {
        this.age++;
        console.log(this.age);
        // executeTurn();
      }
    }, 1000);
  }

  pause() {
    this.paused = true;
  }
}
