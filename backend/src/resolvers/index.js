import { hello } from "./query";
import { addBook } from "./mutation";

export const resolvers = {
    Query: {
        hello: (root, args, context) => hello(args, context)
    },
    Mutation: {
        devAddBook: (root, {input:args}, context) => devAddBook({input:args}, context)
    }
}
