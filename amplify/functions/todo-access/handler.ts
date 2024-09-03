import type { APIGatewayProxyHandler } from "aws-lambda";
import { env } from '$amplify/env/todo-access';

export const handler: APIGatewayProxyHandler = async (event) => {
  console.log("event", event);
  const query = `
    query MyQuery {
      listTodos {
        items {
          content
          createdAt
          id
          updatedAt
        }
      }
    }
`;  

  const graphqlQuery = {
    "operationName": "MyQuery",
    "query": query,
    "variables": {}
  };

  const options = {
    "method": "POST",
    "headers": {
      "x-api-key": env.APIKEY,
      "Content-Type": "application/json"
    },
    "body": JSON.stringify(graphqlQuery)
  };
  const response = await fetch(env.APIURL, options);
  const res = await response.json();
  return {
    statusCode: 200,
    // Modify the CORS settings below to match your specific requirements
    headers: {
      "Access-Control-Allow-Origin": "*", // Restrict this to domains you trust
      "Access-Control-Allow-Headers": "*", // Specify only the headers you need to allow
    },
    body: JSON.stringify({res:res,name:env.NAME}),
  };
};