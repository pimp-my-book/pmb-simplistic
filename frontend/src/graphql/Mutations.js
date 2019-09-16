import gql from 'graphql-tag';

// GraphQL - Add Book Mutation
export const ADD_BOOK = gql `
mutation AddBookMutation (
    $pk: String!,
    $sk: String!,
    $author: String!,
    $publisher: String!,
    $dateAdded: String!,
    $quantityOnHand: Int!,
    $quantityOnOrder: Int!,
    $quantityRequested: Int!,
    $quantitySold: Int!,
    $sellingPrice: Int!,
    $costPrice: Int!
){
    addBook(
        pk: $pk,
        sk: $sk,
        author: $author,
        publisher: $publisher,
        dateAdded: $dateAdded,
        quantityOnHand: $quantityOnHand,
        quantityOnOrder: $quantityOnOrder,
        quantityRequested: $quantityRequested,
        quantitySold: $quantitySold,
        sellingPrice: $sellingPrice,
        costPrice: $costPrice
    )   {
            pk
        }
    }
`;