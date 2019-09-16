const schema = `

"""
INPUT
"""
input defBookInput {
    author: String!,
    publisher: String!,
    dateAdded: String!,
    quantityOnHand: Int!,
    quantityOnOrder: Int!,
    quantityRequested: Int!,
    quantitySold: Int!,
    sellingPrice: Int!,
    costPrice: Int!,
}

"""
TYPE
"""
type defBook {
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
    costPrice: Int!,
}

"""
QUERY
"""
type Query {
    hello: String!,

    allBooksOutput: [defBook]
}

"""
MUTATION
"""
type Mutation {
    devAddBook(input: defBookInput): defBook
}

`

export {schema}
