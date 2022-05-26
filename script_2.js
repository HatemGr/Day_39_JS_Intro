let n;
while(Number.isInteger(Number(n)) == false) {
n = prompt("De quel nombre veux-tu calculer la factorielle ?");
}
n = Number(n)

function factorielle(number) {
  if (number == 0) {
    return 1
  }
  else {
    return number * factorielle(number - 1)
  }
}

console.log(`Le résultat est : ${factorielle(n)}`);