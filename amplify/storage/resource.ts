import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'Luah-ts',
  access: (allow) => ({
    'global/*': [
      allow.guest.to(['read']),
      allow.authenticated.to(['read']),
    ],
    'public/media/*': [
      allow.authenticated.to(['read']) // additional actions such as "write" and "delete" can be specified depending on your use case
    ]
  })
});
