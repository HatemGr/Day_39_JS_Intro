while(true){
phrase = prompt("Parle moi donc...");

if (phrase == null) {
  response = 'Azy moi aussi je bouge';
  break;
}
else if (phrase.length == 0) {
  response = 't\'est en PLS ?';
}
else if(phrase.slice(-1) == '?') {
  response = "Ouais Ouais";
}

else if (phrase == phrase.toUpperCase() && phrase.length != 0) {
  response = "Pwa, calme-toi...";
}
else if (phrase.includes("Fortnite")) {
  response = "on s' fait une partie soum-soum ?";
}

else {
  response = 'balek';
}
console.log(response);
break;
}
console.log(response);