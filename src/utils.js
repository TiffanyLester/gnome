export { getRandElem, genRandNum };

function getRandElem(arr) {
  return arr[genRandNum(0, arr.length - 1)];
}

function genRandNum(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}
