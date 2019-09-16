const schema = `

"""
INPUT
"""
input BookInput {
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
TYPE
"""
type Book {
    pk: Int!,
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
    devAddBook(input: defBookInput): defBook

    addBook(
        author: String!,
        publisher: String!,
        dateAdded: String!,
        quantityOnHand: Int!,
        quantityOnOrder: Int!,
        quantityRequested: Int!,
        quantitySold: Int!,
        sellingPrice: Int!,
        costPrice: Int!,
    ): defBook
}

`

export {schema}
