import gql from "graphql-tag";

// GraphQL - Hello World Query
export const HELLO_WORLD = gql `
 query helloWorld {
   hello
 }`;

// GraphQL - All Books Output Query
export const ALL_BOOKS_OUTPUT = gql `
query AllBooksOutput{
    allBooksOutput{
      pk
      sk
      author
      publisher
      dateAdded
      quantityOnHand
      quantityOnOrder
      quantityRequested
      quantitySold
      sellingPrice
      costPrice
    }
  }
`;