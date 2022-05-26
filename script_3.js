let n;
while(Number.isInteger(Number(n)) == false) {
n = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
}
n = Number(n);

function makefloor(floor,maxfloor) {
  let line = "";
  for(let count = 1 ; count <= (maxfloor - floor); count ++){
    line += ' ';
  }
  for(let count = maxfloor - floor; count < maxfloor; count ++){
    line += '#';
  }
  return line
}

function makepyramid(maxfloor) {
  for(let floor = 1; floor <= maxfloor; floor ++) {
    console.log(makefloor(floor,maxfloor))
  }
}

makepyramid(n);