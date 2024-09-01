// import { Amplify } from 'aws-amplify';
// import { generateClient } from 'aws-amplify/data';
// import { Schema } from '../data/resource';
// import { env } from '$amplify/env/todo-access.ts'; // replace with your function name


// Amplify.configure(
//   {
//     API: {
//       GraphQL: {
//         endpoint: env.GRAPHQL_ENDPOINT, // replace with your defineData name
//         region: env.AWS_REGION,
//         defaultAuthMode: 'identityPool'
//       }
//     }
//   },
//   {
//     Auth: {
//       credentialsProvider: {
//         getCredentialsAndIdentityId: async () => ({
//           credentials: {
//             accessKeyId: env.AWS_ACCESS_KEY_ID,
//             secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
//             sessionToken: env.AWS_SESSION_TOKEN,
//           },
//         }),
//         clearCredentialsAndIdentityId: () => {
//           /* noop */
//         }, 
//       },
//     },
//   }
// );

// const dataClient = generateClient<Schema>();

// export const handler = async (event) => {
//   // your function code goes here
// }