import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/data';
import { Schema } from '../../data/resource';
import { env } from '$amplify/env/todo-access'; // replace with your function name
import type { Handler } from 'aws-lambda';
import { listTodos } from './graphql/queries';

Amplify.configure(
  {
    API: {
      GraphQL: {
        endpoint: "https://gw6vwaqpq5ekdhrv2kk6esoeq4.appsync-api.eu-central-1.amazonaws.com/graphql", // replace with your defineData name
        region: env.AWS_REGION,
        defaultAuthMode: 'identityPool'
      }
    }
  },
  {
    Auth: {
      credentialsProvider: {
        getCredentialsAndIdentityId: async () => ({
          credentials: {
            accessKeyId: env.AWS_ACCESS_KEY_ID,
            secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
            sessionToken: env.AWS_SESSION_TOKEN,
          },
        }),
        clearCredentialsAndIdentityId: () => {
          /* noop */
        },
      },
    },
  }
);

const dataClient = generateClient<Schema>();

export const handler: Handler = async (event, context) => {
    await dataClient.graphql({
        query: listTodos,
      });
    
      return event;
};