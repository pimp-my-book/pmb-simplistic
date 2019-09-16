import { hello } from "./query";
import { devAddBook } from "./mutation";

export const resolvers = {
    Query: {
        hello: (root, args, context) => hello(args, context)
    }
}
