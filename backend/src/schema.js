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
A hello world Query
"""
type Query {
     hello: String!
}

"""
TYPE
"""
type defBook {
    pk: Int!
    sk: String!
    Author: String!
    Publisher: String!
    dateAdded: String!
    quantityOnHand: Int!
    quantityOnOrder: Int!
    quantityRequested: Int!
    quantitySold: Int!
    sellingPrice: Int!
    costPrice: Int!
}

"""
QUERY
"""


"""
MUTATION
"""

`

export {schema}
