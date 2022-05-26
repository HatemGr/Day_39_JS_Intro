const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Ceux nés  dans les années 70
console.log("Quels entrepreneurs sont nés dans les années 70 ?");
let ent_70 = entrepreneurs.filter(function(x) { return x.year >= 1970 && x.year < 1980;});
console.log(ent_70);

// Array des prenoms et noms
console.log("Quel est le prenom et nom des entrepreneurs ?");
let ent_name = entrepreneurs.map(x => x.first + ' ' + x.last);
console.log(ent_name);

// L'age de chaque entrepreneur aujourd'hui
console.log("Quel age auraient les entrepreneurs aujourd'hui ?");
let ent_age = entrepreneurs.map(x => x.first + ' ' + x.last + ` aurait ${2022 - x.year} ans aujourd'hui.`);
console.log(ent_age);

// Entrepreneur par ordre alphabetique de nom de famille
console.log("A quoi ressemble la liste des entrepreneurs par ordre alpha de nom de famille");
let ent_fname = entrepreneurs.sort((a,b) => {
  if(a.last > b.last) return 1;
  if(b.last > a.last) return -1;
  return 0;
  });
let ent_fname_2 = entrepreneurs.sort((a, b) => a.last.localeCompare(b.last));

console.log(ent_fname_2);