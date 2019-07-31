import Gnome from './classes/gnome';
import Troll from './classes/troll';

const sam = new Troll();

/*
garden:
    id - unique id
    grid - 2D Arr
    gnome - Gnome Class extends creature
        name
        health
        lastAte
    trolls - Troll class extends creature
    plants
    pause (defaults to false)

    public:
    -start()
    -stop()
    -pause()
    -save()

    private:
    -genGnome()
    -genTroll()
    -placeNewCreature()
    -getTimeInNSeconds()

creature:

setInterval
*/


import Garden from './classes/garden';

const layout = [
  ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
  ['#', '@', '$', , '#', '$', , , , '#'],
  ['#', '#', , , '$', '$', , '$', , '#'],
  ['#', , '$', '&', '$', , , '$', , '#'],
  ['#', , '$', , , '$', , , , '#'],
  ['#', , '$', , '$', , '$', , , '#'],
  ['#', , '$', , '$', , '$', , , '#'],
  ['#', , , , , '$', , '$', , '#'],
  ['#', , '&', '$', '$', '&', , '$', , '#'],
  ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#']
];

const garden = new Garden(layout, 'garden-1');

console.log(garden);

document.getElementById('pause').addEventListener('click', function() {
  garden.pause();
});

document.getElementById('start').addEventListener('click', function() {
  garden.start();
});

document.getElementById('stop').addEventListener('click', function() {
  garden.stop();
});