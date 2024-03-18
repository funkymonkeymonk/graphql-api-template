const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];

import { Resolvers } from './__generated__/graphql.js';

const resolvers: Resolvers = {
  Query: {
    books: () => books,
  },
};

export default resolvers;