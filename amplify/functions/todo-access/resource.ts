import { defineFunction, secret } from '@aws-amplify/backend';

export const todoAccess = defineFunction({
  name: 'todo-access',
  entry: './handler.ts',
  environment: {
    NAME: "Luah",
    APIKEY: secret('APKEY'),
    APIURL: secret('APURL')
  }
});