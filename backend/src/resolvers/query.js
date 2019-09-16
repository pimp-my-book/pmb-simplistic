import * as dynamodbLib from "../../resources/libs/dynamodb-lib";

export const hello = (args, context) => {
    return "Your GraphQL API is now LIVE!🎈 "
}

export const allBooksOutput = async (args, context) => {
    const params = {
        TableName: process.env.SimplisticTable
    }
    try {
        const result = await dynamodbLib.call("scan", params);
        return result.Items
    }
    catch (e) {
        console.log(e)
    }
} 