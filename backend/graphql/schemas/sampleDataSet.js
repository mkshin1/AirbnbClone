const books = [
  {
    id: 1,
    title: "Harry Potter",
    authorId: 1,
  },
  {
    id: 2,
    title: "Pendragon",
    authorId: 2,
  },
  {
    id: 3,
    title: "Holding up the Universe",
    authorId: 3,
  },
  {
    id: 4,
    title: "Harry Potter 2",
    authorId: 1,
  },
];

const authors = [
  {
    id: 1,
    firstName: "J.K",
    lastName: "Rowling",
    books: [
      {
        id: 1,
        title: "Harry Potter",
        author: "J. K. Rowling",
      },
      {
        id: 4,
        title: "Harry Potter 2",
        author: "J.K. Rowling",
      },
    ],
  },
  {
    id: 2,
    firstName: "D.J",
    lastName: "MacHale",
    books: [
      {
        id: 2,
        title: "Pendragon",
        author: "D. J. MacHale",
      },
    ],
  },
  {
    id: 3,
    firstName: "Jennifer",
    lastName: "Niven",
    books: [
      {
        id: 3,
        title: "Holding up the Universe",
        author: "Jennifer Niven",
      },
    ],
  },
];

module.exports = { books, authors };
