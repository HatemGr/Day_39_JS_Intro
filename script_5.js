const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
answer = "yes"
books.forEach(book => book.rented == 0 ? answer = 'no': book);
console.log(answer);

console.log("Quel est livre le plus emprunté ?");
let max_rented_book = books.reduce((max,book) => book.rented > max.rented ? book : max, books[0]);
console.log(max_rented_book);

console.log("Quel est livre le moinsemprunté ?");
let min_rented_book = books.reduce((min,book) => book.rented < min.rented ? book : min, books[0]);
console.log(min_rented_book);

console.log("Quel est livre a l'ID 873495?");
let book_ID873495 = books.find(book => book.id = 873495)
console.log(book_ID873495)

console.log("Suppression du livre ID 133712?");
let ID_133712_index = books.find(book => book.id = 133712)
books.splice(ID_133712_index,1)
console.log(books)

console.log("Tri par ordre alphabetique des livres restants?");
let books_ord = books.sort((a,b) => {
  if(a.title > b.title) return 1;
  if(b.title > a.title) return -1;
  return 0;
})
console.log(books_ord)