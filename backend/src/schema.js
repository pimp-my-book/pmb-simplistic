const schema = `

"""
INPUT
"""
input defBookInput {
    Author: String!,
    Publisher: String!,
    dateAdded: String!,
    quantityOnHand: Int!,
    quantityOnOrder: Int!,
    quantityRequested: Int!,
    quantitySold: Int!,
    sellingPrice: Int!,
    costPrice: Int!,
}

"""
A hello world Query
"""
type Query {
     hello: String!
}

`

export {schema}
