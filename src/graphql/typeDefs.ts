import { readFileSync } from "fs";

// TODO: Extract into separate schema files by default and create a simple way
// to collect them together so that this file does not need to be edited
const typeDefs = `#graphql
    type Book {
        title: String
        author: String
    }

    type Query {
        books: [Book]
    }
`

export default typeDefs
