import * as dynamodbLib from "../../resources/libs/dynamodb-lib";

export const devAddBook = async ({ input:args }, context) => {
    const params = {
        TableName: process.env.SimplisticTable,
        Item: {
            pk: args.pk,
            sk: args.sk,
            author: args.author,
            publisher: args.publisher,
            dateAdded: args.dateAdded,
            quantityOnHand: args.quantityOnHand,
            quantityOnOrder: args.quantityOnOrder,
            quantityRequested: args.quantityRequested,
            quantitySold: args.quantitySold,
            sellingPrice: args.sellingPrice,
            costPrice: args.costPrice
        }
    }
    try {
        await dynamodbLib.call("put", params);
        return {
            pk: args.pk,
            sk: args.sk,
            author: args.author,
            publisher: args.publisher,
            dateAdded: args.dateAdded,
            quantityOnHand: args.quantityOnHand,
            quantityOnOrder: args.quantityOnOrder,
            quantityRequested: args.quantityRequested,
            quantitySold: args.quantitySold,
            sellingPrice: args.sellingPrice,
            costPrice: args.costPrice
        }
    }
    catch (e) {
        console.log(e)
    }
}
