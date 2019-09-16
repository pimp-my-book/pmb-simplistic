const schema = `

"""
TYPE
"""
type Book {
    pk: String!,
    sk: String!,
    author: String!,
    publisher: String!,
    dateAdded: String!,
    quantityOnHand: Int!,
    quantityOnOrder: Int!,
    quantityRequested: Int!,
    quantitySold: Int!,
    sellingPrice: Int!,
    costPrice: Int!
}

"""
QUERY
"""
type Query {
    hello: String!,

    allBooksOutput: [Book]
}

"""
MUTATION
"""
type Mutation {
    devAddBook(input: BookInput): Book

    addBook(
        pk: String!,
        sk: String!,
        author: String!,
        publisher: String!,
        dateAdded: String!,
        quantityOnHand: Int!,
        quantityOnOrder: Int!,
        quantityRequested: Int!,
        quantitySold: Int!,
        sellingPrice: Int!,
        costPrice: Int!
    ): Book
}

`

export {schema}
