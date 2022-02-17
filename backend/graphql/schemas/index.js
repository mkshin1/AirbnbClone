const { ApolloServer, gql } = require("apollo-server");
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.

const { books, authors } = require("./sampleDataSet.js");

const typeDefs = gql`
  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    books: [Book!]!
  }
  type Book {
    id: ID!
    title: String!
    author: Author
  }

  type Query {
    authors: [Author!]!
    books: [Book!]!
    book(id: ID!): Book!
  }
  type Mutation {
    changeBookTitle(id: ID!, title: String!): Book!
  }
`;

const resolvers = {
  Query: {
    authors() {
      return authors;
    },
    books() {
      return books;
    },
    book(parent, args) {
      // console.log(args);
      return books.find((book) => book.id == args.id);
    },
  },
  Book: {
    author(parent, args) {
      // console.log(parent);
      // console.log(args);
      return authors.find((author) => author.id == parent.authorId);
      // parent resolvers are in every type.
      // chain resolvers
      // args are variables that are passed
    },
  },
  Mutation: {
    changeBookTitle(parent, args) {
      console.log(args, "*****");
      console.log(parent, "********");
      const book = books.find((book) => book.id == args.id);
      book.title = args.title;
      return book;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
